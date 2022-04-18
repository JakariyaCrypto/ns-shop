<template>
<div>
    <v-col md="12" sm="12" lg="12" class="header-menu">
        <headerComponent/>
    </v-col>

 <!-- category by product banner component -->
<v-col md="12" sm="12" lg="12" class="py-5">
    <categoryBannerComponent/>
 </v-col>
 <!-- category by product banner component -->

 <!-- category by product component -->
 <v-col md="12" sm="12" lg="12" class="py-5">
    <catProduct/>
 <!-- category by product component -->

 </v-col>
</div>

</template>

<script>
import headerComponent from '@/components/home/headerComponent';
import categoryBannerComponent from '@/components/category/bannerComponent';
import catProduct from '@/components/category/catProduct';
export default {
    components: {headerComponent,categoryBannerComponent,catProduct}
}
</script>

<style>

</style>