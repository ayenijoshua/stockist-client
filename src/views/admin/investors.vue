<template>
    <div class="container-fluid my-3">
        <div class="row">
            <div class="col-md-8">
                <div class="card mb-3">
                    <div class="card-header white">
                        <h6> Investors </h6>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mb-3">
                    <button class="btn btn-primary" v-b-modal.createInvestor>Add</button>
                </div>
            </div>
        </div>

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
                    <div class="card-header white text-blue">Investors</div>
                    <div class="card-body ">
                        <div class="table-responsive">
                            <table id="example2" class="table table-bordered table-hover data-tables" data-options='{ "paging": false "searching":false}'>
                                <thead>
                                    <tr>
                                        <th scope="col">S/N</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Phone No.</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">State</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <template v-if="investors.length == 0">
                                    <tr>
                                        <td colspan="5" class="text-center">There are no investors</td>
                                    </tr>
                                </template>
                                <tr v-else v-for="user,i in investors" :key="i">
                                    <th scope="row">{{++i}}</th>
                                    <td>{{user.name}}</td>
                                    <td>{{user.username}}</td>
                                    <td>{{user.phone}} </td>
                                    <td>{{user.email}}</td>
                                    <td>{{user.state}}</td>
                                    <td>{{ (new Date(user.createdAt)).toDateString() }}</td>
                                    <td>
                                        <div class="dropdown">
                                            <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Edit/Delete
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="position:relative">
                                                <a data-id="2" class="dropdown-item btn" @click="setUser(user)" v-b-modal.resetPassword>Reset Password</a>
                                                <a data-id="2" class="dropdown-item btn" @click="setUser(user)" v-b-modal.deleteUser>Delete</a>
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

        <modal :modalId="'createInvestor'" :modalTitle="'Add Investor'" :modalSize="'md'">
            <create-investor/>
        </modal>

        <modal :modalId="'resetPassword'" :modalTitle="'Reset Password'" :modalSize="'md'">
            <div v-if="!user">...Please wait</div>
            <reset-user-password v-else :user="user"/>
        </modal>

    </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import modal from '@/components/Modal'
import createInvestor from '@/components/admin/createInvestor'
import resetUserPassword from '@/components/admin/resetUserPassword'
export default {
    components:{
        modal,
        createInvestor,
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

        ...mapGetters('registeredUserStore',['investors']),
    },

    created(){
        if(this.investors.length == 0){
            this.getInvestors()
        }
    },

    methods:{
        ...mapActions('registeredUserStore',['getInvestors','search']),

        searchUser(){
            this.search(this.form)
        },

        print(){
            window.print()
        },

        setUser(user){
            this.user = user
        }
    }
}
</script>