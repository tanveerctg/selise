<template>
  <div>
    <div class="q-mx-md q-mb-lg flex justify-between">
      <span class="text-h5 text-weight-medium">Shop</span>
      <FilterByPrice @sorting="sorting"/>

    </div>
    <div class="row q-gutter-y-lg">
      <div v-for="(product,index) in allProducts" :key="index" class="col-xs-12 col-sm-6 col-md-4 q-px-md">
       <Product :productInfo="product" @addToCart="addToCart"/>
      </div>    
    </div>
  </div>

</template>

<script>
import Product from '../components/Product'
import FilterByPrice from '../components/FilterByPrice'

export default {
  name: 'PageIndex',
  props:{
    allProducts:Array
  },
  components:{
    Product,
    FilterByPrice
  },
  methods:{
  	addToCart(id){
  	 this.$emit('addToCart',id)
  	},
    sorting(sortingValue){
      this.$emit('sorting',sortingValue)
    }
  }
}
</script>
