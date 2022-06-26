export const imageBorderMixin = {
    data() {
      return {
        showBorder: false // set showBorder to false
      }
    },
    methods: {
      toggleBorder() {
        return this.showBorder = !this.showBorder // set showBorder to false or true on toggle
      }
    }
  } 