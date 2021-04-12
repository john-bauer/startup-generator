<template>
<h3 class="text-2xl md:text-3xl capitalize ml-3 _fancy" :class="classes">{{ content }}</h3>
</template>

<script>
export default {
  name: "LogosPage",
  data: () => ({
    weight: 'medium',
    family: 'nimbus'
  }),
  props: {
      content: {
          type: String
      }
  },
  beforeMount() {
    const weights = ['light','medium', 'semibold']
    const randomWeightNum = Math.floor(Math.random() * 3);
    this.weight = weights[randomWeightNum]
    // console.log(this.weight)

    const families = ['gibson', 'acumin', 'nimbus', 'soleil']
    const randomFamilyNum = Math.floor(Math.random() * 4);
    this.family = families[randomFamilyNum]
    console.log(this.family)
  },
  computed: {
    classes() {
      return {
        // compose classes & if true, apply to class object
        [`typog`]: true,
        [`typog-weight--${this.weight}`]: true,
        [`typog-family--${this.family}`]: true
      };
    },
  },
};
</script>

<style scoped lang="sass">
.typog
  @apply tracking-wide text-gray-800

.typog-weight--light
  @apply font-light

.typog-weight--medium
  @apply font-medium

.typog-weight--semibold
  @apply font-semibold

.typog-weight--bold
  @apply font-bold

.typog-family--gibson
  font-family: 'Gibson', sans-serif

.typog-family--acumin
  font-family: 'acumin-pro', sans-serif

.typog-family--nimbus
  font-family: 'nimbus-sans', 'Courier', sans-serif

.typog-family--soleil
  font-family: 'soleil', sans-serif



</style>
