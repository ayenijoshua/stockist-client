<template>
    <div>
        <div class="has-sidebar-left">
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
            <div class="sticky">
                <div class="navbar navbar-expand navbar-dark d-flex justify-content-between bd-navbar blue accent-3">
                    <div class="relative">
                    </div>
                    <!--Top Menu Start -->
                    <div class="navbar-custom-menu">
                        <ul class="nav navbar-nav">
                            <li>
                                
                                <a href="https://lilonghero.com" class="btn btn-sm btn-primary m-2">
                                    Back
                                </a>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="page has-sidebar-left">
            <div class="container">
                <div class="invoice white shadow">
                    <div class="row m-5">
                        <div class="col-12 text-center">
                            <br><br>
                            <p> <img class="w-500px mb-4" src="assets/img/welcome.png" style="-webkit-filter: drop-shadow(3px 3px 3px #222); filter: drop-shadow(3px 3px 3px #222); max-width: 100%;" alt="">
                                <br>
                                <strong class="font-weight-bold">
                                    Page not found
                                </strong>
                            </p>
                        </div>
                    </div>
                    <router-link :to="{name:'login'}"><span class="btn btn-primary">Back to Login </span></router-link>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    created(){
        document.querySelector('title').innerHTML = 'Lilonhero | Products'
    }
}
</script>