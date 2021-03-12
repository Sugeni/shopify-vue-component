<template>
  <div
    v-bind:class="[settings.styleApp]"
    v-bind:style="{ backgroundImage: 'url(' +  isResponsive  + ')' }"
  >
    <div v-bind:class="[settings.styleWrapper]">
      <h1 class="hero-title" v-bind:style="{ color: settings.text_color }">
        {{ settings.title }}
      </h1>
      <p class="hero-copy" v-bind:style="{ color: settings.text_color }">
        {{ settings.subtitle }}
      </p>
      <div class="hero-CTA" v-if="settings.CTA_Text.length > 0">
        <a class="hero-CTA-link" v-bind:style="{ color: settings.text_color }">
          {{ settings.CTA_Text }}
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    settings: Object,
    blocks: Array,
  },
data() {
   return {
      windowWidth: 0,
      windowHeight: 0
   }
}, 
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth);
      window.addEventListener('resize', this.getWindowHeight);
      //Init
      this.getWindowWidth()
      this.getWindowHeight()
    })

  },
computed: {
    isResponsive () {
      if (this.windowWidth >= 768) {
        return this.settings.image
      }
      return this.settings.mobile_image;
    }
  },
  methods: {
    getWindowWidth(event) {
        this.windowWidth = document.documentElement.clientWidth;
      },

      getWindowHeight(event) {
        this.windowHeight = document.documentElement.clientHeight;
      }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
    window.removeEventListener('resize', this.getWindowHeight);
  }
};

</script>
