<template>
  <div>
  
    <q-card class="my-card" style="max-width:400px;width:100%;" v-if="cartInfo.length>0">
      <q-card-section class="flex justify-between">
        <div class="text-body2 text-weight-medium">Subtotal</div>
        <div class="text-body2">{{cartInfo.reduce((sum, product) => {
          return sum + (product.price * product.stock)
        }, 0)}} tk</div>
      </q-card-section>
      <q-separator />
      <q-card-section class="flex justify-between">
        <div v-for="(cartProduct,index) in cartInfo" :key="index" class="flex items-center q-gutter-x-sm justify-between" style="width:100%;">
          <div class="flex" style="flex:1;">
            <div class="text-primary">{{cartProduct.title}}</div>
            <div class="q-ml-xs">( {{cartProduct.stock}} * {{cartProduct.price}}tk )</div>
          </div>
          <div style="width:30px;">
            <img :src="cartProduct.picture" style="width:100%;"/>
          </div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section class="flex justify-between">
        <div class="text-body2 text-weight-medium">Total</div>
        <div class="text-body2">{{cartInfo.reduce((sum, product) => {
          return sum + (product.price * product.stock)
        }, 0)}} tk</div>
      </q-card-section>
    </q-card>
    <q-card class="my-card" style="max-width:400px;width:100%;" v-else>
      <q-card-section class="flex justify-between">
        Cart Empty
      </q-card-section>
    </q-card>
  </div>
</template>

<script>

export default {
  name: 'CartTotalTable',
  props:{
     cartInfo:Array
  }
}
</script>
