import { mount, VueWrapper } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue';


describe('It tests the Navbar.vue component', () => {
    let wrapper: VueWrapper<any>;

    beforeEach(() => {
        wrapper = mount(Navbar);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('Tests that the Navbar renders', () => {
        expect(wrapper).not.toBeNull();
        const navbar = wrapper.find('#navbar-component');
        expect(navbar.exists()).toBeTruthy();
    });
});
