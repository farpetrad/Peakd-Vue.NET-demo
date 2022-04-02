import { mount, VueWrapper } from '@vue/test-utils'
import NavItemText from './NavItemText.vue';

const TESTLABELTEXT = 'Test';

describe('It tests the home page', () => {
    let wrapper: VueWrapper<any>;

    beforeEach(() => {
        wrapper = mount(NavItemText, {
            global: {
                stubs: {
                    RouterView: {
                        template: '<span />'
                    },
                    RouterLink: {
                        template: `<a href="/">${TESTLABELTEXT}</a>`
                    }
                }
            },
            props: {
                link: {
                    label: TESTLABELTEXT,
                    href: '/',
                }
            },
        });
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('Renders the control', () => {
        expect(wrapper).not.toBeNull();
        expect(wrapper.exists()).toBeTruthy();

        const navItem = wrapper.find('#nav-item');
        expect(navItem).not.toBeNull();
        expect(navItem.exists()).toBeTruthy();
    });

    it('Contains the expected label when using router link', () => {
        expect(wrapper).not.toBeNull();
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper.text()).toBe(TESTLABELTEXT);
    });

    it('Contains the expected label when using anchor tags', () => {
        wrapper.unmount();
        
        const localWrapper = mount(NavItemText, {
            global: {
                stubs: {
                    RouterLink: {
                        template: `<span></span>`
                    }
                }
            },
            props: {
                link: {
                    label: "LOCAL",
                    href: 'http://www.somewebsite.com',
                }
            },
        });
        

        expect(localWrapper).not.toBeNull();
        expect(localWrapper.exists()).toBeTruthy();
        console.log('wrapper: ' + localWrapper);
        expect(localWrapper.text()).toBe("LOCAL");
    });
});
