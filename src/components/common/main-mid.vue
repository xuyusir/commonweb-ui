<template>
  <div class="main-mid">
      <mainSidebar></mainSidebar>
      <mainContext></mainContext>
  </div>
</template>

<script>
import mainSidebar from './main-sidebar'
import mainContext from './main-context'

export default {
  name: 'mainMid',
  components:{
    mainSidebar,
    mainContext}
}
</script>

<style>
.main-mid{
  display: flex;
}

</style>
