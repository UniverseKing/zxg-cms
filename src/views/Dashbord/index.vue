<template>
<div>
    <el-row :gutter="40">
        <el-col :span="8">
            <el-card shadow="hover" class="mgb40" style="height:252px;">
                <div class="user-info">
                    <img src="../../assets/avatar.jpg" class="user-avator" alt="">
                    <div class="user-info-cont">
                        <div class="user-info-name">{{userinfo.username}}</div>
                        <div>{{userinfo.roleName}}</div>
                    </div>
                </div>
                <div class="user-info-list">上次登录时间：<span>2019-11-01</span></div>
                <div class="user-info-list">上次登录地点：<span>武汉</span></div>
            </el-card>
            <el-card shadow="hover" style="height:252px;font-size:16px;">
                <div slot="header" class="clearfix">
                    <span style="font-size:14px">语言详情</span>
                </div>
                Vue
                <el-progress :percentage="71.3" color="#42b983"></el-progress>
                JavaScript
                <el-progress :percentage="24.1" color="#f1e05a"></el-progress>
                CSS
                <el-progress :percentage="3.7"></el-progress>
                HTML
                <el-progress :percentage="0.9" color="#f56c6c"></el-progress>
            </el-card>
        </el-col>
        <el-col :span="16">
            <el-row :gutter="40" class="mgb40">
                <el-col :span="8">
                    <el-card shadow="hover" :body-style="{padding: '0px'}">
                        <div class="grid-content grid-con-1">
                            <i class="el-icon-user grid-con-icon"></i>
                            <div class="grid-cont-right">
                                <div class="grid-num">1234</div>
                                <div>用户访问量</div>
                            </div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card shadow="hover" :body-style="{padding: '0px'}">
                        <div class="grid-content grid-con-2">
                            <i class="el-icon-message grid-con-icon"></i>
                            <div class="grid-cont-right">
                                <div class="grid-num">321</div>
                                <div>系统消息</div>
                            </div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card shadow="hover" :body-style="{padding: '0px'}">
                        <div class="grid-content grid-con-3">
                            <i class="el-icon-shopping-cart-full grid-con-icon"></i>
                            <div class="grid-cont-right">
                                <div class="grid-num">5000</div>
                                <div>数量</div>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <el-card shadow="hover" style="height:403px;">
                <div slot="header" class="clearfix" style="font-size:16px">
                    <span>待办事项</span>
                    <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
                </div>
                <el-table :data="todoList" :show-header="false" height="304" style="width: 100%;font-size:14px;">
                    <el-table-column width="40">
                        <template slot-scope="scope">
                            <el-checkbox v-model="scope.row.status"></el-checkbox>
                        </template>
                    </el-table-column>
                    <el-table-column>
                        <template slot-scope="scope">
                            <div class="todo-item" :class="{'todo-item-del': scope.row.status}">{{scope.row.title}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column width="60">
                        <template>
                            <i class="el-icon-edit"></i>
                            <i class="el-icon-delete"></i>
                        </template>
                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>
    </el-row>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'dashboard',
    data() {
        return {
            name: localStorage.getItem('ms_username'),
            todoList: [{
                    title: '今天要修复1000行代码',
                    status: false,
                },
                {
                    title: '今天要写1000行代码加几个bug吧',
                    status: false,
                }, {
                    title: '今天要修复100个bug',
                    status: false,
                },
                {
                    title: '今天要修复100个bug',
                    status: true,
                },
                {
                    title: '今天要写100行代码加几个bug吧',
                    status: true,
                },
                {
                    title: '今天要写100行代码加几个bug吧',
                    status: true,
                }
            ],
            data: [{
                    name: '2018/09/04',
                    value: 1083
                },
                {
                    name: '2018/09/05',
                    value: 941
                },
                {
                    name: '2018/09/06',
                    value: 1139
                },
                {
                    name: '2018/09/07',
                    value: 816
                },
                {
                    name: '2018/09/08',
                    value: 327
                },
                {
                    name: '2018/09/09',
                    value: 228
                },
                {
                    name: '2018/09/10',
                    value: 1065
                }
            ],
            options: {
                title: '最近七天每天的用户访问量',
                showValue: false,
                fillColor: 'rgb(45, 140, 240)',
                bottomPadding: 30,
                topPadding: 30
            },
            options2: {
                title: '最近七天用户访问趋势',
                fillColor: '#FC6FA1',
                axisColor: '#008ACD',
                contentColor: '#EEEEEE',
                bgColor: '#F5F8FD',
                bottomPadding: 30,
                topPadding: 30
            }
        }
    },
    components: {
        // Schart
    },
    computed: {
       ...mapGetters('user',['userinfo'])
    },
    created() {
        this.handleListener();
        this.changeDate();
    },
    activated() {
        this.handleListener();
    },
    deactivated() {},
    methods: {
        changeDate() {
            const now = new Date().getTime();
            this.data.forEach((item, index) => {
                const date = new Date(now - (6 - index) * 86400000);
                item.name = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`
            })
        },
        handleListener() {},
        handleBus() {
            setTimeout(() => {
                this.renderChart()
            }, 300);
        },
        renderChart() {
            this.$refs.bar.renderChart();
            this.$refs.line.renderChart();
        }
    }
}
</script>

<style scoped>
.el-row {
    margin-bottom: 20px;
}

.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
}

.grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
}

.grid-num {
    font-size: 30px;
    font-weight: bold;
}

.grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.grid-con-1 .grid-con-icon {
    background: linear-gradient(270deg, #3ea7d8, #5ec8e2);
}

.grid-con-1 .grid-num {
    color: #3ea7d8;
}

.grid-con-2 .grid-con-icon {
    background: linear-gradient(270deg, #7286de, #8991ed);
}

.grid-con-2 .grid-num {
    color: #7286de;
}

.grid-con-3 .grid-con-icon {
    background: linear-gradient(270deg, #fc878d, #ff9981);
}

.grid-con-3 .grid-num {
    color: #fc878d;
}

.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}

.user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}

.user-info-list span {
    margin-left: 70px;
}

.mgb40 {
    margin-bottom: 40px;
}

.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: #999;
}

.schart {
    width: 100%;
    height: 300px;
}
</style>
