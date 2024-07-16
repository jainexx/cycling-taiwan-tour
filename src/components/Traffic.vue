<script>
export default {
  data() {
    return {
      buttons: [
        //陣列名稱叫buttons
        { id: "car", text: "汽車" },
        { id: "motorcycle", text: "摩托車" },
        { id: "train", text: "火車" },
      ],
    };
  },
  methods: {
    controlbuttonclick(button) {
      this.$emit("area-change", button);
    },
  },
  emits: ["area-change"],
};
</script>
<template>
  <button v-for="button in buttons" :key="button.id" @click="controlbuttonclick(button.text)">
    {{ button.text }}
  </button>
</template>
<style>
button {
  width: 300px;
  height: 100px;
  font-size: 40px;
  border-radius: 2dvh;

  &:hover {
    scale: 0.8;
  }

}
</style>
