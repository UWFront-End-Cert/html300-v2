export default {
    data() {
        return {
            imageBorderOn: false,
            mainColor: 'transparent',
            alternateColor: '#BF2B61',
            currentColor: this.mainColor
        }
    },

    methods: {
        switchBorderOn() {
            this.imageBorderOn = !this.imageBorderOn;
            if(this.imageBorderOn === false){ this.currentColor = this.mainColor }
            else(this.currentColor = this.alternateColor)
        }
    }
}