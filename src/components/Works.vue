<!-- 经历 -->

<template>
  <div class="content" id="works">
    <ModuleHeader :title="works.header.title" :sub-title="works.header.subtitle" />
    <div
      class="work-div"
      data-aos="fade-in"
      v-for="card in works.cards"
      v-bind:key="card.title + card.subtitle"
    >
      <a-card class="works-card" :bordered="true" style="width: 100%;overflow:hidden;">
        <div class="fork-me" v-if="card.url != ''">
          <a class="fork-me-link" v-bind:href="card.url" target="_blank">
            <span class="fork-me-text">GitHub Address</span>
          </a>
        </div>
        <template slot="title">
          <h2 class="title" v-html="card.title"></h2>
          <span v-if="!!card.subtitle" class="sub-title">{{card.subtitle}}</span>
        </template>
        <!-- <div class="image-div" v-for="image in card.images" v-bind:key="image.url">
                    <img v-if="image.url === 'image1'" src="../assets/works/image1.png">
                    <img v-if="image.url === 'image2'" src="../assets/works/image2.png">
                    <vue-markdown class="md">{{card.md}}</vue-markdown>
        </div>-->
        <a-row type="flex" justify="left" align="top">
          <!-- 头像 -->
          <a-col class="pic">
            <div class="image-out-div">
              <div class="image-div" v-for="image in card.images" v-bind:key="image.url">
                <img
                  data-aos="fade-in"
                  class="avatar image2"
                  draggable="false"
                  v-if="image.url === 'image2'"
                  src="../assets/works/image2.png"
                />
                <img
                  data-aos="fade-in"
                  class="avatar image3"
                  draggable="false"
                  v-if="image.url === 'image3'"
                  src="../assets/works/image3.jpg"
                />
                <img
                  data-aos="fade-in"
                  class="avatar image4"
                  draggable="false"
                  v-if="image.url === 'image4'"
                  src="../assets/works/image4.jpg"
                />
              </div>
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

//小屏幕
@media screen and (max-width: $--screen-sm-min) {
  img {
    overflow: hidden;
    width: 80%;
    height: 80%;
    z-index: -1;
    float: left;
  }
  .md {
    margin-top: 1.5rem;
    width: 100%;
    //float: left;
  }
  .pic {
    width: 100%;
    text-align: center;
  }
  .avatar {
    display: block;
    width: 50%;
    border-radius: 5px;
    text-align: center;
  }
  .image2 {
    width: 100%;
  }
  .image3 .image4 {
    width: 50%;
  }
}

@media screen and (min-width: $--screen-sm-min) {
  img {
    overflow: hidden;
    width: 70%;
    height: 70%;
    z-index: -1;
    //margin: .5rem;
    //float: left;
  }
  .md {
    width: 60%;
  }
  .pic {
    width: 40%;
    text-align: center;
  }
  .avatar {
    display: block;
    border-radius: 5px;
    text-align: center;
  }
  .image-out-div {
    width: 115%;
  }
  .image-div {
    float: left;
  }
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
