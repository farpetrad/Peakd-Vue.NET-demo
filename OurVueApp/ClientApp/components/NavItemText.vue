<template>
    <div class="nav-item" id="nav-item">
        <router-link v-if="isInternalLink(button.href)" :to="button.href">{{button.label}}</router-link>
        <a v-else :href="button.href">{{button.label}}</a>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        button: {
            type: Object,
            required: true,
            default: () => {
                return {
                    label: '',
                    href: '',
                }
            }
        }
    });

    const isInternalLink = (link: string): boolean => {
        if (link.length && link.includes('http')) return false;
        return true;
    }
</script>

<style lang="scss">
    #nav-item {
        &.nav-item {
            padding-left: 1vw;
            padding-right: 1vw;

            a {
                text-decoration: none;
                color: #fff;
                font-weight: normal;
                display: inline-block;
                position: relative;

                &:hover {
                    font-weight: bold;
                }

                &:after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    transform: scaleX(0);
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: #fff;
                    transform-origin: bottom center;
                    transition: transform 0.15s ease-out;
                }

                &:hover:after {
                    transform: scaleX(1);
                    transform-origin: bottom center;
                }

                &.router-link-active {
                    font-weight: bolder;
                }
            }
        }

        .hover-underline-animation {
            display: inline-block;
            position: relative;
            color: #0087ca;
        }

        .hover-underline-animation:after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #0087ca;
            transform-origin: bottom center;
            transition: transform 0.25s ease-out;
        }

        .hover-underline-animation:hover:after {
            transform: scaleX(1);
            transform-origin: bottom center;
        }
    }
</style>
