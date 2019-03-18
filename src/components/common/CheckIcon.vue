<template>
  <check-icon :value.sync="check" type="plain"></check-icon>
</template>

<script>
import { CheckIcon } from 'vux'

export default {
  components: {
    CheckIcon
  },
  data () {
    return {
      check:false
    }
  }
}
</script>