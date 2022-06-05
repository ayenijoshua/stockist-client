<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card mb-3">
                <div class="card-header white text-blue"><i
                        class="icon icon-people blue-text s-18"></i>&nbsp;&nbsp;Registered Members via
                    your Referral Link</div>
                <div class="card-body ">
                    <div class="table-responsive">
                        <table id="example2" class="table table-bordered table-hover data-tables"
                            data-options='{ "paging": false; "searching":false;}'>
                            <thead>
                                <tr>
                                    <th scope="col">S/N</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Phone No.</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-if="downlines.length == 0">
                                    <tr>
                                        <td colspan="6" class="text-center">There are no downlines</td>
                                    </tr>
                                </template>
                                <tr v-else v-for="downline,i in downlines" :key="i">
                                    <th scope="row">{{++i}}</th>
                                    <td>{{downline.name}}</td>
                                    <td>{{downline.username}}</td>
                                    <td>{{downline.phone}} </td>
                                    <td>{{downline.email}}</td>
                                    <td>{{(new Date(downline.createdAt)).toDateString()}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        downlines:{
            type:Array,
            required:true
        }
    },
    
}
</script>