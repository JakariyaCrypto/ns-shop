<template>
  <div class="single-bg mt-2">
      <!-- single product detail -->
      <v-row class="mt-2 pb-2" color="white">
        <v-col md="5">
            <v-card flat elevation="0">
                <v-img src="../../assets/img/cat-1.jpg"></v-img>
            </v-card>
        </v-col>
        <v-col md="7">
            <v-card elevation="0">
                <v-card-title class="text-capitalize">this is produc title</v-card-title>
                <v-card-subtitle> <strong style="font-size:20px">20 tk</strong> <del style="color:red">30 tk</del></v-card-subtitle>
                <v-card-text>
                    <div>
                        <span>Stock:</span> Avaialbe <br/>
                        <span>Warranty:</span> No
                    </div>
                    <div>
                        <span>brand:</span> Pesico <br/>
                        <span>Category:</span> Food Fanda
                    </div>
                    <div>
                        <v-btn class="primary mt-3">
                            Order Now
                        </v-btn>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>  <!-- single product detail -->
    <v-divider></v-divider>
    <v-row class="mt-5">
        <v-col cols="12">
            <v-card elevation="0">
                <v-img src="../../assets/img/cat-1.jpg" style="width:100px"></v-img>
                <div>
                    <p style="color:#535353;margin-top:10px">
                        lorem ipsum is going here now.lorem ipsum is going here now.
                        lorem ipsum is going here now.lorem ipsum is going here now.
                        lorem ipsum is going here now.lorem ipsum is going here now.
                        lorem ipsum is going here now.lorem ipsum is going here now.
                    </p>
                </div>
            </v-card>
        </v-col>
    </v-row>
    <!-- related product  -->
    <v-col cols="12">
        <singleProduct/>
    </v-col>
  </div>
</template>

<script>
import singleProduct from '@/components/singleProduct/relatedProduct';
export default {
    components: {
        singleProduct
    }
}
</script>

<style>
.single-bg {
	background: white;
	padding: 10px 20px;
}
</style>