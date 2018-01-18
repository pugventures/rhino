<template>
    <div class="am-signin-wrapper">
        <div class="am-signin-box">
            <div class="row no-gutters">
                <div class="col-lg-5">
                    <div>
                        <h2>RhinoIO v1</h2>
                        <p>Pug Ventures, LLC</p>
                        <p>This is a restricted site.</p>
                    </div>
                </div>
                <div class="col-lg-7">

                    <div class="form-group">
                        <label class="form-control-label">Email <span class="required">*</span></label>
                        <input v-model="email" type="email" name="email" class="form-control" placeholder="Enter your email address" required>
                    </div><!-- form-group -->

                    <div class="form-group">
                        <label class="form-control-label">Password <span class="required">*</span></label>
                        <input v-model="password" type="password" name="password" class="form-control" placeholder="Enter your password" required>
                    </div><!-- form-group -->

                    <button v-on:click="attemptAuthentication()" type="submit" class="btn btn-block">Sign In</button>
                </div><!-- col-7 -->
            </div><!-- row -->
        </div><!-- signin-box -->
    </div><!-- am-signin-wrapper -->
</template>

<script>
    export default {
        data: function() {
            return {
                email: null,
                password: null
            }
        },
        methods: {
            attemptAuthentication: function() {
                console.log('Attempting authentication...');
                var payload = {
                    'email': this.email, 
                    'password': this.password
                }
                this.$http.post('api/authenticate', payload).then(response => {
                    // Set global user
                    this.$root.$data.user = response.body.user;
                    console.log('...authenticated.');
                }, response => {
                    console.log('ERROR');
                    console.log(response.body.error);
                });
            }
        }
    }
</script>
