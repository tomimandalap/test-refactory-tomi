<template>
  <div class="home">
    <!-- only sm to md -->
    <v-container fluid class="mt-10 mb-5 d-none d-sm-flex">
      <v-row>
        <v-col md="4" sm="5">
          <v-row>
            <v-col sm="12">
              <v-card
                elevation="8"
                color="#0442D0"
                class="rounded-xl pa-2"
                dark
              >
                <div class="d-flex flex-no-wrap justify-space-between">
                  <v-avatar class="ma-3" size="50" tile>
                    <v-img src="../assets/images/note.png" alt="note"></v-img>
                  </v-avatar>
                  <div>
                    <v-card-title class="headline">
                      <!-- md -->
                      <p
                        class="font-weight-bold t-mobile d-none d-sm-none d-md-flex"
                      >
                        Hallo, Tomi Mandala Putra!
                      </p>
                      <!-- sm -->
                      <p
                        class="font-weight-bold f-l t-mobile d-none d-sm-flex d-md-none"
                      >
                        Hallo, Tomi Mandala Putra!
                      </p>
                    </v-card-title>
                    <v-card-subtitle class="f-xl d-none d-sm-none d-md-flex"
                      >You have 2 tasks left for today, Already completed Task
                      today?</v-card-subtitle
                    >
                    <v-card-subtitle
                      class="f-md mt-n10 d-none d-sm-flex d-md-none"
                      >You have 2 tasks left for today, Already completed Task
                      today?</v-card-subtitle
                    >
                  </div>
                </div>
              </v-card>
            </v-col>
            <v-col sm="12" class="mt-5">
              <v-date-picker
                light
                full-width
                color="#0442D0"
                elevation="8"
                class="rounded-xl"
                locale="en"
                v-model="picker"
              ></v-date-picker>
            </v-col>
          </v-row>
        </v-col>
        <v-col md="8" sm="7">
          <h1 class="c-h1">Task For Today</h1>
          <v-row class="mt-5">
            <v-col md="3" sm="12">
              <v-btn
                x-large
                elevation="5"
                color="primary"
                width="100%"
                class="rounded-xl text-capitalize"
              >
                <v-icon class="mr-5">mdi-plus</v-icon>
                Create New
              </v-btn>
            </v-col>
            <v-col md="9" sm="12">
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
          <v-row class="overflow-hidden">
            <v-col sm="12">
              <v-card
                elevation="0"
                color="#FBFCFF"
                class="rounded-xl pa-5 mb-2"
                light
                elevate-on-scroll
                scroll-target="#scrolling-techniques-7"
              >
                <v-sheet
                  id="scrolling-techniques-7"
                  class="overflow-y-auto"
                  max-height="400"
                >
                  <div style="max-height: 880px" class="pa-5 bg-body">
                    <div v-for="(item, i) in users" :key="i">
                      <v-card
                        elevation="5"
                        color="#FFF"
                        class="rounded-lg pa-3 mb-10"
                        light
                      >
                        <span class="c-h1 f-h2 font-weight-bold"
                          >{{ item.title }}
                          <v-btn
                            v-if="!item.status"
                            depressed
                            color="#FEEAEB"
                            class="ml-5 pink--text f-xs text-capitalize rounded-xl"
                            small
                          >
                            <v-icon class="mr-1" small>mdi-check-all</v-icon>
                            Complete
                          </v-btn>
                          <v-btn
                            v-else
                            depressed
                            color="#F2F4F8"
                            class="ml-5 f-xs text-capitalize rounded-xl"
                            small
                          >
                            <v-icon class="mr-1" small>mdi-check</v-icon>
                            Set as Complete
                          </v-btn>
                        </span>
                        <div class="d-flex flex-no-wrap justify-space-between">
                          <div>
                            <v-card-subtitle class="c-h1">
                              <div v-for="(itm, idx) in item.target" :key="idx">
                                <p class="f-l d-none d-sm-none d-md-flex">
                                  {{ itm }}
                                </p>
                                <p class="f-md d-none d-sm-flex d-md-none">
                                  {{ itm }}
                                </p>
                              </div>
                            </v-card-subtitle>
                          </div>
                          <div class="b align-self-end">
                            <v-btn icon class="mr-1">
                              <v-icon medium>mdi-pencil</v-icon>
                            </v-btn>
                            <v-btn icon>
                              <v-icon medium>mdi-trash-can</v-icon>
                            </v-btn>
                          </div>
                        </div>
                      </v-card>
                    </div>
                  </div>
                </v-sheet>
                <div class="text-center mt-5">
                  <v-pagination v-model="page" :length="2"></v-pagination>
                </div>
              </v-card>
            </v-col>
          </v-row>
          <!-- end card -->
        </v-col>
      </v-row>
    </v-container>
    <!-- only xsmall -->
    <v-container class="d-flex d-sm-none">
      <h3>Small</h3>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      page: 1,
      collapseOnScroll: true,
      picker: new Date().toISOString().substr(0, 10),
      users: [
        {
          status: false,
          title: 'Daily Standup',
          target: ['1. Dont forget prepare your report and any blocker in Front end.', '2. Telling Project Manager for new assignment.']
        },
        {
          status: true,
          title: 'Meeting With Refactory.ID',
          target: ['1. Presentation FE', '2. Fix Desain']
        },
        {
          status: true,
          title: 'Meeting With PT. Digital',
          target: ['1. Lorem Ipsum Dolor Amet', '2. Lorem Ipsum Dolor Amet']
        },
        {
          status: true,
          title: 'Meeting With PT. Garuda',
          target: ['1. Lorem Ipsum Dolor Amet', '2. Lorem Ipsum Dolor Amet', '3. Lorem Ipsum Dolor Amet']
        }
      ]
    }
  },
  mounted () {
    // console.log(this.users)
  }
}
</script>
<style lang="scss" scoped>
</style>
