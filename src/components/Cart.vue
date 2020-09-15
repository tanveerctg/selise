<template>
  <div>
    <div v-if="cartProducts.length>0" class="q-gutter-y-md">
      <div class="text-h6 text-weight-medium">Cart</div>
      <div v-for="(cartProduct,index) in cartProducts" :key="index" class="flex items-center q-gutter-x-sm">
        <div class="flex:auto" style="cursor:pointer;">
          <q-icon name="close" class="text-red" @click="removeFromCart(cartProduct)"/>
        </div>
        <div style="width:200px;">
          <div class="text-primary">{{cartProduct.title}}</div>
          <div>{{cartProduct.stock}} * {{cartProduct.price}}tk</div>
        </div>
        <div style="width:30px;">
          <img :src="cartProduct.picture" style="width:100%;"/>
        </div>
      </div>
      <q-separator />

      <div>
        <span class="text-body2 text-weight-bold">Subtotal :</span> {{cartProducts.reduce((sum, product) => {
          return sum + (product.price * product.stock)
        }, 0)}} tk
      </div>
       <q-btn color="primary" label="View Cart" size="sm" @click="navigateCartPage"/>
    </div>
    <div v-else class="text-center">
      Cart Empty
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props:{
    cartProducts:Array
  },
  methods:{
    removeFromCart(productInfo){
      this.$emit('removeFromCart',productInfo)
    },
    navigateCartPage(){
      this.$router.push({name:'cart', params: { cartInfo : this.cartProducts }});
    },
    updated(){
      console.log('updated')
    }
  }
}
</script>
