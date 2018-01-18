<template>
    <div class="am-header-right">

        <div class="dropdown dropdown-profile">
            <a href="" class="nav-link nav-link-profile" data-toggle="dropdown">
                <img src="" class="wd-32 rounded-circle" alt="">
                <span class="logged-name"><span class="hidden-xs-down">Jane Doe</span> <i class="fa fa-angle-down mg-l-3"></i></span>
            </a>
            <div class="dropdown-menu wd-200">
                <ul class="list-unstyled user-profile-nav">
                    <li><a href=""><i class="icon ion-ios-person-outline"></i> Edit Profile</a></li>
                    <li><a href=""><i class="icon ion-power"></i> Sign Out</a></li>
                </ul>
            </div><!-- dropdown-menu -->
        </div><!-- dropdown -->
    </div><!-- am-header-right -->
</template>

<script>
    export default {
        data: function() {
            return {}
        }
    }
</script>
