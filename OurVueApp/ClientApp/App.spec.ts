import { mount, VueWrapper } from '@vue/test-utils'
import App from './App.vue';


describe('It tests the App.vue', () => {
    let wrapper: VueWrapper<any>;

    beforeEach(() => {
        wrapper = mount(App);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('Tests that it renders', () => {
        expect(wrapper).not.toBeNull();

        expect(wrapper.text()).toBe('Hello from .NET');
    });
});
