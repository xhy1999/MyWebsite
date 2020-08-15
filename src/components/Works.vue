<!-- 经历 -->

<template>
  <div class="content" id="works">
    <ModuleHeader :title="works.header.title" :sub-title="works.header.subtitle" />
    <div
      class="work-div"
      data-aos="fade-in"
      v-for="card in works.cards"
      v-bind:key="card.title + card.subtitle">
      <a-card class="works-card" :bordered="true" style="width: 100%;overflow:hidden;">
        <div class="fork-me" v-if="card.url != ''">
            <a class="fork-me-link" v-bind:href="card.url" target="_blank">
                <span class="fork-me-text">GitHub Address</span>
            </a>
        </div>
        <template slot="title">
          <h1 class="title" v-html="card.title"></h1>
          <span v-if="!!card.subtitle" class="sub-title">{{card.subtitle}}</span>
        </template>
        <!-- <div class="image-div" v-for="image in card.images" v-bind:key="image.url">
                    <img v-if="image.url === 'image1'" src="../assets/works/image1.png">
                    <img v-if="image.url === 'image2'" src="../assets/works/image2.png">
                    <vue-markdown class="md">{{card.md}}</vue-markdown>
        </div>-->
        <a-row type="flex" justify="center" align="top">
          <!-- 头像 -->
          <a-col class>
            <div class="image-div" v-for="image in card.images" v-bind:key="image.url">
              <img v-if="image.url === 'image2'" src="../assets/works/image2.png" />
            </div>
          </a-col>
          <!-- 内容 -->
          <a-col class="md">
            <vue-markdown>{{card.md}}</vue-markdown>
          </a-col>
        </a-row>
      </a-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ModuleHeader from "@/components/module/ModuleHeader.vue";
import { Module } from "@/api/user_interface";
// tslint:disable-next-line:no-var-requires
import VueMarkdown from "vue-markdown";

@Component({
  components: {
    ModuleHeader,
    VueMarkdown,
  },
  computed: {
    works(): Module {
      return this.$store.getters.getModule("works");
    },
  },
})
export default class Works extends Vue {}
</script>

<style scoped lang="scss">
@import "../styles/variable";

@media screen and (max-width: $--screen-sm-min) {
  img {
    overflow: hidden;
    width: 90%;
    height: 90%;
    z-index: -1;
    margin: 1rem;
  }
}

@media screen and (min-width: $--screen-sm-min) {
  img {
    overflow: hidden;
    width: 65%;
    height: 65%;
    z-index: -1;
    margin: 1rem;
  }
  .md {
    margin: 1rem;
    margin-left: -3rem;
  }
}

.image-div {
  text-align: center;
}

.work-div {
  margin-top: 2rem;
}

.works-card {
  .title {
    width: 100%;
    overflow: scroll;
    margin: 0;
  }

  .sub-title {
    width: 100%;
    font-size: 1rem;
    display: block;
  }
}

.fork-me {
  position: absolute;
  transform: rotate(45deg);
  top: 20px;
  right: -100px;
  width: 300px;
  height: 60px;
  padding: 5px;
  background: #f17c67;

  .fork-me-link {
    display: block;
    width: 100%;
    height: 50px;
    text-align: center;
    border: white dashed 1px;

    .fork-me-text {
      display: block;
      line-height: 50px;
      color: ghostwhite;
      font-weight: 500;
      font-size: 16px;
    }
  }
}
</style>
