<template>
  <div class="sidebar">
   
  <el-menu default-active="2" :unique-opened="true">
    <el-submenu v-bind:index="m1.url==null || m1.url==''?m1.id+'#':m1.url" v-for="m1 in menus" :key="m1.name">
       <template slot="title">
          <span>{{m1.name}}</span>
        </template>
      <el-menu-item v-bind:index="m2.url==null || m2.url==''?m1.id+'-'+m2.id+'#':m2.url" v-for="m2 in m1.children" :key="m2.name"
      @click="handleurl(m2.url)"
      >{{m2.name}}</el-menu-item>
    </el-submenu>
  </el-menu>
  </div>
</template>

<script>
export default {
  name: "mainSidebar",
  data() {
    return {
      user: "",
      menus:""
    };
  }, 
  mounted(){
     //注入当前user
    this.user = JSON.parse(sessionStorage.getItem("userState"))
    this.axios.get('/apis/user/getmenus?id='+this.user.id,{})
      .then(response => {
        this.menus=response.data.data
        console.log(this.menus)
      })
  },
  methods: {
   handleurl:function(url){
     this.$router.push({path:url})

   }
  }
};
</script>

<style>
.sidebar {
  flex-direction: column;
  width: 250px;
  background-color: aqua;
}
</style>