<template>
    <div id="usersPanel">
        <div class="row mb-2">
            <button type="button" class="btn btn-block btn-orange col-sm-3">Create New User</button>
        </div>
        
        <div class="row">
            <table class="table table-bordered table-hover">
                <thead class="bg-info">
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email Address</th>
                </thead>
                
                <tbody v-for="user in this.users">
                    <td>{{ user.first_name }}</td>
                    <td>{{ user.last_name }}</td>
                    <td>{{ user.email }}</td>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                users: null
            }
        },
        mounted() {
            this.$http.get('api/users/all').then(response => {
                this.users = response.body.users;
            }, response => {
                console.log('ERROR');
                console.log(response.body);
            });
        }
    }
</script>
