<template>
    <div class="container-fluid my-3">
        <form id="searchForm" @submit.prevent="searchUser()">
            <div class="card">
                <div class="card-body">
                    <div class="row">

                        <div class="col-md-3">
                            <input type="date" id="start" class="form-control " style="" v-model="form.date_from" placeholder="Date from ">
                        </div>

                        <div class="col-md-3">
                            <input type="date" id="start" class="form-control " style="" v-model="form.date_to" placeholder="Date to">
                        </div><br>
                        <div class="col-md-3">
                            <input type="text" id="start" class="form-control " style="" v-model="form.username" placeholder="username">
                        </div><br>
                        <div class="col-md-3">
                            <button type="submit" id="submit" class="btn btn-primary">View Members&nbsp;&nbsp;<i class="icon-search"></i></button>
                        </div>
                    </div>
                </div>      
            </div><br>

            <div class="row">
                <div class="col-md-5">
                </div>
                <div class="col-md-7">
                    <button type="submit" id="submit" @click="print()" class="btn btn-primary">Print&nbsp;&nbsp;<i class="icon-print"></i></button>
                </div>
            </div>
        </form><br>

        <div class="row">
            <div class="col-md-12">
                <div class="card mb-3">
                    <div class="card-header white text-blue">Registered Members</div>
                    <div class="card-body ">
                        <div class="table-responsive">
                            <table id="example2" class="table table-bordered table-hover data-tables" data-options='{ "paging": "false", "searching":"false"}'>
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
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <template v-if="users.length == 0">
                                    <tr>
                                        <td colspan="6" class="text-center">There are no users</td>
                                    </tr>
                                </template>
                                <tr v-else v-for="user,i in users" :key="i">
                                    <th scope="row">{{++i}}</th>
                                    <td>{{user.name}}</td>
                                    <td>{{user.username}}</td>
                                    <td>{{user.phone}} </td>
                                    <td>{{user.email}}</td>
                                    <td>{{user.referrer}}</td>
                                    <td>{{user.state}}</td>
                                    <td>{{ (new Date(user.createdAt)).toDateString() }}</td>
                                    <td>
                                        <div class="dropdown">
                                            <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Action
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="position:relative">
                                                <a data-id="2" class="dropdown-item btn" @click="setUser(user)" v-b-modal.resetPassword>Reset Password</a>
                                                <a class="dropdown-item btn" @click="setUser(user)" v-b-modal.removeUser>Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>				
        </div>

        <modal :modalId="'resetPassword'" :modalTitle="'Reset Password'" :modalSize="'md'">
            <div v-if="!user">...Please wait</div>
            <reset-user-password v-else :user="user"/>
        </modal>

        <modal :modalId="'removeUser'" :modalTitle="'Delete User'" :modalSize="'md'">
            <div v-if="!user">...Please wait</div>
            <div v-else>
                <span>Are you sure you want delete this user?</span>
                <button @click="deleteUser()" class="btn btn-danger">Delete</button>
            </div>
        </modal>

    </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import modal from '@/components/Modal'
import resetUserPassword from '@/components/admin/resetUserPassword'
export default {
    components:{
        modal,
        resetUserPassword
    },

    data(){
        return{
            form:{
                date_from:null,
                date_to:null,
                username:null
            },
            user:null
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
        ...mapActions('registeredUserStore',['getUsers','search','deleteMember']),

        searchUser(){
            this.search(this.form)
        },

        print(){
            window.print()
        },

        setUser(user){
            this.user = user
        },

        deleteUser(){
            this.deleteMember(this.user._id)
        }
    }
}
</script>