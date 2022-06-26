<template>
  <!-- Container -->
  <b-container class="images">
    <h2 class="pt-5 display-4 text-muted">{{ header }}</h2>
    <b-row>
      <!-- Loop thru an array of images and dynamically generate cards with content and images  -->
      <b-col>
        <b-card-group>
         <ImgCard
        v-for="(imgList, index) in images"
        :key="index"
        :imgList="imgList"
        :src="imgList.url"
        :alt="imgList.alt"
        :title="imgList.title"
        :text="imgList.text"
      />
        </b-card-group>
      </b-col>
    </b-row>
  </b-container>
  <!-- Container End -->
</template>

<!-- All content is from variables in the <script> section of the .vue file. -->
<script>
import ImgCard from "../components/ImgCard";
export default {
  name: "Images",
  components: { ImgCard },
  data: () => {
    return {
      header: "What Certain Excercises Do!",
      images: [
        {
          title: "Cardio",
          text:
            "Cardio helps increase the strength of your heart and lungs. Cardio can help you improve your endurance during workouts as well.",
          url:
            "https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          alt: "Image description",
        },
        {
          title: "Calisthenics",
          text:
            "The major advantage of calisthenics or any bodyweight type of routine for that matter, is that you will need minimal or no gym equipment to do it. You can do it at home, in the park or pretty much anywhere else as long as you have at least a pull-up bar.",
          url:
            "https://images.unsplash.com/photo-1616803689943-5601631c7fec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          alt: "Image description",
        },
        {
          title: "Yoga",
          text:
            "Yoga can increase your flexibility, improve your balance, and decrease your cholesterol.",
          url:
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          alt: "Image description",
        },
        {
          title: "Machine Weights",
          text:
            "Machines may offer more control and safety. They can also isolate a specific muscle you're trying to work better.",
          url:
            "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          alt: "Image description",
        },
        {
          title: "Free Weights",
          text:
            "Free weights require your stabilizer muscles to work harder than they would on machines. They allow for more creativity and range of motion.",
          url:
            "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          alt: "Image description",
        },
      ],
    };
  },
};
</script>

<!--Styling with scss -->
<style scoped lang="scss">
.images {
  margin-top: 3.75rem;
}
</style>

