<template>
  <div>
    <group title="三级联动显示">
      <popup-picker
        :title="title"
        :data="list3"
        :columns="3"
        v-model="value"
        show-name
        @on-change="onChange"
        @on-shadow-change="onShadowChange"
        @on-hide="onHide"
      ></popup-picker>
    </group>
  </div>
</template>

<script>
import { PopupPicker, Group } from "vux";

export default {
  components: {
    PopupPicker,
    Group
  },
  methods: {
    onHide (type) {
      console.log('on hide', type)
    },
    onChange(val) {
      console.log("val change", val);
    },
    onShadowChange(Arrayids, Arraynames) {
      console.log("val change", Arrayids, Arraynames);
    }
  },
  data() {
    return {
      date: "",
      title: "联动显示文字",
      list3: [
        {
          name: "中国",
          value: "china",
          parent: 0
        },
        {
          name: "美国",
          value: "USA",
          parent: 0
        },
        {
          name: "广东",
          value: "china001",
          parent: "china"
        },
        {
          name: "广西",
          value: "china002",
          parent: "china"
        },
        {
          name: "美国001",
          value: "usa001",
          parent: "USA"
        },
        {
          name: "美国002",
          value: "usa002",
          parent: "USA"
        },
        {
          name: "广州",
          value: "gz",
          parent: "china001"
        },
        {
          name: "深圳",
          value: "sz",
          parent: "china001"
        },
        {
          name: "广西001",
          value: "gx001",
          parent: "china002"
        },
        {
          name: "广西002",
          value: "gx002",
          parent: "china002"
        },
        {
          name: "美国001_001",
          value: "0003",
          parent: "usa001"
        },
        {
          name: "美国001_002",
          value: "0004",
          parent: "usa001"
        },
        {
          name: "美国002_001",
          value: "0005",
          parent: "usa002"
        },
        {
          name: "美国002_002",
          value: "0006",
          parent: "usa002"
        }
      ],
      value: []
    };
  }
};
</script>

<style scoped>
.picker-buttons {
  margin: 0 15px;
}
</style>