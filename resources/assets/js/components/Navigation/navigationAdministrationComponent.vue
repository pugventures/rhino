<template>
    <li class="nav-item">
        <a id="navgiationAdministrationComponent" href="#" v-on:click="setNavigation()" class="nav-link with-sub" >
            <i class="fas fa-cog"></i>
            <span class="pl-2">Administration</span>
        </a>
        <ul v-if="this.$root.$data.navSection == 'administration'" class="nav-sub" style='display:block;'>
            <li v-on:click="showUsersPanel()" class="nav-item"><a href="#" class="nav-link">Users</a></li>
        </ul>
    </li><!-- nav-item -->
</template>

<script>
    export default {
        data: function() {
            return {
                isActive: false
            }
        },
        methods: {
            setNavigation: function() {
                this.$emit('navClicked')
                
                $('#navgiationAdministrationComponent').addClass('active show-sub');
                
                this.$root.$data.navSection = 'administration';
            },
            showUsersPanel: function() {
                this.$emit('panelChosen');
                this.$root.$data.panel = 'users';
            }
        }
    }
</script>