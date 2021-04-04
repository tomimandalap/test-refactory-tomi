<template>
  <v-row justify="center">
    <v-dialog v-model="dataEdit.isEdit" max-width="600">
      <v-card class="pa-8">
        <v-card-title class="headline c-h1 f-h2"> Edit Task </v-card-title>
        <div v-for="(item, i) in getTask" :key="i">
          <div v-if="dataEdit.idEdit === item.id">
            <v-form v-model="isValid" @submit.prevent="handleEdit()">
              <v-card-text>
                <v-text-field
                  v-model="form.title"
                  :rules="titleRules"
                  label="Title"
                  type="text"
                  :placeholder="item.title"
                  autofocus
                  required
                />
                <v-textarea
                  v-model="form.description"
                  :rules="descriptionRules"
                  required
                  label="Description"
                  :placeholder="toJoin(item.target)"
                ></v-textarea>
              </v-card-text>
              <v-card-title class="font-weight-bold c-h1 f-h2 mt-n2 mb-4">
                Choose Date
              </v-card-title>
              <div class="d-none d-sm-flex">
                <v-date-picker
                  light
                  color="#0442D0"
                  elevation="2"
                  class="rounded-xl"
                  locale="en"
                  v-model="item.date"
                ></v-date-picker>
              </div>
              <div class="d-flex d-sm-none">
                <v-date-picker
                  light
                  full-width
                  color="#0442D0"
                  elevation="2"
                  locale="en"
                  v-model="item.date"
                ></v-date-picker>
              </div>
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
                  Update task
                </v-btn>
              </v-card-actions>
            </v-form>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapGetters } from 'vuex'
import mixAlert from '../helpers/mixins'
export default {
  mixins: [mixAlert],
  props: ['dataEdit'],
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
  computed: {
    ...mapGetters({
      getTask: 'getDataTask'
    })
  },
  methods: {
    toJoin (data) {
      return data.join(', ')
    },
    btnCancel () {
      this.$emit('emitEdit', false)
      this.form = {
        title: '',
        description: '',
        date: new Date().toISOString().substr(0, 10)
      }
    },
    handleEdit () {
      this.swalLoading('Process Update')
      this.$emit('emitEdit', false)
      console.log(this.form)
      this.form = {
        title: '',
        description: '',
        date: new Date().toISOString().substr(0, 10)
      }
      setTimeout(() => {
        this.swalLoadingClose()
        setTimeout(() => {
          this.alertlabel('success', 'Update success')
        }, 1000)
      }, 3000)
    }
  },
  mounted () {
  }
}
</script>
