<template lang="html">
  <div class="cVue">
    <TopHeader :message="msg" class="TopHeader"></TopHeader>

    <div class="bottom_content">
      <p v-for="elem in 100" :key="elem.key">{{elem}}==item_{{$route.params.index}}的详情</p>
    </div>
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader'
export default {
  data() {
    return {
      msg: "CPage"
    }
  },
  components: {
    TopHeader
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style lang="css" scoped="cVue">


.cVue {
  margin-top: 49px;
}

.TopHeader {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.bottom_content {
  overflow-y: scroll;

  -webkit-overflow-scrolling: touch;
}

</style>
