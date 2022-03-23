<template>
    <form method="post" id="searchForm" action="/admin/searchUser" @submit.prevent="submit()">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-3 mr-0">
                        <div class="dropdown">
                            <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Filter Purchase history
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="position:relative">
                                <a class="dropdown-item" href="#">All Orders</a>
                                <a class="dropdown-item">Deliverd Orders</a>
                                <a class="dropdown-item">Pending Orders</a>
                                <a class="dropdown-item">Declined Orders </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <input type="date" id="start" class="form-control " style="" name="trip-start" required placeholder="To Date ">
                    </div>

                    <div class="col-md-3">

                        <input type="date" id="start" class="form-control " style="" name="trip-start" required placeholder="To Date ">
                    </div>
                    <div class="col-md-3">
                        <button type="submit" id="submit" class="btn btn-primary">View Order History&nbsp;&nbsp;<i class="icon-search"></i></button>
                    </div>
                </div>
            </div>      
        </div><br>

        
    </form>
</template>

<script>
export default {
    
}
</script>