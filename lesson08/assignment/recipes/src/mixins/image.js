export default {
    data() {
        return {
            toggle: false
        }
    },
    
    methods: {
        toggleBorder() {
            this.toggle = !this.toggle;
        }
    }
}