<template>
  <!-- only-xsmall -->
  <v-footer
    elevation="8"
    color="white"
    padless
    height="70"
    class="d-flex d-sm-none"
  >
    <v-card class="flex" flat tile>
      <v-card-title class="justify-center bg-white">
        <v-btn @click="btnList" class="mx-8" color="#0442D0" icon>
          <v-icon large> mdi-notebook-check-outline </v-icon>
        </v-btn>
        <v-btn @click="btnCreate" class="mx-8" color="#0442D0" icon>
          <v-icon large> mdi-plus-box-outline </v-icon>
        </v-btn>

        <v-menu open-on-hover top offset-y class="text-center">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mx-8" color="#0442D0" icon v-bind="attrs" v-on="on">
              <v-icon large> mdi-cog-outline </v-icon>
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
      </v-card-title>
    </v-card>
    <v-container>
      <Modal :dataDialog="dialog" v-on:emitDialog="getEmit" />
    </v-container>
  </v-footer>
</template>
<script>
import Modal from '../components/Modal'
import mixAlert from '../helpers/mixins'
export default {
  mixins: [mixAlert],
  data: () => ({
    dialog: false
  }),
  components: {
    Modal
  },
  methods: {
    btnList () {
      this.alertPopUp('info', 'Comming Soon', 'This feature is not available for demo accounts!')
    },
    btnCreate () {
      this.dialog = true
    },
    getEmit (state) {
      this.dialog = state
    },
    btnProfile () {
      this.alertPopUp('info', 'Comming Soon', 'This feature is not available for demo accounts!')
    },
    btnLogout () {
      this.alertPopUp('info', 'Comming Soon', 'This feature is not available for demo accounts!')
    }
  }
}
</script>
