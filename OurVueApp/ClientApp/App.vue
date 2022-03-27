<template>
    <div id="app-component" class="container-fluid">
        <navbar alignment="left">
            <template #content>
                <nav-item-text v-for="(item,index) in navItems" :key="index" :link="item"></nav-item-text>
            </template>
        </navbar>
        <div class="row" id="page-content">
            <transition appear enter-active-class="animated fadeIn">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Navbar from '@/components/Navbar.vue';
    import NavItemText from '@/components/NavItemText.vue';
    import NavItemTextProps from '@/@types/NavItemProps';

    const navItems: NavItemTextProps[] = [
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
