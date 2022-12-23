import { defineStore } from "pinia";

// Option Stores 방식
export const useStore = defineStore("test", {
  state: () => ({ count: 0 }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});


// Setup Store 방식
export const userConterStore = defineStore("counter", () => {
  const count = ref(10);
  const name = ref("Eduardo");
  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  return {
    count,
    name,
    doubleCount,
    increment,
  };
});

/** setup store 방식과 option store 방식의 차이점
 * ref() == state
 * computed() == getters
 * function() == actions
 */