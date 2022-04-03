import { isKeychainInstalled } from "@hiveio/keychain"
import { reactive, watch } from "vue";

// Maximum number of times we will look for the Keychain plugin
const MAX_TRIES = 10;
// Time to wait between tries in milliseconds
const TIMEOUT = 10;

type KeyChainState = {
  keychainInstalled: boolean;
  tries: number;
  interval: number;
}

export default KeyChainState;

export const state: KeyChainState = reactive<KeyChainState>({
  keychainInstalled: false,
  tries: 0,
  interval: -1
});

// Do a check right away if not found use setInterval to check
const checkForKeyChain = async (): Promise<void> =>{
  const response = await isKeychainInstalled(window);
  if(response && response.installed){
    state.keychainInstalled = response.installed;
  } else {
    state.interval = setInterval(async () => {
      await checkForKeyChain();
      state.tries++;
    }, 1);
  }
};
  
// Use a watch on the tries, if we hit a max or find it installed stop trying
watch(() : number => state.tries, (count: number, prevCount: number) => {
  if(count === MAX_TRIES || state.keychainInstalled) {
    clearInterval(state.interval);
  }
});


(function() {
  checkForKeyChain();
})();