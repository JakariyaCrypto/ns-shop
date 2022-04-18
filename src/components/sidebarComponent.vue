<template>

<v-app>

<v-card flat elevation="0">

    
   <div class="vertical-nav bg-white" id="sidebar">
    <div class="py-4 px-3 mb-4 bg-light">
      <v-toolbar-title style="cursor:pointer"><h3 @click="homePage" link>NSSEll</h3></v-toolbar-title>
    </div>
    <v-list class="side-menu">
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
        style="margin:0 !important"
        
      >
        <template v-slot:activator>
          <v-list-item-content :to="item.par_link" link >
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="child in item.items"
          :key="child.title"
          :to="child.link" link
        >
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>

  </div>

</v-card>
</v-app>
   


</template>

<script>
export default {
    data: () => ({
        selectedItem: 0,
        drawer: false,
        items: [
        {
          action: 'fas fa-user',
          items: [
            { title: 'List Item', link: '/sub-category'},
             
            ],
          title: 'Attractions',
          par_link: '/sub-category',
          
        },
        {
          action: 'mdi-silverware-fork-knife',
          active: true,
          items: [
            { title: 'Breakfast & brunch',link: '/sub-category' },
            { title: 'New American',link: '/sub-category' },
            { title: 'Sushi',link: '/sub-category' },
          ],
          title: 'Dining',
          par_link: '/sub-category',
        },
        
        {
          action: 'mdi-briefcase',
          items: [
            { title: 'List Item',link: '/sub-category' },
            ],
          title: 'Office',
        },
        {
          action: 'mdi-tag',
          items: [
            { title: 'List Item',link: '/category-product' },
          ],
          title: 'Promotions',
        },
      ],
    }),

    methods: {
      homePage(){
        this.$router.push({name: 'Home'});
      }
    }
}
</script>

<style>
.border{
    background: #704232;
    text-decoration: none;
}
.v-list-item-group .v-item--action {
    color: white !important;
}

.theme--light.v-list-item--active .v-list-item__subtitle, .theme--light.v-list-item .v-list-item_action-text{
    color: white !important;
}

.v-icon.notranslate.material-icons.theme--light {
	width: 0px;
	font-size: 30px;
}

.v-list-group .v-list-group__header .v-list-item__icon.v-list-group__header__append-icon {
	justify-content: center;
}

.v-icon.fas.fa-chevron-down.theme--light {
	font-size: 14px;
}

.vertical-nav {
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
	transition: all 0.4s;
	width: 16.6666666667% !important;
}

.side-menu {
	overflow: auto;
	height: 500px;
	width: 97%;
}

.page-content {
  width: calc(100% - 17rem);
  margin-left: 17rem;
  transition: all 0.4s;
}
/* for toggle behavior */
#sidebar.active {
  margin-left: -17rem;
}
#content.active {
  width: 100%;
  margin: 0;
}
.v-application--is-ltr .v-list-item__action:last-of-type:not(:only-child), .v-application--is-ltr .v-list-item__avatar:last-of-type:not(:only-child), .v-application--is-ltr .v-list-item__icon:last-of-type:not(:only-child) {
	margin-left: 0px !important;
}

.v-application--is-ltr .v-list-item__action:first-child, .v-application--is-ltr .v-list-item__icon:first-child {
	margin-right: 10px !important;
}

.v-application--is-ltr .v-list-group--no-action > .v-list-group__items > .v-list-item {
	padding-left: 55px !important;
}

@media (max-width: 768px) {
  #sidebar {
    margin-left: -17rem;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #content {
    width: 100%;
    margin: 0;
  }
  #content.active {
    margin-left: 17rem;
    width: calc(100% - 17rem);
  }
}

</style>