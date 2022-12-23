<template>
  <v-navigation-drawer v-model="drawer" temporary>
      <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg" title="John Leider"></v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-book-open-outline" title="단어 리스트" value="wordList" @click="ToggleNavDrawer"></v-list-item>
        <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        <v-list-item prepend-icon="mdi-account" title="Profile" value="profile">{{ drawer }}</v-list-item>
      </v-list>
    </v-navigation-drawer>
    
</template>

<script setup>
const ToggleNavDrawer = () => {
  drawer.value = !drawer.value;
};
</script>