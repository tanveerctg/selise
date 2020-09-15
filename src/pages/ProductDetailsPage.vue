<template>
  	<div class="q-pa-md q-gutter-y-md">

  		<div class="row">
  		
  			<div class="col-sm-12 col-md-6 q-pr-md">
  				<img :src="productInfo.picture" style="width:100%;">
  			</div>
  			<div class="col-sm-12 col-md-6 q-gutter-y-sm">
  				<div class="text-h6 text-weight-bold">{{productInfo.title}}</div>
  				<div class="text-body2 text-red text-weight-medium">{{productInfo.price}} tk</div>
  				<div class="text-body">{{productInfo.description}}</div>
  				<div class="flex q-gutter-x-sm">
				    <q-input
				      v-model.number="quantity"
				      type="number"
				      filled
				      style="max-width: 200px"
				     :rules="[ 
				              val => val > 0 && val <= $route.params.info.stock || `Only ${$route.params.info.stock} products available`
				      ]"
				    />					
  					<AddToCart :productId="productInfo._id" :quantity="quantity" @addToCart="addToCart" :disabled="isDisabled"/>
  				</div>
  			</div>
  		</div>
  		<div>
  			<div class="text-h6 text-weight-bold">Description</div>
  			<div class="text-body">{{productInfo.description}}</div>
  		</div>
  	</div>
</template>

<script>
import AddToCart from '../components/AddToCart';
export default {
  name: 'ProductDetailsPage',
	data(){
		return{
			productInfo:null,
			quantity: 1
		}	
	},
	components:{
		AddToCart
	},
	computed:{
		isDisabled(){
			if(this.quantity > this.$route.params.info.stock || !this.quantity){
				return true;
			}else{
				return false;
			}
		}
	},
	created(){
	    fetch('https://gist.githubusercontent.com/naieem/c138ff1f12847b2a1b8ad85866426d3d/raw/037825eee126d589ab3e1fff6c3d0119f33f3b5b/Products')
	    .then(res=>{
	      return res.json()
	    })
	    .then(res=>{
	      const findProduct=res.find(product=>product._id==this.$route.params.id)
	      this.productInfo=findProduct;
	    })

},
methods:{
	 addToCart(productId){
      this.quantity='';
      this.$emit("addToCart",productId)
    }
}
}
</script>
