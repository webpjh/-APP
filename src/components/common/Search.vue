<template>
  <div>
    <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      position="absolute"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"
      :placeholder="placeHolder"
      auto-scroll-to-top
    ></search>
  </div>
</template>

<script>
import { Search, Group, Cell, XButton } from "vux";

export default {
  props: ["placeHolder"],
  components: {
    Search,
    Group,
    Cell,
    XButton
  },
  data() {
    return {
      results: [],
      value: ""
    };
  },
  methods: {
    setFocus() {
      this.$refs.search.setFocus();
    },
    resultClick(item) {
      window.alert("you click the result item: " + JSON.stringify(item));
    },
    getResult(val) {
      console.log("on-change", val);
      this.results = val ? getResult(this.value) : [];
    },
    onSubmit() {
      this.$refs.search.setBlur();
      this.$vux.toast.show({
        type: "text",
        position: "top",
        text: "on submit"
      });
    },
    onFocus() {
      console.log("on focus");
    },
    onCancel() {
      this.$router.goBack();
    }
  },
  mounted(){
    this.setFocus();
  }
};

function getResult(val) {
  let rs = [];
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    });
  }
  return rs;
}
</script>