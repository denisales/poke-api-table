<template>
  <header>
    <img src="@/assets/pokemon-logo.png" alt="">
    <h1>Pokemon api</h1>
  </header>
</template>

<script>
export default {

};
</script>

<style scoped lang="scss">
  header {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    img {
      width: 150px;
      margin-bottom: 20px;
    }

    h1 {
      font-weight: bold;
      font-size: 18px;
    }
  }
</style>
