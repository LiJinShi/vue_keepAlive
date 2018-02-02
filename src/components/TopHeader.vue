<template lang="html">
  <div class="topBack">
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'TopHeader',
  props: ['message'],
  data: function() {
    return {

    };
  }
}
</script>

<style lang="css" scoped>
.topBack {
  color: white;
  background-color: #559bff;
  height: 49px;
  line-height: 49px;
  text-align: center;
  font-size: 18px;
}

</style>
