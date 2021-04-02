<template>
  <div class="home">
    <v-container fluid class="mt-10 mb-10">
      <v-row>
        <v-col md="4" sm="5" cols="12">
          <v-row>
            <v-col cols="12">
              <v-card
                elevation="10"
                color="#0442D0"
                class="rounded-xl pa-2"
                dark
              >
                <div class="d-flex flex-no-wrap justify-space-between">
                  <v-avatar class="ma-3" size="50" tile>
                    <v-img src="../assets/images/note.png" alt="note"></v-img>
                  </v-avatar>
                  <div>
                    <v-card-title class="headline"
                      ><p class="font-weight-bold t-mobile">
                        Hallo, Tomi Mandala Putra!
                      </p></v-card-title
                    >
                    <v-card-subtitle class="f-xl"
                      >You have 2 tasks left for today, Already completed Task
                      today?</v-card-subtitle
                    >
                  </div>
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" class="mt-5">
              <v-date-picker
                light
                full-width
                color="#0442D0"
                elevation="10"
                class="rounded-xl"
                locale="en"
                v-model="picker"
              ></v-date-picker>
            </v-col>
          </v-row>
        </v-col>
        <v-col md="8" sm="7" cols="12">
          <h1 class="c-h1">Task For Today</h1>
          <v-row class="mt-5">
            <v-col cols="3">
              <v-btn
                x-large
                color="primary"
                width="100%"
                class="rounded-xl text-capitalize"
              >
                <v-icon class="mr-5">mdi-plus</v-icon>
                Create New
              </v-btn>
            </v-col>
            <v-col cols="9">
              <v-text-field
                outlined
                type="text"
                label="Cari"
                append-icon="mdi-calendar-search"
                class="rounded-xl"
              ></v-text-field>
            </v-col>
          </v-row>
          <!-- card -->
          <v-row>
            <v-col cols="12">
              <v-card
                v-for="(item, i) in users"
                :key="i"
                elevation="8"
                color="#fff"
                class="rounded-xl pa-5 mb-8"
                light
              >
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <h2>{{ item.title }}</h2>
                    <v-card-subtitle class="f-l">
                      <p v-for="(itm, idx) in item.target" :key="idx">
                        {{ itm }}
                      </p>
                    </v-card-subtitle>
                  </div>
                  <v-avatar class="ma-3" size="50" tile>
                    <v-img src="../assets/images/note.png" alt="note"></v-img>
                  </v-avatar>
                </div>
              </v-card>
            </v-col>
          </v-row>
          <!-- end card -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      picker: new Date().toISOString().substr(0, 10),
      users: [
        {
          title: 'Daily Standup',
          target: ['1. Dont forget prepare your report and any blocker in Front end.', '2. Telling Project Manager for new assignment.']
        },
        {
          title: 'Meeting With Refactory.ID',
          target: ['1. Presentation FE', '2. Fix Desain']
        },
        {
          title: 'Meeting With PT. Digital',
          target: ['1. Lorem Ipsum Dolor Amet', '2. Lorem Ipsum Dolor Amet']
        }
      ]
    }
  },
  mounted () {
    console.log(this.users)
  }
}
</script>
<style lang="scss" scoped>
</style>
