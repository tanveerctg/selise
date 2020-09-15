<template>
      <span  @click="addToCart(productId)" class="flex items-center q-gutter-x-sm">
        <q-icon name="shopping_basket"/> <span class="text-caption">Add To Cart</span>
      </span> 
</template>

<script>
export default {
  name: 'AddToCart',
  props:['productId','quantity'],
  methods:{
    addToCart(productId){

      console.log({quantity:this.quantity,productId:this.productId})
      this.$emit("addToCart",{quantity:this.quantity,productId:this.productId})
    }
  }
}
</script>
