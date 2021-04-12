<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <footer class="bg-gray-800" aria-labelledby="footerHeading">
    <h2 id="footerHeading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-4 px-4 sm:px-3 lg:px-8">
      <div class="grid">
        <p class="text-gray-200 text-center text-base mt-10">
          <span class="font-bold">Startup Generator</span> by John Bauer. The
          source code is licensed <a href="https://opensource.org/licenses/MIT">MIT</a>. The website content is licensed <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC
          SA 4.0.</a>
        </p>
        <div>
          <div
            class="mt-12 border-gray-600 border-t pt-4 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between"
          >
            <div class="py-3">
              <BuyMeACoffee />
            </div>
            <div class="space-x-4 py-3">
              <a href="https://www.johnbauer.me/">
                <span class="sr-only">Website</span>
                <IconBase class="text-gray-300 hover:text-gray-100">
                  <GlobeIcon />
                </IconBase>
              </a>
              <a href="https://github.com/john-bauer">
                <span class="sr-only">Github</span>
                <IconBase class="text-gray-300 hover:text-gray-100">
                  <GithubIcon />
                </IconBase>
              </a>
              <a href="https://www.linkedin.com/in/john-bauer/">
                <span class="sr-only">Linkedin</span>
                <IconBase class="text-gray-300 hover:text-gray-100">
                  <LinkedinIcon />
                </IconBase>
              </a>
              <a href="mailto:hello@johnbauer.me">
                <span class="sr-only">Email</span>
                <IconBase class="text-gray-300 hover:text-gray-100">
                  <EmailIcon />
                </IconBase>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import IconBase from "@/assets/icons/IconBase.vue";
import LinkedinIcon from "@/assets/icons/socials/LinkedinIcon.vue";
import GithubIcon from "@/assets/icons/socials/GithubIcon.vue";
import EmailIcon from "@/assets/icons/socials/EmailIcon.vue";
import GlobeIcon from "@/assets/icons/socials/GlobeIcon.vue";
import BuyMeACoffee from "@/components/BuyMeACoffee.vue";

export default {
  name: "Footer",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
  components: {
    LinkedinIcon,
    GithubIcon,
    EmailIcon,
    IconBase,
    GlobeIcon,
    BuyMeACoffee,
  },
};
</script>
