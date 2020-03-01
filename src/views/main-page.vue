<template>
  <div class="main-page">
      <template>
        <mainNavbar></mainNavbar>
        <mainMid></mainMid>
      </template>

  </div>
</template>

<script>

import mainNavbar from '../components/common/main-navbar'
import mainMid from '../components/common/main-mid'

export default {
  name: 'mainPage',
  components: {
    mainNavbar,
    mainMid
  }
}
</script>

<style>
.main-page{

}

</style>
