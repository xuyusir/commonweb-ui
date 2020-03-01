<template>
  <div class="login">

    <el-form class="login-form" :model="loginForm" :rules="loginRules" ref="loginForm">
      <h3 class="title">yuyu's commonweb</h3>

      <el-form-item prop="username">
        <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="username">
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input type="text" v-model="loginForm.password" auto-complete="off" placeholder="password">
        </el-input>
      </el-form-item>

      <el-form-item prop="code">
        <el-input
          v-model="loginForm.code"
          auto-complete="off"
          placeholder="verification code">
        </el-input>
      </el-form-item>

      <el-checkbox style="margin:0px 0px 10px 0px;" v-model="loginForm.rememberMe">remember me</el-checkbox>

      <el-form-item>
        <el-button
          size="big"
          type="primary"
          style="width:100%;" @click="handleLogin">
          login
        </el-button>
      </el-form-item>

    </el-form>
    <!--  底部  -->
    <div class="el-login-footer">
      <span>Copyright © 2018-2019 yuyu All Rights Reserved.</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: '',
        password: '',
        rememberMe: false,
        code: ''
      },
      loginRules: {
        username: [
          {required: true, trigger: 'change', message: 'username cant empty'}
        ],
        password: [
          {required: true, trigger: 'change', message: 'password cant empty'}
        ],
        code: [{required: true, trigger: 'change', message: 'verification code cant empty'}]
      }
    }
  },
  methods: {
    handleLogin () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.axios.post('apis/login', {
            username: this.loginForm.username,
            password: this.loginForm.password,
            rememberMe: this.loginForm.rememberMe,
            code: this.loginForm.code
          })
            .then(response => {
              console.log(response)
              if (response.data.code === 0) {
                this.$router.push('/common/mainhome')
              } else {
                alert('username or password error')
              }
            }
            )
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }

}
</script>

<style>
  body {
    margin: 0;
  }

  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("../assets/image/login-background.jpg");
    height: 100vh;
    background-size: cover;
  }

  .login-form {
    width: 400px;
    background: #ffffff;
    padding: 25px 25px 5px 25px;
    border-radius: 6px;
  }

  .el-login-footer {
    color: #fff;
    font-family: Arial;
    height: 40px;
    line-height: 40px;
    position: fixed;
    bottom: 0;
    text-align: center;
  }

  .title {
    margin: 0px auto 30px auto;
    text-align: center;
    color: #707070;
  }

</style>
