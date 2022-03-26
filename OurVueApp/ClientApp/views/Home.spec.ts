import { mount, VueWrapper } from '@vue/test-utils'
import Home from './Home.vue';

describe('It tests the home page', () => {
    let wrapper: VueWrapper<any>;

    beforeEach(() => {
        wrapper = mount(Home);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('Renders the page', () => {
        expect(wrapper).not.toBeNull();
        expect(wrapper.exists()).toBeTruthy();

        const page = wrapper.find('#home-page');
        expect(page).not.toBeNull();
        expect(page.exists()).toBeTruthy();
    });
});
