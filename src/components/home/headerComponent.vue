<template>

  <v-row width="100%">
      <v-col sm="12" md="12" lg="12" xl="12" style="padding:0px">
          <v-toolbar elevation="0">
            <v-col sm="3">

              
              </v-col>
              <v-col sm="6">
                  <v-text-field label="search category or menu" class="mt-12 mb-5" color="brown"
                filled height="30px" append-icon="mdi-magnify" background-color="gray lighten-4"
                dense solo widht="150"
              >

              </v-text-field>
                </v-col>
                
                <v-col sm="1">
                    <v-badge
                        bordered
                        color="error"
                        icon="mdi-bell"
                        overlap
                    >
                    <v-icon>
                        fas fa-bell
                        </v-icon>
                     </v-badge>
                </v-col>
                <v-spacer></v-spacer>
                <v-col sm="2" align="center">
                  <div class="header-icon">
                      <v-btn color="#704232" class="white--text" flat fab small>
                        <v-icon>fas fa-shopping-basket</v-icon>
                      </v-btn>
                      <v-btn color="#704232" class="white--text ml-2" flat fab small>
                        <v-icon>fas fa-user</v-icon>
                    </v-btn>
                  </div>
                    
                </v-col>
          </v-toolbar>
      </v-col>
  </v-row>
 
</template>

<script>
export default {

}
</script>

<style>
  
</style>