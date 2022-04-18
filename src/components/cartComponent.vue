<template>
  <div>
      <v-list>
          <v-list-item>
              <v-list-item-avatar>
                  <img src="../assets/img/shoping-bag-icon.png" />
              </v-list-item-avatar>
              <v-list-item-content>
                  <v-list-item-title> 5 ITEMS</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                  <div class="cart-close" @click="fixCartRemove" id="remove-cart-icon">
                      <span><i class="fas fa-close"></i></span>
                  </div>
              </v-list-item-action>
          </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
         <div class="cart-product">
              <div class="order-item d-flex py-3" 
            v-for="(item, i) in items"
            :key="i"
          >
              <div class="cart-quantity" style="width:30px">
                  <span><i class="fa fa-caret-up" aria-hidden="true"></i></span>
                  <span>{{item.qty}}</span>
                  <span><i class="fa fa-caret-down" aria-hidden="true"></i></span>
              </div>
              <div class="cart-img" style="width:70px">
              <v-img src="../assets/img/cat-2.jpg" />
            </div>
            <div class="pro-name" style="width:250px">
                <span>{{item.name}}</span>
            </div>
            <div class="item-tk" style="width:100px">
                <span style="margin-right:8px;">৳ {{item.price}}</span>
                <span style="cursor:pointer"> <i class="fas fa-close "></i></span>
            </div>
          </div>
         </div>          
      </v-list>
      <v-list align="center">
          <v-btn color="#704232" class="white--text">
              <v-icon class="mr-2">fas fa-shopping-bag</v-icon>
              Checkout
          </v-btn>
      </v-list>
  </div>
</template>

<script>
export default {
    data: () => {
        return {
            items: [
                {
                    qty: 2, name:'Nestle Milo Activ-Go Powde', price:140, 
                    icon:'fas fa-close', src: require('../assets/img/cat-2.jpg'),
                },
                {
                    qty: 2, name:'Nestle Milo Activ-Go Powde', price:140, 
                    icon:'fas fa-close', src: require('../assets/img/cat-2.jpg'),
                },
                {
                    qty: 2, name:'Nestle Milo Activ-Go Powde', price:140, 
                    icon:'fas fa-close', src: require('../assets/img/cat-2.jpg'),
                },
                {
                    qty: 2, name:'Nestle Milo Activ-Go Powde', price:140, 
                    icon:'fas fa-close', src: require('../assets/img/cat-2.jpg'),
                },
                {
                    qty: 2, name:'Nestle Milo Activ-Go Powde', price:140, 
                    icon:'fas fa-close', src: require('../assets/img/cat-2.jpg'),
                },
                {
                    qty: 2, name:'Nestle Milo Activ-Go Powde', price:140, 
                    icon:'fas fa-close', src: require('../assets/img/cat-2.jpg'),
                },
                
                
            ]
        }
    },
    methods:{
        fixCartRemove() {
        const removeIcon = document.getElementById('remove-cart-icon'),
        cartContent = document.getElementById('cart-product-show')

        if(removeIcon){
            removeIcon.addEventListener('click', () => {
            cartContent.classList.remove('active-cart-product')
            })
            }
        }
    }

}
</script>

<style>
.fix-cart-content {
	position: fixed;
	top: 65px;
	right: 0;
	z-index: 9999;
	width: 350px;
	background: white;
	height: 650px;
    visibility: hidden;
	right: -340px;
}
.active-cart-product{
    visibility: visible;
    right: 0px;
    transition: .3s;
}
.cart-close {
	background: red;
	width: 30px;
	height: 30px;
	line-height: 30px;
	text-align: center;
	border-radius: 100px;
	box-shadow: 0px 0px 4px 2px rgba(164, 21, 21, 0.2);
	color: white;
	cursor: pointer;
}
.cart-quantity span {
	display: block;
	text-align: center;
	cursor: pointer;
}

.order-item {
	border-bottom: 1px solid #ddd;
	align-items: center;
	color: #8e8e8e;
}

.pro-name {
	padding: 4px 9px;
}

.cart-img {
	height: 54px;
	border-radius: .5rem;
}

.pro-name span {
	font-size: 13px;
	text-align: center;
	text-align: justify;
}

.cart-product {
	overflow: auto;
	height: 400px;
}
</style>