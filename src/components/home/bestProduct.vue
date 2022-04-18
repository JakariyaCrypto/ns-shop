<template>
  <div>
      <v-row>
          <v-subheader class="font-weight-medium"><h2>Top Sell Product</h2></v-subheader>
      </v-row>
      <v-row align="center">
          <v-col cols="4" sm="4" md="3" lg="3" xl="3" v-for="(product, i) in products" :key="i">
              <v-hover v-slot="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 12 : 1" :class="{ 'on-hover' : hover }" style="height:300px">
                      <v-img :src="product.src" style="height:150px" />
                      <v-card-text style="position:relative">
                        <v-card-subtitle class="text-center">{{product.name}}</v-card-subtitle>
                        <div class="text-center">
                            <strong>{{product.price}} tk <del class="red--text">{{product.mrp}} tk</del></strong>
                        </div>
                        <v-btn absolute top right small fab color="#704232" class="white--text">
                            <v-icon>
                                fas fa-shopping-cart
                            </v-icon>
                        </v-btn>
                    </v-card-text>
                    <div class="text-center">
                        <v-btn small color="#704232" class="white--text">
                            Detail
                        </v-btn>
                    </div>
                  </v-card>
                  
              </v-hover>
          </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
    data: () => {
        return {
            products: [
                {name: 'new poly product',price: '120', mrp: '100', src: require('../../assets/img/product-1.jpg')},
                {name: 'new poly product',price: '120', mrp: '100', src: require('../../assets/img/product-2.jpg')},
                {name: 'new poly product',price: '120', mrp: '100', src: require('../../assets/img/product-15.png')},
                {name: 'new poly product',price: '120', mrp: '100', src: require('../../assets/img/product-3.jpg')},
                {name: 'new poly product',price: '120', mrp: '100', src: require('../../assets/img/product-6.jpg')},
                {name: 'new poly product',price: '120', mrp: '100', src: require('../../assets/img/product-4.jpg')},
                {name: 'new poly product',price: '120', mrp: '100', src: require('../../assets/img/product-14.jpg')},
                {name: 'new poly product',price: '120', mrp: '100', src: require('../../assets/img/product-5.jpg')},
                {name: 'new poly product',price: '120', mrp: '100', src: require('../../assets/img/product-16.png')},
                {name: 'new poly product',price: '120', mrp: '100', src: require('../../assets/img/product-7.jpg')},
            ]
        }
    }
}
</script>

<style>

</style>