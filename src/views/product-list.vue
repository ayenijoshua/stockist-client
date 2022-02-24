<template>
    <div class="row">
        <div class="col-md-12">
            <div class="row my-3">
                <!-- bar charts group -->
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-white">
                            <h4 class="blue-text"><strong class="font-weight-bold">Product List</strong></h4>
                        </div>
                        <div class="card-body" style="overflow-x:auto;">
                            <table class="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Product Price</th>
                                        <th scope="col">Product Selection</th>
                                        <th scope="col">Product Quantity</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Lilong Noni Juice</td>
                                        <td>₦13,000</td>
                                        <td> &nbsp; &nbsp; &nbsp; &nbsp;<input type="checkbox" id="Lilong Noni Juice" name="Lilong Noni Juice" value="Lilong Noni Juice"></td>
                                        <td><input class="form-control form-control-lg r-0" type="number" id="number" name="quantity" placeholder="Enter Quantity"></td>
                                    </tr>
                                    <tr>
                                        <td>Lilong Kingman Pressed Candy</td>
                                        <td>₦9,000</td>
                                        <td> &nbsp; &nbsp; &nbsp; &nbsp;<input type="checkbox" id="Lilong Noni Juice" name="Lilong Noni Juice" value="Lilong Noni Juice"></td>
                                        <td><input class="form-control form-control-lg r-0" type="number" id="number" name="quantity" placeholder="Enter Quantity"></td>
                                    </tr>
                                    <tr>
                                        <td>Lilong Hydrogen Rich Water Flask</td>
                                        <td>₦15,400</td>
                                        <td> &nbsp; &nbsp; &nbsp; &nbsp;<input type="checkbox" id="Lilong Noni Juice" name="Lilong Noni Juice" value="Lilong Noni Juice"></td>
                                        <td><input class="form-control form-control-lg r-0" type="number" id="number" name="quantity" placeholder="Enter Quantity"></td>
                                    </tr>
                                    <tr>
                                        <td>Lilong Far Infrared Spectrum Energy</td>
                                        <td>₦25,000</td>
                                        <td> &nbsp; &nbsp; &nbsp; &nbsp;<input type="checkbox" id="Lilong Noni Juice" name="Lilong Noni Juice" value="Lilong Noni Juice"></td>
                                        <td><input class="form-control form-control-lg r-0" type="number" id="number" name="quantity" placeholder="Enter Quantity"></td>
                                    </tr>
                                    <tr>
                                        <td>Lilong Black Soybean Powder</td>
                                        <td>₦14,700</td>
                                        <td> &nbsp; &nbsp; &nbsp; &nbsp;<input type="checkbox" id="Lilong Noni Juice" name="Lilong Noni Juice" value="Lilong Noni Juice"></td>
                                        <td><input class="form-control form-control-lg r-0" type="number" id="number" name="quantity" placeholder="Enter Quantity"></td>
                                    </tr>
                                    <tr>
                                        <td>Lilong Noni Berry Enzyme</td>
                                        <td>₦31,750</td>
                                        <td> &nbsp; &nbsp; &nbsp; &nbsp;<input type="checkbox" id="Lilong Noni Juice" name="Lilong Noni Juice" value="Lilong Noni Juice"></td>
                                        <td><input class="form-control form-control-lg r-0" type="number" id="number" name="quantity" placeholder="Enter Quantity"></td>
                                    </tr>
                                    </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
							
        <div class="col-md-12">
            <div class="row my-3">
                <!-- bar charts group -->
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-white">
                            <h4 class="blue-text"><strong class="font-weight-bold">Order Summary</strong></h4>
                        </div>
                        <div class="card-body" style="overflow-x:auto;">
                            <table class="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Product Price per 1</th>
                                        <th scope="col">Product Quantity</th>
                                        <th scope="col">Total Quantity Price</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Lilong Noni Juice</td>
                                        <td>₦13,000</td>
                                        <td>3</td>
                                        <td>₦39,000</td>
                                    </tr>
                                    <tr>
                                        <td>Lilong Black Soybean Powder</td>
                                        <td>₦14,700</td>
                                        <td>1</td>
                                        <td>₦14,700</td>
                                    </tr>
                                    <tr>
                                        <th colspan="10">Total Price</th>
                                        <td>₦53,700</td>
                                    </tr>
                                    </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button type="button" class="btn btn-primary btn-lg  float-left"><i class="icon icon-credit-card"></i> Submit Order</button>	
        <br>
    </div>
</template>