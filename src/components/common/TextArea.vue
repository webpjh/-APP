<template>
  <div>
    <group title="$t('used with input')">
      <x-input placeholder="$t('title')"></x-input>
      <x-textarea :max="200" name="description" placeholder="$t('placeholder')"></x-textarea>
    </group>
  </div>
</template>

<script>
import { XTextarea, Group, XInput } from 'vux'

export default {
  components: {
    XTextarea,
    Group,
    XInput
  },
  methods: {
    onEvent (event) {
      console.log('on', event)
    }
  }
}
</script>