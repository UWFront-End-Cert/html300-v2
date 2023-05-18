<template>
<main>
    <div class="fluid-image" v-for="(image, i) in images" :key="i">
        <h2> {{ image.name }} </h2>
        <img
            :src="image.url"
            :alt="image.name"
            class="img-fluid img-thumbnail"
        />
    </div>
</main>
</template>


<script>
export default {
    name: 'FluidImage',
    data() {
        return {
            images: [
                    
                {
                    name:"Secrets & Lies (1996)",
                    url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcriterion-production.s3.amazonaws.com%2Fcarousel-files%2F7a6bf951b45a8748cd9ed37e3cd728f8.jpeg&f=1&nofb=1&ipt=d86398199591e62244dc6a6253f4c8f45f7bec62e31a504d0888acf100669c9c&ipo=images"
                },
                {   
                    name:"The Duke of Burgundy (2014)",
                    url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcultmoviecultdotcom.files.wordpress.com%2F2020%2F09%2Fduke-4.jpg&f=1&nofb=1&ipt=a24db47fcb2d27dc56acfd7ccb553486a0154c2cd9bc15d7f2181202b8ba61a1&ipo=images"
                },
                {   
                    name:"Bacurau (2019)",
                    url:"https://external-preview.redd.it/G4Qt4DtItShXlKFLRZ6Ag7h_qYz876M5IfDgTtpNZ2I.jpg?auto=webp&s=de2ac34fc1133058ccbc6a4496a2ec2e6a124f87"
                },
                {
                    name:"Possession (1981)",
                    url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd2j1wkp1bavyfs.cloudfront.net%2Fwp-content%2Fuploads%2F2018%2F07%2F01022343%2F3861231.jpg%3Fq%3D50&f=1&nofb=1&ipt=b7502bcd7be4dfab0d6f1a42af54130edbb580f3337805547848d36e4d2427d8&ipo=images"
                }
            ]
            
        }
    }
}
</script>



<style scoped>

.fluid-image {
    padding-top: 5rem;
}
  
</style>