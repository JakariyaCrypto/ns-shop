<template>
  <div>
      <v-row>
          <v-subheader class="font-weight-medium"><h2>Summer Deal</h2></v-subheader>
      </v-row>
      <v-row>
          <v-col cols="12">
              <v-card height="400px" style="position:relative">
                  <v-img src="../../assets/img/cat-1.jpg" height="400px" />
                  <div class="banner-content">
                      <h2>summer collection</h2>
                      <p>lorem ispusm is goign here.lorem ispusm is goign here.lorem ispusm is goign here.</p>
                      <v-btn large color="#704232" class="white--text">Shop Now</v-btn>
                  </div>
              </v-card>
          </v-col>
      </v-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.banner-content {
	position: absolute;
	top: 40%;
	left: 20%;
}
.banner-content h2 {
	text-transform: capitalize;
	font-size: 30px;
}

</style>