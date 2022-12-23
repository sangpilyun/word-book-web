<template>
  <v-app-bar>
      <v-app-bar-nav-icon @click="toggleNavDrawer"></v-app-bar-nav-icon>
      <v-app-bar-title>내 단어장 {{ theme }}</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn :prepend-icon="isLogin === false ? 'mdi-login' : 'mdi-logout'" @click="login">
        {{ isLogin === false ? 'Login' : 'Logout' }}
      </v-btn>
      <v-btn :prepend-icon="theme === 'light' ? 'mdi-moon-waxing-crescent' : 'mdi-white-balance-sunny'"
        @click="toggleTheme">
        Toggle Theme{{ theme }}
      </v-btn>
    </v-app-bar>
    
  
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  theme: {
    type: String,
    default: 'light',
  },
});
const emit = defineEmits(['toggleTheme']);
const isLogin = ref(false);

const login = () => {
  isLogin.value = !isLogin.value;
  console.log('login');
};
const toggleTheme = () => {
  emit('toggleTheme');
};
const toggleNavDrawer = () => {
  emit('toggleNavDrawer');
};
</script>