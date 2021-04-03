<template>
  <div>
    <!-- only sm to large -->
    <v-card flat tile class="d-none d-sm-flex">
      <v-toolbar dense color="#0442D0" dark height="94px">
        <v-toolbar-title class="font-weight-medium f-logo text-uppercase"
          >My-Schedule</v-toolbar-title
        >

        <v-spacer></v-spacer>
        <v-avatar class="mr-5" size="52">
          <img src="../assets/images/hum3.png" alt="tomi" />
        </v-avatar>
        <v-toolbar-title class="font-weight-medium mr-5"
          >Tomi Mandala Putra</v-toolbar-title
        >
        <v-btn icon>
          <v-icon class="cursor mr-5">mdi-cog-outline</v-icon>
        </v-btn>
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
