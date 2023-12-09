//mixin component

export const ImageBorderMixin = {
    data() {
      return {
        hover: false,
      };
    },
    computed: {
      borderStyle() {
        return this.hover == true ? '8px solid orange' : 'none';
      },
    },
    methods: {
      toggleBorder() {
        this.hover = !this.hover;
      },
    },
  };