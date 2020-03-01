<template>
  <div class="add-user">
    <el-form ref="from" :model="formdata" class="add-user-form" label-width="80px">
      <el-form-item label="username:">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>

      <el-form-item label="password:">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>
  

    <el-form-item label="roles:">
      <el-checkbox-group v-model="formdata.rolesChecks">
        <el-checkbox v-for="role in formdata.roles" :label="role" :key="role"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>

      <el-form-item>
    <el-button type="primary">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>

  <router-view></router-view>
      </el-form>
    
  </div>
</template>

<script>
export default {
  name: "addUser",
  data() {
    return {
        formdata:{
            username:"",
            password:"",
            roles:[],
            rolesChecks:[]
        }
    };
  },
  mounted:{

  }
};
</script>

<style>
.add-user {
    display: flex;
}
.add-user-form{
    margin: 200px auto;
}
</style>
