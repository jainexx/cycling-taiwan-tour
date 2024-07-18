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
  width: 70%;
  height: 25%;
  font-size: 30px;
  border-radius: 40dvh;
  transition: 0.5s;
  background-color: #ffffff;
  color: #39ab4b;
  font-weight: 800;
  font-size: 45px;
  letter-spacing: 15px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 15px;
  border: none;


  &:hover {
    scale: 0.9;
    background: #39ab4b ;
    color: white;

  }
}
</style>
