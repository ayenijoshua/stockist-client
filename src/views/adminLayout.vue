<template>
    <div id="">
        <aside class="main-sidebar fixed offcanvas shadow" data-toggle='offcanvas'>
            <section class="sidebar">
                <div class="w-80px mt-3 mb-3 ml-3">
                    <img src="/assets/img/basic/logo1a.png" alt="">
                </div>
                <div class="relative">
                    <a data-toggle="collapse" href="#userSettingsCollapse" role="button" aria-expanded="false"
                    aria-controls="userSettingsCollapse" class="btn-fab btn-fab-sm absolute fab-right-bottom fab-top btn-primary shadow1 ">
                        <i class="icon icon-arrow-down"></i>
                    </a>
                    <div class="user-panel p-3 light mb-2">
                        <div>
                            <div class="float-left image">
                                <img class="user_avatar" src="/assets/img/dummy/u2.png" alt="User Image">
                            </div>
                            <div class="float-left info">
                                <h6 class="font-weight-light mt-2 mb-1">LilongHeroes</h6>
                                <a href="#"><i class="icon-circle text-primary blink"></i> Online</a>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="collapse multi-collapse" id="userSettingsCollapse">
                            <div class="list-group mt-3 shadow">
                                <a href="#" class="list-group-item list-group-item-action ">
                                    <i class="mr-2 icon icon-sign-out text-blue"></i>
                                    <span class="blue-text" v-b-modal.logOut>Logout</span>
                                </a>
                                <router-link :to="{name:'admin-security'}" class="list-group-item list-group-item-action">
                                    <i class="mr-2 icon-key5 text-blue"></i><span class="blue-text">Change Password</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="sidebar-menu">
                    <li :class="['treeview', activeMenu()=='admin-dashboard' ? 'active' : '']" @click="setMenu('admin-dashboard')">
                        <router-link :to="{name:'admin-dashboard'}" >
                            <i class="icon icon-barometer2 blue-text s-18"></i><span class="blue-text">Dashboard</span> 
                        </router-link>
                    </li>
                    <li :class="['treeview', activeMenu()=='admin-products' ? 'active' : '']" @click="setMenu('admin-products')">
                        <router-link :to="{name:'admin-products'}" >
                            <i class="icon icon-cart-plus blue-text s-18"></i><span class="blue-text">Products</span> 
                        </router-link>
                    </li>
                    <li :class="['treeview', activeMenu()=='admin-transactions' ? 'active' : '']" @click="setMenu('admin-transactions')">
                        <router-link :to="{name:'admin-transactions'}" >
                            <i class="icon icon-account_balance_wallet blue-text s-18"></i> <span class="blue-text">Transaction History</span>
                        </router-link>
                    </li>
                    <li :class="['treeview', activeMenu()=='admin-banks' ? 'active' : '']" @click="setMenu('admin-banks')">
                        <router-link :to="{name:'admin-banks'}" >
                            <i class="icon icon-bank blue-text s-18"></i> <span class="blue-text">Banks</span>
                        </router-link>
                    </li>
                    <li :class="['treeview', activeMenu()=='admin-members' ? 'active' : '']" @click="setMenu('admin-members')">
                        <router-link :to="{name:'admin-members'}" >
                            <i class="icon icon-users blue-text s-18"></i> <span class="blue-text">Members</span>
                        </router-link>
                    </li>
                     <li :class="['treeview', activeMenu()=='admin-profits' ? 'active' : '']" @click="setMenu('admin-profits')">
                        <router-link :to="{name:'admin-profits'}" >
                            <i class="icon icon-money blue-text s-18"></i> <span class="blue-text">Profits</span>
                        </router-link>
                    </li>
                    <li :class="['treeview', activeMenu()=='admin-investors' ? 'active' : '']" @click="setMenu('admin-investors')">
                        <router-link :to="{name:'admin-investors'}" >
                            <i class="icon icon-user blue-text s-18"></i> <span class="blue-text">Investors</span>
                        </router-link>
                    </li>
                    <li :class="['treeview', activeMenu()=='admin-settings' ? 'active' : '']" @click="setMenu('admin-settings')">
                        <router-link :to="{name:'admin-settings'}" >
                            <i class="icon icon-vcard blue-text s-18"></i>
                            <span class="blue-text">Company Settings</span>
                        </router-link>
                    </li>
                    <li :class="['treeview', activeMenu()=='admin-security' ? 'active' : '']" @click="setMenu('admin-security')">
                        <router-link :to="{name:'admin-security'}" >
                            <i class="icon icon-lock3 blue-text s-18"></i>
                            <span class="blue-text">Security</span>
                        </router-link>
                    </li>
                </ul>
            </section>
        </aside>
        <!--Sidebar End-->
        <div class="page has-sidebar-left">
            <div class="pos-f-t">
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bg-dark pt-2 pb-2 pl-4 pr-2">
                        <div class="search-bar">
                            <input class="transparent s-24 text-white b-0 font-weight-lighter w-128 height-50" type="text"
                                placeholder="start typing...">
                        </div>
                        <a href="#" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-expanded="false"
                        aria-label="Toggle navigation" class="paper-nav-toggle paper-nav-white active "><i></i></a>
                    </div>
                </div>
            </div>
            <div class="navbar navbar-expand d-flex navbar-dark justify-content-between bd-navbar blue accent-3 shadow">
                <div class="relative">
                    <div class="d-flex">
                        <div>
                            <a href="#" data-toggle="push-menu" class="paper-nav-toggle pp-nav-toggle">
                                <i></i>
                            </a>
                        </div>
                        <div class="d-none d-md-block">
                            <h5 class="nav-title text-blue">Admin Dashboard</h5>
                        </div>
                    </div>
                </div>
                <!--Top Menu Start -->
                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">
                        <!-- Messages-->
                        <li class="dropdown custom-dropdown messages-menu">
                            <a class="nav-link ml-2" data-toggle="control-sidebar">
                                <i class="icon icon-sign-out" style="color:#03a9f4;" v-b-modal.logOut></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="container-fluid  my-3">
                <router-view/>
            </div>

        </div>

        <div class="control-sidebar-bg shadow white fixed"></div>

         <modal :modalId="'logOut'" :modalSize="'sm'" :modalTitle="'Log out'">
             <div class="alert alert-danger">
                 Are you sure you want to log out?
                 <button class="btn btn-danger" @click="logOut()">Yes</button>
             </div>
         </modal>
    </div>
</template>

<script>
import modal from '@/components/Modal'
import {mapActions} from 'vuex'
export default {
    components:{
        modal
    },

    computed:{
        
    },

    created(){
        const pageArr = location.pathname.split('/')
        let activeMenu = pageArr[1]+'-'+pageArr[2]
       this.setMenu(activeMenu)

       document.querySelector('title').innerHTML = 'Lilonhero'
       //alert(document.getElementsByTagName('title').text)
    },

    methods:{
        ...mapActions('authStore',['logOut']),

        setMenu(menu){
            this.$store.state.activeMenu = menu
        },
        activeMenu(){
            return this.$store.state.activeMenu
        }
    }
    
}
</script>