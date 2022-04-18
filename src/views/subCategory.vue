<template>
<div>
    <v-col md="12" sm="12" lg="12" class="header-menu">
        <headerComponent/>
    </v-col>

 <!-- category by product banner component -->
<v-col md="12" sm="12" lg="12" class="py-5">
    <subCatComponent/>
 </v-col>
 <!-- category by product banner component -->

</div>

</template>

<script>
import headerComponent from '@/components/home/headerComponent';
import subCatComponent from '@/components/category/subCatComponent';

export default {
    components: {headerComponent,subCatComponent},

}
</script>

<style>

</style>