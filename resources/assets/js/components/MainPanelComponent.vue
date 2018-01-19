<template>
    <div id="primaryPanel">
        <div class="am-pagetitle">
            <h5 class="am-title">Blank Page</h5>
            <form id="searchBar" class="search-bar" action="index.html">
                <div class="form-control-wrapper">
                    <input type="search" class="form-control bd-0" placeholder="Search...">
                </div><!-- form-control-wrapper -->
                <button id="searchBtn" class="btn btn-orange"><i class="fa fa-search"></i></button>
            </form><!-- search-bar -->
        </div><!-- am-pagetitle -->

        <div class="am-mainpanel">
            <div class="am-pagebody">
                
                <dashboardPanel v-if="this.$root.$data.panel == 'dashboard'"></dashboardPanel>
                <usersPanel v-if="this.$root.$data.panel == 'users'"></usersPanel>

            </div><!-- am-pagebody -->
        </div><!-- am-mainpanel -->
    </div>
</template>

<script>
    export default {
        components: {
            'dashboardPanel': require('./Dashboard/dashboardPanelComponent.vue'),
            'usersPanel': require('./Users/usersPanelComponent.vue')
        },
    }
</script>
