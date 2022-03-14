<template>
    <div id="navbar-component">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-0">
            <div class="navbar-header my-2">
                <a class="navbar-brand py-0 mr-0" href="#"></a>
            </div>

            <button class="navbar-toggler ml-auto collapsed"
                    type="button"
                    id="navbar-toggler"
                    ref="navbarToggler"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    @click="toggleMenu">
                <span class="navbar-toggler-icon" />
            </button>

            <div class="collapse navbar-collapse" ref="navbarContent" id="navbarContent">
                <div class="navbar-nav mr-auto">
                    <slot name="content"></slot>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const navbarToggler = ref<HTMLButtonElement>();
    const navbarContent = ref<HTMLDivElement>();

    function toggleMenu($event: PointerEvent) {
        if (!navbarToggler || !navbarToggler.value || !navbarContent || !navbarContent.value) {
            return;
        }

        navbarToggler.value.classList.toggle('collapsed');
        navbarContent.value.classList.toggle('show');

        if (navbarToggler.value.ariaExpanded === 'true') {
            navbarToggler.value.ariaExpanded = 'false';
        }
        else {
            navbarToggler.value.ariaExpanded = 'true';
        }
    }
</script>

<style lang="scss">
    #navbar-component {
        nav {
            &.navbar {
                .navbar-header {
                    max-height: 64px;

                    .navbar-brand {
                        background-image: url(../assets/vuelogo.png);
                        max-width: 78px;
                        max-height: 78px;
                        min-width: 64px;
                        min-height: 64px;
                        background-repeat: no-repeat;
                    }
                }
            }
        }
    }
</style>
