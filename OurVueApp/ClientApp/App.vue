<template>
    <div id="app-component" class="container-fluid">
        <navbar alignment="left">
            <template #content>
                <nav-item-text v-for="(item,index) in navItems" :key="index" :button="item"></nav-item-text>
            </template>
        </navbar>
        <div class="row" id="page-content">
            <router-view v-slot="{ Component }">
                <transition appear enter-active-class="animated fadeIn">
                    <suspense>
                        <template #default>
                            <component :is="Component" />
                        </template>
                        <template #fallback>
                            <div>Loading...</div>
                        </template>
                    </suspense>
                </transition>
            </router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Navbar from '@/components/Navbar.vue';
    import NavItemText from '@/components/NavItemText.vue';

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
    ];
</script>

<style lang="scss">
#app-component{
    #page-content {
        padding-top: 84px;
    }
}
</style>
