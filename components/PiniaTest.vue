<template>
  <v-container>
    {{ store.count }}
    피니아 테스트
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { userConterStore } from '@/stores'

const store = userConterStore();

</script>