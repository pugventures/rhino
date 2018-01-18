<template>
    <div id="dashboard">
        <dashboardHeader></dashboardHeader>
        <navigation></navigation>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                navSection: null,
                dashboardComponent: null
            }
        },
        components: {
            'dashboardHeader': require('./DashboardHeaderComponent.vue'),
            'navigation': require('./Navigation/NavigationComponent.vue')
        }
    }
</script>
