<template>
  <!-- only-xsmall -->
  <v-footer
    elevation="8"
    color="white"
    padless
    height="100"
    class="d-flex d-sm-none"
  >
    <v-card class="flex" flat tile>
      <v-card-title class="justify-center bg-white">
        <v-btn class="mx-8" color="#0442D0" icon>
          <v-icon large> mdi-notebook-check-outline </v-icon>
        </v-btn>
        <v-btn class="mx-8" color="#0442D0" icon>
          <v-icon large> mdi-plus-box-outline </v-icon>
        </v-btn>
        <v-btn class="mx-8" color="#0442D0" icon>
          <v-icon large> mdi-cog-outline </v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
  })
}
</script>
