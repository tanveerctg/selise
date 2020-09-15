<template>
     <q-card class="my-card">
      <img :src="productInfo.picture">
      <q-card-section>
        <div class="text-h6 text-center" @click="productPage(productInfo)">
           {{productInfo.title}}
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none text-center text-weight-medium text-red text-body">
        {{productInfo.price}} tk
      </q-card-section>
      <q-separator  />
      <q-card-section>
        <AddToCart v-if="productInfo.stock>0" :productId="productInfo._id" @addToCart="addToCart" quantity="1" />
      </q-card-section>
    </q-card>
</template>

<script>
import AddToCart from './AddToCart';
export default {
  name: 'Product',
  props:{
    productInfo:Object
  },
  components:{
    AddToCart
  },
  methods:{
    addToCart(productInfo){
      console.log(productInfo)
      this.$emit("addToCart",productInfo)
    },
    productPage(info){
      this.$router.push({name:'product', params: { id : info._id,info }});
    }
  }
}
</script>
