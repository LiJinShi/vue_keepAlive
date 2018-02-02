<template lang="html">
  <div class="">
    <TopHeader :message="msg"></TopHeader>

    <div class="button" @click="jumpToBPage()">
      进入BPage
    </div>
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader'
export default {
  data() {
    return {
      msg: "APage"
    }
  },
  components: {
    TopHeader
  },
  methods: {
    jumpToBPage() {
      this.$router.push("/bpage");
    }
  }
}
</script>

<style lang="css">

.button {
  margin-top: 30px;
  display: inline-block;
  width: 100px;
  height: 39px;
  line-height: 39px;
  text-align: center;
  color: white;
  background-color: brown;
}

</style>
