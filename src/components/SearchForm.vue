<template>
  <form @submit.prevent="handleSubmit()">
    <!-- search field -->
    <div class="flex flex-row">
      <div class="w-full">
        <input
          ref="search"
          autocomplete="off"
          @input="watchForInput"
          type="text"
          name="search"
          placeholder="Enter a keyword that relates to your startup"
          class="w-full h-12 px-3 py-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md bg-gray-100"
          v-model="input"
        />
        <div class="flex justify-between items-center">
          <p v-if="showError" class="leading-loose text-sm text-red-700">
            {{ errorMsg }}
          </p>
          <p
            class="text-xs leading-loose text-gray-500 font-medium"
            :class="{ 'text-red-700': remainingCharacters <= 0 }"
          >
            {{ remainingCharacters }}/20
          </p>
        </div>
      </div>
      <!-- button -->
      <button
        type="submit"
        class="px-3 py-3 font-condensed h-12 self-start text-center bg-blue-500 rounded-md shadow-sm text-white md:my-0 ml-0 ml-3 focus:outline-none"
        value="Submit"
      >
        <span class="hidden md:flex" sr="Generate">Generate</span
        >
        <GIconBase class="text-white">
          <SearchIcon class="flex md:hidden"/>
        </GIconBase>
      </button>
    </div>
  </form>
  <Spinner v-if="loading" />
  <p v-if="hasResults" class="italic my-2 text-gray-500 text-sm md:text-base">
    Suggestions for "{{ prevInput }}"
  </p>
  <!-- <pre>{{ translations }}</pre> -->
  <transition name="fade">
    <div
      v-if="translations"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="translation in orderedTranslations()"
        :key="translation.order"
      >
        <RandomBackground>
          <div class="flex items-center justify-center">
            <RandomIcon></RandomIcon>
            <RandomTypography :content="translation.content"></RandomTypography>
          </div>
          <p
            class="text-gray-700 capitalize leading-relaxed tracking-wide font-condensed text-sm my-2 text-center"
          >
            {{ translation.langFull }}
          </p>
        </RandomBackground>
      </div>
    </div>
  </transition>
</template>
<script>
// TODO: Break up this component some more
// possibly refactor background/icon/typography structure.
import Spinner from "@/components/Spinner.vue";
import firebase from "@/services/firebase.js";
import RandomIcon from "@/components/RandomIcon.vue";
import RandomTypography from "@/components/RandomTypography.vue";
import RandomBackground from "@/components/RandomBackground.vue";
import SearchIcon from "@/assets/icons/feather/SearchIcon.vue";

export default {
  name: "SearchForm",
  components: {
    RandomIcon,
    RandomTypography,
    Spinner,
    RandomBackground,
    SearchIcon,
  },
  data: () => ({
    input: "",
    prevInput: null,
    loading: false,
    hasResults: false,
    translations: [],
    showError: false,
    errorMsg: "hello",
  }),
  methods: {
    watchForInput() {
      this.showError = false;
    },
    orderedTranslations() {
      return this.translations.sort((a, b) => (a.order > b.order ? 1 : -1));
    },
    handleSubmit() {
      console.log(this.input.length);
      if (this.input.length < 1) {
        this.showError = true;
        this.errorMsg = "This field is required.";
      } else if (this.input.length > 20) {
        this.showError = true;
        this.errorMsg = "Keep it short!";
        return;
      } else {
        this.$refs.search.blur();
        this.loading = true;
        this.hasResults = false;
        this.translations = null;
        this.prevInput = this.input;
        firebase
          .firestore()
          .collection("translations")
          .add({
            input: this.input,
          })
          .then((newDoc) => {
            // console.log(newDoc.id);
            firebase
              .firestore()
              .collection("translations")
              .doc(newDoc.id)
              .onSnapshot((doc) => {
                // console.log(doc.data())
                if (doc.data().translated !== undefined) {
                  this.translations = [];
                  const payload = doc.data().translated;
                  for (let i = 0; i < Object.keys(payload).length; i++) {
                    let currentLang = Object.keys(payload)[i];
                    let langFull;
                    let order;
                    if (currentLang === "eo") {
                      langFull = "Esperanto";
                      order = 1;
                    }
                    // match language to iso
                    if (currentLang === "la") {
                      langFull = "Latin";
                      order = 2;
                    }
                    if (currentLang === "co") {
                      langFull = "Corsican";
                      order = 3;
                    }
                    if (currentLang === "sw") {
                      langFull = "Swahili";
                      order = 4;
                    }
                    if (currentLang === "haw") {
                      langFull = "Hawaiian";
                      order = 5;
                    }
                    if (currentLang === "jv") {
                      langFull = "Javanese";
                      order = 6;
                    }
                    // push to array
                    this.translations.push({
                      lang: currentLang,
                      content: payload[currentLang],
                      langFull: langFull,
                      order: order,
                    });
                  }

                  this.loading = false;
                  this.hasResults = true;
                }
              });
          });
      }
    },
  },
  computed: {
    remainingCharacters() {
      if (this.input) {
        return 20 - this.input.length;
      } else {
        return 20;
      }
    },
  },
};
</script>

<style scoped lang="sass">
.fade-enter-active,
.fade-leave-active
  transition: opacity 0.5s ease

.fade-enter-from,
.fade-leave-to
  opacity: 0
</style>