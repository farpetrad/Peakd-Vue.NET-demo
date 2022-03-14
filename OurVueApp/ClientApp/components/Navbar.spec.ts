import { mount, VueWrapper } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue';

const toggleMenu = jest.fn();
const slotContent = '<p>Slot Content</p>'

describe('It tests the Navbar.vue component', () => {
    let wrapper: VueWrapper<any>;

    beforeEach(() => {
        wrapper = mount(Navbar, {
            global: {
                mocks: {
                    toggleMenu,
                },
            },
            slots: {
                content: slotContent,
            },
            props: {
                alignment: 'left',
            },
        });
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('Tests that the Navbar renders', () => {
        expect(wrapper).not.toBeNull();
        expect(wrapper.exists()).toBeTruthy();
        const navbar = wrapper.find('#navbar-component');
        expect(navbar.exists()).toBeTruthy();
    });

    it('Can expand the navbar hamburger', () => {
        expect(wrapper).not.toBeNull();
        expect(wrapper.exists()).toBeTruthy();

        const toggler = wrapper.find('#navbar-toggler');
        expect(toggler.exists()).toBeTruthy();

        toggler.trigger('click');
        expect(toggleMenu).toHaveBeenCalled();
    });

    it('Renders the slot content', () => {
        expect(wrapper).not.toBeNull();
        expect(wrapper.exists()).toBeTruthy();

        const contentContainer = wrapper.find('#navbarContent');
        expect(contentContainer.exists()).toBeTruthy();
        expect(contentContainer.html()).toContain(slotContent);
    });
});
