<template>
<div id="app">
    <router-view />
</div>
</template>

<script>
import {
    login,
    users
} from '@/api/user'
export default {
    created(){
        /*
        const url = 'login'
        const data = {
            username:'admin',
            password:'123456'
        }
        login(url,data).then(res=>{
            console.log(res)
            localStorage.setItem('zxg-cms-token',res.data.token)
        })
        */

        // this.fetchUsers()
        
    },
    methods:{
        fetchUsers(){
            const params = {
                query:'',
                pagenum:1,
                pagesize:10
            }
            users('users',params).then(res=>{
                console.log(res)
            })

        }
    }
}
</script>

<style lang="scss">

</style>
