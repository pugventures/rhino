<template>
    <div class="am-header">
        <div class="am-header-left pl-2">
            <logo></logo>
        </div>
        <div class="am-header-right">
            <profileDropdown></profileDropdown>
        </div>
    </div><!-- am-header -->
</template>

<script>
    export default {
        data: function() {
            return {}
        },
        components: {
            'logo': require('./LogoComponent.vue'),
            'profileDropdown': require('./ProfileDropdownComponent.vue')
        }
    }
</script>
