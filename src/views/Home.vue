<template>
  <v-col cols="12" xs="12" sm="12" lg="12" xl="12" md="12" style="padding-left:0px">
    <mainHome/>    
  </v-col>


</template>

<script>
// @ is an alias to /src
import mainHome from '@/components/home/homeMain';

export default {
  name: 'Home',
  components: {mainHome}

}
</script>
