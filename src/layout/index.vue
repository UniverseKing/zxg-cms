<template>
<div class="wrapper" :class="{ closeBar: opened }">
    <m-header></m-header>
    <div class="wrapper_con">
        <side-bar></side-bar>
        <page-main></page-main>
    </div>
</div>
</template>

<script>
import MHeader from './components/header'
import SideBar from './components/sidebar'
import PageMain from './components/main'

import {
    mapGetters
} from 'vuex'

export default {
    computed: {
        // ...mapGetters('app',['opened'])
        ...mapGetters({
            opened: 'app/opened'
        })
    },
    components:{
        MHeader,
        SideBar,
        PageMain
    }
}
</script>

<style>

</style>
