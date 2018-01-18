<template>
    <li class="nav-item">
        <a id="navgiationProductsComponent" href="#" v-on:click="setNavigation()" class="nav-link with-sub">
            <i class="fas fa-cubes"></i>
            <span class="pl-2">Products</span>
        </a>
        <ul v-if="this.$root.$data.navSection == 'products'" class="nav-sub" style='display:block;'>
            <li class="nav-item"><a href="" class="nav-link">List Products</a></li>
            <li class="nav-item"><a href="" class="nav-link">New Product</a></li>
        </ul>
    </li><!-- nav-item -->
</template>

<script>
    export default {
        methods: {
            setNavigation: function() {
                this.$emit('navClicked')
                
                $('#navgiationProductsComponent').addClass('active show-sub');
                
                this.$root.$data.navSection = 'products';
            }
        }
    }
</script>