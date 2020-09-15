<template>

    <div class="row q-gutter-y-md">
      <table style="width:100%">
        <tr>
          <th style="padding:0;"></th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
        <tr v-for="(info,index) in cartInformation" :key="index">
          <td style="padding:0;"><q-icon name="close" class="text-red" @click="removeProduct(info._id)" style="cursor:pointer;"/></td>
          <td>{{info.title}}</td>
          <td>{{info.price}} tk</td>
          <td><input :value='info.stock' style="width:30px;text-align:center;" @change="quantityChangeHandler($event,info._id)" /></td>
          <td>{{info.price*info.stock}} tk</td>
        </tr>      
      </table>
       <q-btn color="primary" label="Update Cart" size="sm" @click="updateCart"/>

    </div>

</template>

<script>

export default {
  name: ' ProductTable',
  props:{
    cartInfo:Array
  },
  data(){
    return{
      cartInformation:null
    } 
  },
  methods:{
    quantityChangeHandler(e,id){
      const findProduct=this.cartInformation.find(product=>product._id==id);
      findProduct.stock=e.target.value;
    },
    removeProduct(id){

      this.cartInformation=this.cartInformation.filter(product=>product._id!==id)     
    },
    updateCart(){
      this.$emit('updateCart',this.cartInformation)
    }
  },
  created(){
    this.cartInformation=this.cartInfo;
  }
}
</script>

<style >
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  th, td {
    padding: 5px;
    text-align: center;
  }
</style>
