<template>
  <v-app :theme="theme">
    <AppBar v-model="theme" v-on:toggleTheme="toggleTheme" v-on:toggleNavDrawer="toggleNavDrawer"></AppBar>
    <NavigationDrawer v-model="drawer"></NavigationDrawer>
    
    <v-main>
      <v-container>main Content area</v-container>
      
    </v-main>

    <v-footer>
      <v-container>
        footer
        <PiniaTest></PiniaTest>
      </v-container>
    </v-footer>

    <v-bottom-navigation>
      <v-btn icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-settings</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const theme = ref('light');
const isLogin = ref(false);
const drawer = ref(false);

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  console.log('toggleTheme', theme.value);
};

const login = () => {
  isLogin.value = !isLogin.value;
  console.log('login');
};

const toggleNavDrawer = () => {
  drawer.value = !drawer.value;
};
</script>