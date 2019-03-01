<template>
  <div>
    <dialog-confirm></dialog-confirm>
    <toast-tip></toast-tip>
  </div>
</template>

<script>

import DialogConfirm from '../../common/ConfirmDialog.vue'
import ToastTip from '../../common/ToastTip.vue'

  export default {
    name:'',
    props:[''],
    data () {
      return {

      };
    },

    components: {
      DialogConfirm,
      ToastTip
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='' scoped>

</style>