<template>
    <div id="app-component" class="container-fluid">
        <navbar alignment="right">
            <template #content>
                <p style="color:white;">Navigation</p>
            </template>
        </navbar>
        <div class="row" id="page-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Navbar from './components/Navbar.vue';
</script>

<style lang="scss">
#app-component{
    #page-content {
        padding-top: 84px;
    }
}
</style>
