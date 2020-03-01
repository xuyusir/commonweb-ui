<template>
  <div class="navbar">
    <div class="logo">
      <h3>yuyu's common web</h3>
    </div>
      <div class="head">
        admin
      </div>

  </div>
</template>

<script>
export default {
  name: 'mainNavbar',
  mounted:{
    
  }
}
</script>

<style>
.navbar{
    display: flex;
    height: 50px;
    justify-content: space-between;
}
h3{
  margin: 0px;
  color:white;
}
.head{

}
.logo{
  width: 250px;
  background-color:green;
}

</style>
