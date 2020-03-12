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
        <el-checkbox-group v-model="checkedItem">
          <el-checkbox
            v-for="role in formdata.rolesChoose"
            :label="role.id"
            :key="role.id"
          >{{role.name}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "addUser",
  data() {
    return {
      formdata: {
        username: "",
        password: "",
        roles: [],
        rolesChoose: []
      },
      checkedItem: []
    };
  },
  mounted() {
    this.axios.get("/apis/user/getroles", {}).then(response => {
      this.formdata.rolesChoose = response.data.data;
      console.log(response);
    });
  },
  methods: {
    submit: function() {

      // 封装roles参数
      this.checkedItem.forEach(element => {
        var ids=new Object()
        ids.id=element
        this.formdata.roles.push(ids);
      });

      this.axios
        .post("/apis/user/adduser", {
           username:this.formdata.username,
           password:this.formdata.password,
           roles:this.formdata.roles,
        })
        .then(response => {
          console.log(response);
        });
    }
  }
};
</script>

<style>
.add-user {
  display: flex;
}
.add-user-form {
  margin: 200px auto;
}
</style>
