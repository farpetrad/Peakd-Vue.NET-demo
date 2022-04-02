import { mount, VueWrapper, flushPromises } from '@vue/test-utils'
import Home from './HomePage.vue';
import { defineComponent,h, Suspense } from "vue";

import axios from "axios";

jest.spyOn(axios, 'get').mockResolvedValue({ data: 'some mocked data!' });

describe('It tests the home page', () => {
    let wrapper: VueWrapper<any>;

    beforeEach(async () => {
        wrapper = await mountSuspense();
    });

    afterEach(() => {
        wrapper.unmount();
    });

    const mountSuspense =  async () => {
      const wrapper = mount(defineComponent({
        render() {
          return h(Suspense, null, {
            default: h(Home),
            fallback: h('div', 'fallback')
          })
        }}));
  
      await flushPromises()
      return wrapper
    }

    it('Renders the page', () => {
        expect(wrapper).not.toBeNull();
        expect(wrapper.exists()).toBeTruthy();

        const page = wrapper.find('#home-page');
        expect(page).not.toBeNull();
        expect(page.exists()).toBeTruthy();
    });
});
