import { mount, VueWrapper } from '@vue/test-utils'
import App from './App.vue';


describe('It tests the App.vue', () => {
    let wrapper: VueWrapper<any>;

    beforeEach(() => {
        wrapper = mount(App, {
            global: {
                stubs: {
                    RouterView: {
                        template: '<span />'
                    }
                }
            }
        });
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('Tests that it renders', () => {
        expect(wrapper).not.toBeNull();
        const app = wrapper.find('#app-component');
        expect(app.exists()).toBeTruthy();
    });
});
