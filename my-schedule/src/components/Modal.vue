<template>
  <v-row justify="center">
    <v-dialog v-model="dataDialog" max-width="600">
      <v-card class="pa-8">
        <v-card-title class="headline c-h1 f-h2"> New Task </v-card-title>
        <v-form v-model="isValid" @submit.prevent="handleCreate()">
          <v-card-text>
            <v-text-field
              v-model="form.title"
              :rules="titleRules"
              label="Title"
              type="text"
              placeholder="Fill title"
              autofocus
              required
            />
            <v-textarea
              v-model="form.description"
              :rules="descriptionRules"
              required
              label="Description"
            ></v-textarea>
          </v-card-text>
          <v-card-title class="font-weight-bold c-h1 f-h2 mt-n2 mb-4">
            Choose Date
          </v-card-title>
          <v-date-picker
            light
            color="#0442D0"
            elevation="2"
            class="rounded-xl"
            locale="en"
            v-model="form.date"
          ></v-date-picker>
          <v-card-actions class="mt-8 justify-center">
            <v-btn
              @click="btnCancel"
              color="blue darken-1"
              text
              class="mr-5 text-capitalize pa-5"
            >
              Cancel
            </v-btn>
            <v-btn
              :disabled="!isValid"
              dark
              type="submit"
              color="#0442D0"
              class="text-capitalize pa-3"
            >
              Create Task
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import mixAlert from '../helpers/mixins'
export default {
  name: 'Modal',
  mixins: [mixAlert],
  props: ['dataDialog'],
  data () {
    return {
      isValid: false,
      form: {
        title: '',
        description: '',
        date: new Date().toISOString().substr(0, 10)
      },
      titleRules: [
        v => !!v || 'Title is required'
      ],
      descriptionRules: [
        v => !!v || 'Description is required',
        v => v.length >= 10 || 'Description text must be longer than 10 characters'
      ]
    }
  },
  methods: {
    btnCancel () {
      this.$emit('emitDialog', false)
      this.form = {
        title: '',
        description: '',
        date: new Date().toISOString().substr(0, 10)
      }
    },
    handleCreate () {
      this.$emit('emitDialog', false)
      console.log(this.form)
      this.form = {
        title: '',
        description: '',
        date: new Date().toISOString().substr(0, 10)
      }
    }
  }
}
</script>
