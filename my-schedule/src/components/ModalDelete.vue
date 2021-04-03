<template>
  <v-row justify="center">
    <v-dialog v-model="dataDelete" persistent max-width="290">
      <v-card>
        <v-card-title class="headline"> Are you sure? </v-card-title>
        <v-card-text>You won't be able to revert this!</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="$emit('emitDelete', false)"
            class="text-capitalize"
          >
            Cancel
          </v-btn>
          <v-btn
            color="red darken-1"
            text
            @click="btnYes"
            class="text-capitalize"
          >
            Yes, delete it!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import mixAlert from '../helpers/mixins'
export default {
  mixins: [mixAlert],
  props: ['dataDelete'],
  methods: {
    btnYes () {
      this.swalLoading('Process delete')
      this.$emit('emitDelete', false)
      setTimeout(() => {
        this.swalLoadingClose()
        setTimeout(() => {
          this.alertlabel('success', 'Delete success')
        }, 1000)
      }, 3000)
    }
  }
}
</script>
