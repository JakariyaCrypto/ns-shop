<template>
  <div>
      <v-col md="12" sm="12" lg="12" class="header-menu">
        <headerComponent/>
    </v-col>
      <v-col cols="12">
          <singleProduct/>
      </v-col>
  </div>
</template>

<script>
import singleProduct from '@/components/singleProduct/singleComponent';
import headerComponent from '@/components/home/headerComponent';
export default {
    components: {
        singleProduct,headerComponent
    }
}
</script>

<style>

</style>