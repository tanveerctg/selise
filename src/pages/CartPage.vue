<template>
  	<div class="q-pa-md q-gutter-y-md">
  		<ProductTable :cartInfo="cartInfo" @updateCart="updateCart"/>
  		<CartTotalTable :cartInfo="cartInfo"/>
  	</div>
</template>

<script>
import CartTotalTable from '../components/CartTotalTable';
import ProductTable from '../components/ProductTable';
export default {
  name: 'CartPage',
	data(){
		return{
			cartInfo:null
		}	
	},
	components:{
		CartTotalTable,
		ProductTable
	},
	created(){
		this.cartInfo=this.$route.params.cartInfo;

},
updated(){
this.cartInfo=this.$route.params.cartInfo;
},
methods:{
	updateCart(cartInformation){
		this.cartInfo=cartInformation;
	   this.$emit('updateCart',cartInformation)
	}
},
  watch: { 
    $route(to, from) {
      // react to route changes...
    console.log(to,from)     
    }
  },
  updated(){
  	console.log('updated')
  }
}
</script>
