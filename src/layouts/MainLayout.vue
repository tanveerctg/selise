<template>
  <q-layout view="lHh Lpr lFf">

    <q-page-container class="flex q-pa-lg">
      <router-view @addToCart="addToCartHandler" @sorting="sortingHandler" @updateCart="updateCart" style="flex:1;" :allProducts="allProducts"/>
      <div style="width:300px;" v-if="cartPage">
        <Cart :cartProducts="cartProducts" @removeFromCart="removeFromCartHandler"/>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>

import Cart from '../components/cart'

export default {
  name: 'MainLayout',
  components: { 
    Cart
  },
  data () {
    return {
      destination:'Main Page',
      allProducts:null,
      cartProducts:[],
      cartPage:true
    }
  },
  methods:{
    addToCartHandler(productInfo){
      const {quantity,productId}=productInfo;
      //decrease stock from allProducts
      let findProduct=this.allProducts.find(product=>product._id==productId);
      const decreaseStock=findProduct.stock-Number(quantity);
      this.allProducts.find(product=>product._id==productId).stock=decreaseStock;

      //update cartProducts
      //check wheater this products exists in the cartProducts Array
      let findProductFromCart=this.cartProducts.find(product=>product._id==productId);

      //if found then increase that products stock by 1 if not then push that product to the cartProducts 
      if(findProductFromCart){
        this.cartProducts.find(product=>product._id==productId).stock+=Number(quantity);
      }else{
        this.cartProducts.push({...findProduct,stock:Number(quantity)})
      }
      console.log('cartProducts',this.cartProducts)
    },
    removeFromCartHandler(productInfo){
      //add same quantity to the respective product's stock which situates in the allProducts
      this.allProducts.find(product=>product._id==productInfo._id).stock+=productInfo.stock;

      //remove the product from cartProducts
      this.cartProducts=this.cartProducts.filter(product=>product._id!==productInfo._id)
    },
    sortingHandler(sortingValue){
      console.log(sortingValue)
      if(sortingValue=='descending'){
         this.allProducts=this.allProducts.sort(function(a, b){return b.price-a.price});
      }else{
        this.allProducts=this.allProducts.sort(function(a, b){return a.price-b.price});
      }
    },
    updateCart(cartInformation){
      this.cartProducts=cartInformation;
    }
  },
  mounted(){
    console.log('mounted')
    fetch('https://gist.githubusercontent.com/naieem/c138ff1f12847b2a1b8ad85866426d3d/raw/037825eee126d589ab3e1fff6c3d0119f33f3b5b/Products')
    .then(res=>{
      return res.json()
    })
    .then(res=>{
      console.log(res)
      this.allProducts=res;
    })
  },
  watch: { 
    $route(to, from) {
      // react to route changes...
      if(to.name=="cart") {
          this.cartPage = false
        }else {
          this.cartPage =true
        } 
    console.log(to,from)     
    }
  }
}
</script>
