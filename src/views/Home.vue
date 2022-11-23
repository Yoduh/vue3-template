<template>
  <div>
    <v-btn @click="test">test</v-btn>
  </div>
</template>

<script setup lang="ts">
import axios from '@/utils/axios';

const test = () => {
  axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then((res: any) => console.log(res.data));
};
</script>

<style scoped></style>
