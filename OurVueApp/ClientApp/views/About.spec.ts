import { mount, VueWrapper } from '@vue/test-utils'
import About from './AboutPage.vue';

describe('It tests the About page', () => {
    let wrapper: VueWrapper<any>;

    beforeEach(() => {
        wrapper = mount(About);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('Renders the page', () => {
        expect(wrapper).not.toBeNull();
        expect(wrapper.exists()).toBeTruthy();

        const page = wrapper.find('#about-page');
        expect(page).not.toBeNull();
        expect(page.exists()).toBeTruthy();
    });
});
