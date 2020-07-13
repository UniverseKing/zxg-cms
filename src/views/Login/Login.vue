<template>
<div class="login">
    <div class="loginBox">
        <h2 class="loginH2"><strong>知心购</strong> 后台管理系统</h2>
        <div class="loginCon">
            <div class="titleDiv">
                <h3>知行合壹</h3>
                <p>以简御繁 知行合壹</p>
                <i class="el-icon-collection-tag"></i>
            </div>
            <el-form ref="loginForm" :rules="rules" :model="ruleForm">
                <el-form-item prop="username">
                    <el-input placeholder="请输入账号" prefix-icon="el-icon-user" v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="ruleForm.password" show-password></el-input>
                </el-form-item>
                <el-button type="primary" class="loginBtn" @click="loginHandler()">登录</el-button>
            </el-form>
        </div>
    </div>
    <div class="slideShadow" v-show="showSlide">
        <transition>
            <div class="slideSty animated bounce">
                <slide-verify @success="onSuccess" @fail="onFail" sliderText="向右滑动" :w="350" :h="175" ref="slideDiv"></slide-verify>
                <div class="iconBtn">
                    <i class="el-icon-circle-close" @click="showSlide = false"></i><i class="el-icon-refresh" @click="refresh"></i>
                </div>
            </div>
        </transition>
    </div>
</div>
</template>

<script>
import {
    login,
    roleinfo
} from '@/api/user'
import {
    mapMutations
} from 'vuex'
import SlideVerify from '@/components/SlideVerify'
import {
    Message
} from 'element-ui'
export default {
    data() {
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            }
            /*else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/.test(value)) {
                           callback(new Error('至少8-16个字符，至少1个大写字母，1个小写字母和1个数字'));
                       } */
            else {
                callback();
            }
        };
        return {
            showSlide: false,
            ruleForm: {
                username: '',
                password: ''
            },
            rules: {
                username: [{
                        required: true,
                        message: '请输入用户名称',
                        trigger: 'blur'
                    },
                    {
                        min: 3,
                        max: 5,
                        message: '长度在 6 到 12 个字符',
                        trigger: 'blur'
                    }
                ],
                password: [{
                    validator: validatePass,
                    trigger: 'blur'
                }]
            }
        }
    },
    methods: {
        onSuccess() {
            console.log('ok')
            this.showSlide = false
            this.fetchLogin()
        },
        onFail() {
            console.log('fail')
        },
        refresh() {
            console.log('refresh')
            this.$refs.slideDiv.reset()
        },
        loginHandler() {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    console.log('ok')
                    // 发送网络请求
                    // this.fetchLogin()
                    this.showSlide = true
                } else {
                    console.log('failed');
                    return false;
                }
            })
        },
        async fetchLogin() {
            const res = await login('login', this.ruleForm)
            if (res.meta.status == 400) {
                Message.error({message:res.meta.msg,duration:1000})
                this.refresh()
                return
            }
            // 解构赋值
            const {
                token,
                rid,
                username
            } = res.data
            // this.$store.commit('SET_TOKEN',token)
            this.SET_TOKEN(token)

            // 获取角色信息
            const info = await roleinfo('roles/' + rid, null)
            console.log(info)
            const {
                roleName
            } = info.data

            // 将用户和角色相关信息全部保存到store中
            this.SET_USERINFO({
                username,
                roleName
            })

            this.$router.push('/')
        },
        // ...mapMutations('user',[
        //     'SET_TOKEN'
        // ])
        ...mapMutations({
            SET_TOKEN: 'user/SET_TOKEN',
            SET_USERINFO: 'user/SET_USERINFO'
        })
    },
    components: {
        SlideVerify
    }
}
</script>

<style lang="scss" scoped>
.login {
    height: 100%;
    width: 100%;
    background: url(../../assets/pageBg/loginBg.jpg) no-repeat center center;
    background-size: 100% 100%;
    overflow: hidden;

    .loginBox {
        height: 455px;
        width: 550px;
        margin: 0 auto;
        position: relative;
        top: 50%;
        margin-top: -287px;

        .loginH2 {
            font-size: 38px;
            color: #fff;
            text-align: center;
        }

        .loginCon {
            margin-top: 30px;
            background: #eee;
            border-radius: 4px;

            .titleDiv {
                padding: 0 28px;
                background: #fff;
                position: relative;
                height: 120px;
                border-radius: 4px 4px 0 0;

                h3 {
                    font-size: 22px;
                    color: #555;
                    font-weight: initial;
                    padding-top: 23px;
                }

                p {
                    font-size: 16px;
                    color: #888;
                    padding-top: 12px;
                }

                i {
                    font-size: 48px;
                    color: #ddd;
                    position: absolute;
                    right: 27px;
                    top: 29px;
                }
            }

            .el-form {
                padding: 25px 25px 30px 25px;
                background: #eee;
                border-radius: 0 0 4px 4px;

                .loginBtn {
                    width: 100%;
                    background: #19b9e7;
                }
            }
        }
    }

    .slideShadow {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 999;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);

        .slideSty {
            position: absolute;
            width: 380px;
            height: 311px;
            background: #e8e8e8;
            border: 1px solid #dcdcdc;
            left: 50%;
            top: 50%;
            margin-left: -188px;
            margin-top: -176px;
            z-index: 99;
            border-radius: 5px;

            .slide-verify {
                margin: 13px auto 0 auto;
                width: 350px !important;
            }

            .slide-verify-slider {
                width: 100% !important;
            }

            .slide-verify-refresh-icon {
                display: none;
            }

            .iconBtn {
                padding: 9px 0 0 19px;
                color: #5f5f5f;
                border-top: 1px solid #d8d8d8;
                margin-top: 17px;

                i {
                    font-size: 22px;
                    cursor: pointer;
                }

                i:last-child {
                    margin-left: 7px;
                }
            }
        }
    }
}
</style>
