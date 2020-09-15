<template>
      <q-select
        dense
        filled
        v-model="sorting"
        :options="options"
        label="Filter By Price"
        emit-value
        map-options
        style="width:200px"

      />
</template>

<script>
export default {
  name: 'FilterByPrice',
  props:{

  },
  methods:{

  },
  data(){
    return{
      sorting: null,
      options: [
        {
          label: 'High To Low',
          value: 'descending'
        },
        {
          label: 'Low To High',
          value: 'ascending'
        }
      ]      
    }
  },
  updated(){

    this.$emit('sorting',this.sorting)
  }
}
</script>
