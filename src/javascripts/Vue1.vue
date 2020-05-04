<template>
  <h3>{{ message }}</h3>
</template>

<script>
export default {
  data: () => {
    console.log("Hello Vue");
    return {
      message: 'Hello Vue',
    }
  }
}
</script>

<style scoped>
h3 {
  color: green;
}
</style>
