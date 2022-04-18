<template>
 <v-row>
      <v-col sm="12" md="12" lg="12">

          <v-row align="center">
              <v-col cols="4" xs="4" sm="3" md="2" lg="2" xl="2" v-for="(cat, i) in cats" :key="i">
                <v-item v-slot="{active,toggle}" class="text-center">
                    <v-card :color="active ? '#F6EFEF' : 'white'" :class="active ? 'border-add' : 'border-out'"
                        @click="toggle" flat dark
                    >
                        <v-img :src="cat.src" style="height:100px" />
                        <v-list-item-subtitle class="orange--text" @click="goCategoryProduct">{{cat.name}}</v-list-item-subtitle>
                    </v-card>
                </v-item>
            </v-col>

          </v-row>
      </v-col>
  </v-row>
</template>

<script>
export default {
    data: () => {
        return {
            cats: [
                {name: 'food', src: require('../../assets/img/product-17.png')},
                {name: 'food', src: require('../../assets/img/product-16.png')},
                {name: 'food', src: require('../../assets/img/cat-3.jpg')},
                {name: 'food', src: require('../../assets/img/product-18.png')},
                {name: 'food', src: require('../../assets/img/product-15.png')},
                {name: 'food', src: require('../../assets/img/cat-5.jpg')},
                {name: 'food', src: require('../../assets/img/product-7.jpg')},
                {name: 'food', src: require('../../assets/img/dish-1.png')},
                {name: 'food', src: require('../../assets/img/product-5.jpg')},
                {name: 'food', src: require('../../assets/img/home-img-1.png')},
                {name: 'food', src: require('../../assets/img/product-6.jpg')},
                {name: 'food', src: require('../../assets/img/product-13.jpg')},
                {name: 'food', src: require('../../assets/img/product-15.png')},
                {name: 'food', src: require('../../assets/img/product-5.jpg')},
                {name: 'food', src: require('../../assets/img/product-17.png')},
                {name: 'food', src: require('../../assets/img/product-7.jpg')},
                {name: 'food', src: require('../../assets/img/product-6.jpg')},





            ],
        }
    },
    methods:{
        goCategoryProduct(){
            this.$router.push({name: 'CategoryProduct'});
        }
    }
}
</script>

