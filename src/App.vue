<template>
<v-app :style="{background: $vuetify.theme.themes.dark.background}">
<v-row>
    <v-col  md="2" lg="2" xl="2" sm="2" class="hidden-sm-only hidden-xs-only" 
    style="padding-right:0px;position:static;background:white"
    > 
    
      <sidebarComponent/>
      
     </v-col>
      <v-col cols="12" xs="12" sm="12" md="10" lg="10" style="padding:0px;">
      <v-main>
        <router-view/>
      </v-main>
      <v-footer align="center" padless>
        <div class="text-center">
          <span>all reserved @demo here</span>
        </div>
      </v-footer>
    </v-col>
  <!-- fix cart icon  -->
   <div class="cart-icon"
    style="position:fixed;right:10px;top:40%;"
    @click="fixCart"
    id="click-cart-icon"
   >
    <fixCartIcon/>
   </div>
  <!-- fix cart icon  -->

  <!-- fix-cart content -->
  <div class="fix-cart-content" id="cart-product-show">
    <fixCartContent/>
  </div>
  <!-- fix-cart content -->

</v-row>
    </v-app> 
  
</template>

<script>
import sidebarComponent from '@/components/sidebarComponent';
import fixCartIcon from '@/components/cartFixIconCom';
import fixCartContent from '@/components/cartComponent';
export default {
  name: 'App',
  components: {sidebarComponent,fixCartIcon,fixCartContent},
  data: () => ({
    //
  }),
  methods:{
    fixCart() {
      const cartIcon = document.getElementById('click-cart-icon'),
      cartContent = document.getElementById('cart-product-show')

      if(cartIcon){
        cartIcon.addEventListener('click', () => {
          cartContent.classList.add('active-cart-product')
        })
      }
    }
  }
};
</script>
<style >
.cart-icon {
	text-align: center;
	border-radius: .5rem;
	z-index: 9999;
	background: #704232;
	color: white;
  padding-top: 5px;
  cursor: pointer;
}
</style>