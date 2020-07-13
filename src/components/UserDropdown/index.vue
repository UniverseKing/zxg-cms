<template>
<div>
    <el-dropdown class="userDd">
        <div class="userDrop">
            <span class="userDrop_text">zxx<i class="el-icon-caret-bottom"></i></span>
            <img src="@/assets/avatar.jpg" alt="user" />
        </div>
        <el-dropdown-menu solt="dropdown">
            <el-dropdown-item>
                <router-link to="/"><i class="el-icon-s-home"></i>首页</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
                <router-link to="/"><i class="el-icon-s-custom"></i>我的主页</router-link>
            </el-dropdown-item>
            <el-dropdown-item divided>
                <a href="javascript:void(0)" @click="loginOut"><i class="el-icon-switch-button"></i>登出</a>
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex'
export default {
    /*
    computed: {
        ...mapGetters(['userName'])
    },
    */
    methods: {
        loginOut() {
            // this.$store.dispatch('user/loginOut')
        }
    }
}
</script>