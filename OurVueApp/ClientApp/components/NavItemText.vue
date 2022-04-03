<template>
  <div class="nav-item" id="nav-item">
    <router-link v-if="isInternalLink" :to="link.href">
      {{ link.label }}
    </router-link>
    <a v-else :href="link.href">{{ link.label }}</a>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent, computed } from "vue";
import NavItemProps from "@/types/NavItemProps";

export default defineComponent({
  props: {
    link: {
      type: Object as PropType<NavItemProps>,
      required: true,
      default: (): NavItemProps => {
        return {
          label: "",
          href: "",
        };
      },
    },
  },
  setup(props) {
    const isInternalLink = computed<boolean>((): boolean => {
      if (props.link.href.length && props.link.href.includes("http"))
        return false;
      return true;
    });

    return { isInternalLink };
  },
});
</script>

<style lang="scss">
#nav-item {
  &.nav-item {
    padding-left: 1vw;
    padding-right: 1vw;

    a {
      text-decoration: none;
      color: #fff;
      font-weight: normal;
      display: inline-block;
      position: relative;

      &:hover {
        font-weight: bold;
      }

      &:after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #fff;
        transform-origin: bottom center;
        transition: transform 0.15s ease-out;
      }

      &:hover:after {
        transform: scaleX(1);
        transform-origin: bottom center;
      }

      &.router-link-active {
        font-weight: bolder;
      }
    }
  }
}
</style>
