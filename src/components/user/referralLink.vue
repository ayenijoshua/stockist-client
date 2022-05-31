<template>
    <div class="card">
        <div class="card-header white">
            <div class="row justify-content-end">
                <div class="col">
                    <ul class="nav nav-tabs card-header-tabs nav-material">
                        <li class="nav-item">
                            <a class="nav-link text-blue" id="w1-tab1" data-toggle="tab"><i
                                    class="icon icon-person_add blue-text s-18"></i>Refer a
                                Friend
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="card-body no-p">
            <div class="tab-content">
                <div class="tab-pane animated show active" id="v-pills-w1-tab1"
                    role="tabpanel" aria-labelledby="v-pills-w1-tab1">
                    <div class="row p-3">
                        <div class="col-md-12">
                            <div class="form-row text-center">
                                <div class="col-md-12 mb-3">
                                    <h3 class="font-weight-bold s-14 text-center">Click to copy
                                        your referral link</h3>
                                </div>
                                <div class="col-md-12 mb-3">
                                    <input type="text" class="form-control"
                                        :value="'https://app.lilonghero.com/register/'+user.username"
                                        id="referrallink" readonly>
                                </div>

                                <button class="btn btn-primary" onclick="myFunction()"
                                    id="button" type=" submit">Copy Referral Link
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        user:{
            type:Object,
            required:true
        }
    }
}
</script>