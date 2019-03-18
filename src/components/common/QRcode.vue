<template>
  <div style="text-align:center;margin-top:15px;">
    <qrcode :value="value"></qrcode>
    <br>
  </div>
</template>

<script>
import { Qrcode } from 'vux'

export default {
  mounted () {

  },
  components: {
    Qrcode
  },
  data () {
    return {
      value: 'https://vux.li',
      fgColor: '#000000'
    }
  }
}
</script>