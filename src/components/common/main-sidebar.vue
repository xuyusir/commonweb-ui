<template>
    <div class="sidebar">
       

    </div>
</template>

<script>
    export default {
        name: 'mainSidebar',
        data() {
            return {
               
            }
        }，
        mout():{
            initMenu:function(){

            }

        },
        methods:{
               handleNodeClick(data) {
        console.log(data);
      }
        }
    }
</script>

<style>
    .sidebar {
        flex-shrink: 0;
        flex-direction: column;
        width: 250px;
        background-color: aqua;
    }
</style>