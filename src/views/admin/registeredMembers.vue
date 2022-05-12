<template>
    <div class="container-fluid my-3">
        <form id="searchForm">
            <div class="card">
                <div class="card-body">
                    <div class="row">

                        <div class="col-md-4">
                            <input type="date" id="start" class="form-control " style="" v-model="form.date_from" required placeholder="Date from ">
                        </div>

                        <div class="col-md-4">

                            <input type="date" id="start" class="form-control " style="" v-model="form.date_to" required placeholder="Date to">
                        </div><br>
                        <div class="col-md-4">
                            <button type="submit" id="submit" class="btn btn-primary">View Order History&nbsp;&nbsp;<i class="icon-search"></i></button>
                        </div>
                    </div>
                </div>      
            </div><br>

            <div class="row">
                <div class="col-md-5">
                </div>
                <div class="col-md-7">
                    <button type="submit" id="submit" class="btn btn-primary">Print Transaction&nbsp;&nbsp;<i class="icon-print"></i></button>
                </div>
            </div>
        </form><br>

        <div class="row">
            <div class="col-md-12">
                <div class="card mb-3">
                    <div class="card-header white text-blue">Registered Members</div>
                    <div class="card-body ">
                        <div class="table-responsive">
                            <table id="example2" class="table table-bordered table-hover data-tables" data-options='{ "paging": false; "searching":false}'>
                                <thead>
                                <tr>
                                    <th scope="col">S/N</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Phone No.</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Referral</th>
                                    <th scope="col">State</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Time</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-if="users.length == 0">
                                    <tr>
                                        <td colspan="6" class="text-center">There are no users</td>
                                    </tr>
                                </template>
                                <tr v-else v-for="user,i in users" :key="i">
                                    <th scope="row">{{i++}}</th>
                                    <td>{{user.name}}</td>
                                    <td>{{user.username}}</td>
                                    <td>{{user.phone}} </td>
                                    <td>{{user.email}}</td>
                                    <td>{{user.created_at}}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>				
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
    data(){
        return{
            form:{
                date_from:null,
                date_to:null,
            },
        }
    },

    computed:{
        ...mapState({
            loading:state=>state.loading,
            submitting:state=>state.submitting
        }),

        ...mapGetters('registeredUserStore',['users']),
    },

    created(){
        if(this.users.length == 0){
            this.getUsers()
        }
    },

    methods:{
        ...mapActions('registeredUserStore',['getUsers']),
    }
}
</script>