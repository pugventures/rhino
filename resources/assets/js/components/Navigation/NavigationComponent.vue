<template>
    <div class="am-sideleft">
        <ul class="nav am-sideleft-tab">
            <li class="nav-item">
                <a href="" class="nav-link"><i class="fas fa-home"></i></a>
            </li>
            <li class="nav-item">
                <a href="" class="nav-link"></a>
            </li>
            <li class="nav-item">
                <a href="" class="nav-link"></a>
            </li>
            <li class="nav-item">
                <a href="" class="nav-link"></a>
            </li>
        </ul>

        <div class="tab-content">
            <div id="mainMenu" class="tab-pane active">
                <ul class="nav am-sideleft-menu">
                    <li class="nav-item">
                        <a href="" class="nav-link">
                            <i class="fas fa-home"></i>
                            <span class="pl-2">Dashboard</span>
                        </a>
                    </li><!-- nav-item -->
                    <navigationProducts @navClicked="resetNav"></navigationProducts>
                    <navigationAdministration @navClicked="resetNav" @panelChosen="resetPanels"></navigationAdministration>
                </ul>
            </div><!-- #mainMenu -->
        </div><!-- tab-content -->
    </div><!-- am-sideleft -->
</template>

<script>
    export default {
        data: function() {
            return {}
        },
        components: {
            'navigationAdministration': require('./navigationAdministrationComponent.vue'),
            'navigationProducts': require('./navigationProductsComponent.vue')
        },
        methods: {
            resetNav: function() {
                $('.nav-link').removeClass('active show-sub');
            },
            resetPanels: function() {
                console.log('resetting panels');
            }
        }
    }
</script>