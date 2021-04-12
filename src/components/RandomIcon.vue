<template>
  <img
    :src="require(`@/assets/icons/categories/general/${icon}.svg`)"
    height="36"
    width="36"
  />
</template>

<script>
export default {
  name: "LogosPage",
  data: () => ({
    icon: "bonfire",
  }),
  beforeMount() {
    const icons = [
      "apps",
      "bulb",
      "cube",
      "flash",
      "pulse",
      "paper-plane",
      "shapes",
      "sparkles",
      "water",
      "kanba",
      "earth",
      "hex-lab",
      "leaf",
      "lightning",
      "idea",
      "tower",
      "kyan",
      "aven"
    ];
    const randIconNum = Math.floor(Math.random() * icons.length);
    const randomIcon = icons[randIconNum];
    this.icon = randomIcon;
  },
};
</script>

<style scoped lang="sass">
._accent
  @apply bg-red-500

</style>
