<template>
    <div>
        {{ this.$root.$data.user }}
    </div>
</template>

<script>
    export default {
        data: function() {
            return {}
        },
        created(){
            console.log('Dashboard has started.');
        },
        mounted() {
            console.log('Dashboard is ready.')
          }
    }
</script>
