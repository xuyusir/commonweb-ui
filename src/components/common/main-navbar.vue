<template>
  <div class="navbar">
    <div class="logo">
      <h3>yuyu's common web</h3>
    </div>
      <div class="head">
        admin
        <a href="#" @click="logout">logout</a>
      </div>

  </div>
</template>

<script>
export default {
  name: 'mainNavbar',
  methods:{
    logout:function(){
      this.axios.post('/apis/logout').then(response=>{
        if(response.data.code===0){
          this.$router.push({path:'/login'})
        }
        else{
          alert('error')
        }
      })
    }
  }
}
</script>

<style>
.navbar{
    display: flex;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    background-color: lightgreen;
}
h3{
  text-align: center;
  margin: 0;
  color:white;
  
}
.head{

}
.logo{
  width: 250px;
  
}

</style>
