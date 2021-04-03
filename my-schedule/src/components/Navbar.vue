<template>
  <div>
    <!-- only sm to large -->
    <v-card flat tile class="d-none d-sm-flex">
      <v-toolbar dense color="#0442D0" dark height="94px">
        <v-toolbar-title class="font-weight-medium f-logo text-capitalize"
          >My Schedule</v-toolbar-title
        >

        <v-spacer></v-spacer>
        <v-avatar class="mr-5" size="52">
          <img src="../assets/images/hum3.png" alt="tomi" />
        </v-avatar>
        <v-toolbar-title class="font-weight-medium mr-5"
          >Tomi Mandala Putra</v-toolbar-title
        >
        <v-menu offset-y class="text-center">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon class="mr-2" v-bind="attrs" v-on="on">
              <v-icon class="cursor">mdi-cog-outline</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-action>
                <v-btn
                  @click="btnProfile"
                  text
                  color="blue"
                  class="text-capitalize"
                  ><v-icon class="mr-3">mdi-account-circle</v-icon
                  >Profile</v-btn
                >
                <v-btn
                  @click="btnLogout"
                  text
                  color="red"
                  class="text-capitalize"
                  ><v-icon class="mr-3">mdi-logout</v-icon>Logout</v-btn
                >
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>
    </v-card>
    <!-- only extra small -->
    <v-card flat tile class="d-flex d-sm-none">
      <v-toolbar dense color="#0442D0" dark height="100px">
        <v-avatar class="mr-5">
          <img src="../assets/images/hum3.png" alt="" />
        </v-avatar>
        <v-toolbar-title class="mt-5">
          <p class="f-p mb-0">Hallo, Tomi Mandala Putra</p>
          <p class="f-l font-weight-bold t-mobile">2 Taks for today</p>
        </v-toolbar-title>
      </v-toolbar>
    </v-card>
  </div>
</template>
<script>
import mixAlert from '../helpers/mixins'
export default {
  mixins: [mixAlert],
  data: () => ({
    items: [
      { title: 'Profile' },
      { title: 'Logout' }
    ]
  }),
  methods: {
    btnProfile () {
      this.alertPopUp('info', 'Comming Soon', 'This feature is not available for demo accounts!')
    },
    btnLogout () {
      this.alertPopUp('info', 'Comming Soon', 'This feature is not available for demo accounts!')
    }
  }
}
</script>
