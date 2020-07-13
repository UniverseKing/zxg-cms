<template>
<div class="sideBar">
    <el-scrollbar>
        <el-menu :router="true" :unique-opened="true" default-active="0" class="el-menu-vertical-zxg" background-color="#3a3f51" text-color="#b5b6bd" active-text-color="rgb(79, 148, 212)" mode="vertical" :collapse-transition="false" :collapse="opened">
            <el-menu-item index="/">
                <i class="el-icon-s-home"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-s-custom"></i>
                    <span>用户管理</span>
                </template>
                <el-menu-item index="/users">
                    <template slot="title">
                        <i class="el-icon-user"></i>
                        <span>用户列表</span>
                    </template>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-lock"></i>
                    <span>权限管理</span>
                </template>
                <el-menu-item index="/rights">
                    <template slot="title">
                        <i class="el-icon-unlock"></i>
                        <span>权限列表</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/roles"><template slot="title">
                        <i class="el-icon-watch"></i>
                        <span>角色列表</span>
                    </template></el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-s-goods"></i>
                    <span>商品管理</span>
                </template>
                <el-menu-item index="/goods">
                    <template slot="title">
                        <i class="el-icon-present"></i>
                        <span>商品列表</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/params">
                    <template slot="title">
                        <i class="el-icon-present"></i>
                        <span>分类参数</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/categories"><template slot="title">
                        <i class="el-icon-c-scale-to-original"></i>
                        <span>商品分类</span>
                    </template></el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-s-order"></i>
                    <span>订单管理</span>
                </template>
                <el-menu-item index="/orders">
                    <template slot="title">
                        <i class="el-icon-shopping-cart-1"></i>
                        <span>订单列表</span>
                    </template>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="5">
                <template slot="title">
                    <i class="el-icon-s-tools"></i>
                    <span>数据统计</span>
                </template>
                <el-menu-item index="/reports">
                    <template slot="title">
                        <i class="el-icon-document"></i>
                        <span>数据报表</span>
                    </template>
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </el-scrollbar>
</div>
</template>

<script>
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
    methods: {
        handleOpen() {
            // console.log(key, keyPath);
        },
        handleClose() {
            // console.log(key, keyPath);
        }
    }
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-zxg:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
