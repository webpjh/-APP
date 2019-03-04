<template>
  <div style="text-align:center;margin-top:15px;">
    <divider>type = canvas</divider>
    <qrcode :value="value"></qrcode>
    <br>
  </div>
</template>

<script>
import { Qrcode, Divider } from 'vux'

export default {
  mounted () {

  },
  components: {
    Qrcode,
    Divider
  },
  data () {
    return {
      value: 'https://vux.li',
      fgColor: '#000000'
    }
  }
}
</script>