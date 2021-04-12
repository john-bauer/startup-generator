<template>
    <div :class="classes" class="text-white">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: "LogosPage",
  data: () => ({
    randomStyle: null
  }),
  beforeMount() {
    const styles = ['floral-01', 'floral-02', 'floral-03', 'shapes-01', 'shapes-02', 'shapes-03', 'texture-01', 'texture-02', 'texture-03', 'texture-04', 'texture-05', 'texture-06', 'texture-07', 'texture-08', 'texture-09', 'texture-10', 'texture-11']
    const randomStyleNum = Math.floor(Math.random() * styles.length);
    this.randomStyle = styles[randomStyleNum]
  },
  computed: {
    classes() {
      return {
        // compose classes & if true, apply to class object
        [`_bg`]: true,
        [`_bg-style--${this.randomStyle}`]: true
      };
    },
  },
};
</script>

<style scoped lang="sass">
._bg
  background-position: center
  background-size: cover
  @apply py-16 px-4 rounded-md shadow-md border border-gray-300


._bg-style--floral-01
  background-image: url("../assets/bgs/floral-01.svg")

._bg-style--floral-02
  background-image: url("../assets/bgs/floral-02.svg")

._bg-style--floral-03
  background-image: url("../assets/bgs/floral-03.svg")

._bg-style--shapes-01
  background-image: url("../assets/bgs/shapes-01.svg")

._bg-style--shapes-02
  background-image: url("../assets/bgs/shapes-02.svg")

._bg-style--shapes-03
  background-image: url("../assets/bgs/shapes-03.svg")

._bg-style--texture-01
  background-image: url("../assets/bgs/texture-01.jpg")

._bg-style--texture-02
  background-image: url("../assets/bgs/texture-02.jpg")

._bg-style--texture-03
  background-image: url("../assets/bgs/texture-03.jpg")

._bg-style--texture-04
  background-image: url("../assets/bgs/texture-04.jpg")

._bg-style--texture-05
  background-image: url("../assets/bgs/texture-05.jpg")

._bg-style--texture-06
  background-image: url("../assets/bgs/texture-06.jpg")

._bg-style--texture-07
  background-image: url("../assets/bgs/texture-07.jpg")

._bg-style--texture-08
  background-image: url("../assets/bgs/texture-08.jpg")

._bg-style--texture-09
  background-image: url("../assets/bgs/texture-09.jpg")

._bg-style--texture-10
  background-image: url("../assets/bgs/texture-10.jpg")

._bg-style--texture-11
  background-image: url("../assets/bgs/texture-11.jpg")


</style>
