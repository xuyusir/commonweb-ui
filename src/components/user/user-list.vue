<template>
  <div class="user-list">

        <el-button type="primary" @click="adduser">新增用户</el-button>
        <el-table
            :data="users"
            style="width: 100%">
            <el-table-column
                prop="username"
                label="username"
                width="180">
            </el-table-column>
            <el-table-column
                prop="password"
                label="password"
                width="180">
            </el-table-column>
        </el-table>
  </div>
</template>

<script>


export default {
  name: 'userList',
  components:{},
  data(){
      return{
          users:null
      }
  },
  mounted(){
      this.axios.get('/apis/user/getusers',{})
      .then(response => {
        this.users=response.data.data
        console.log(this.users)
      })
      
  },
  methods:{
    adduser:function(){
      this.$router.push({path:'adduser'})
    }
  }
}
</script>

<style>
.user-list{
  
}

</style>
