<template>
    <div id="app-component" class="container-fluid">
        <navbar alignment="right">
            <template #content>
                <p style="color:white;">Navigation</p>
            </template>
        </navbar>
        <div class="row" id="page-content">
            <div class="offset-2 col-8 text-center">
                <h4>Hello from .NET</h4>
            </div>
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
