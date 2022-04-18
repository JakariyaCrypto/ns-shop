<template>
  <div>
      <!-- header component -->
      <v-col md="12" sm="12" lg="12" class="header-menu">
          <headerComponent/>
      </v-col>
      <!-- header component -->

      <!-- category component -->
       <v-col cols="12" md="12" sm="12" lg="12" xs="12" class="my-10">
          <categgoryComponent/>
      </v-col>
      <!-- category component -->

    <!-- product component -->
        <v-col cols="12" md="12" sm="12" lg="12" xs="12" class="my-10">
          <productComponent/>
        </v-col>
    <!-- product <command> -->
      <!-- bannder component -->
      <v-col cols="12" md="12" sm="12" lg="12" xs="12" class="my-10">
      <bannerComponent/>
      </v-col>
      <!-- bannder component -->
      <!-- best product component -->
      <v-col cols="12" md="12" sm="12" lg="12" xs="12" class="my-10">
      <bestProduct/>
      </v-col>
      <!-- best product component -->

  </div>
</template>

<script>
import headerComponent from '@/components/home/headerComponent';
import categgoryComponent from '@/components/home/categgoryComponent';
import productComponent from '@/components/home/productComponent';
import bannerComponent from '@/components/home/bannerComponent';
import bestProduct from '@/components/home/bestProduct';
export default {
    components: {
      headerComponent,categgoryComponent,productComponent,bannerComponent,bestProduct
    }
}
</script>

<style>
.header-menu {
    position: sticky;
    top: 0;
    z-index: 9999;
  }
</style>