<template>
  <div class="home">
    <div class="bg-white pb-24">
      <div class="container">
        <Prompt class="mb-4 pt-10" />
        <SearchForm />
      </div>
    </div>
  </div>
</template>

<script>
import SearchForm from "@/components/SearchForm.vue";
import Prompt from "@/components/Prompt.vue";

export default {
  name: "Home",
  data: () => ({
    showIcon: true,
  }),
  components: {
    SearchForm,
    Prompt
  },
  methods: {
    handleShow() {
      this.showIcon = !this.showIcon;
    },
  },
};
</script>
