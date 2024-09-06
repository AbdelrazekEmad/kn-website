<template>
  <section class="courses py-5">
    <div class="container">
      <SectionTitle title="FEATURED COURSES" color="#101010" />

      <div class="row g-0">
        <div class="col-12 col-xl-4 col-md-6" v-for="course in coursesList" :key="course.id">
          <a href="blog-details" class="courses__box">
            <div class="courses__img-container">
              <img class="courses__img" :src="course.img" :alt="course.name" :title="course.name">

            </div>

            <h3 class="courses__title">
              {{ course.name }}
            </h3>

            <p class="courses__text">
              {{ course.text }}
            </p>

            <MainButton text="Free Trail" :link="course.link" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MainButton from './MainButton.vue'
import SectionTitle from './SectionTitle.vue'

export default {
  name: "CoursesSection",
  components: {
    SectionTitle,
    MainButton
  },
  data() {
    return {
      coursesList: [
        {
          id: 1,
          name: 'lorem ipsum',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod',
          img: 'https://placehold.co/900x600',
          link: 'test'
        },
        {
          id: 2,
          name: 'lorem ipsum',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod',
          img: 'https://placehold.co/900x600',
          link: 'test'
        },
        {
          id: 3,
          name: 'lorem ipsum',
          text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod',
          img: 'https://placehold.co/900x600',
          link: 'test'
        },
        {
          id: 4,
          name: 'lorem ipsum',
          text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod',
          img: 'https://placehold.co/900x600',
          link: 'test'
        },
        {
          id: 5,
          name: 'lorem ipsum',
          text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod',
          img: 'https://placehold.co/900x600',
          link: 'test'
        },
        {
          id: 6,
          name: 'lorem ipsum',
          text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod',
          img: 'https://placehold.co/900x600',
          link: 'test'
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.courses {
  background-image: url('https://placehold.co/900x600');
  background-size: cover;

  &__box {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    transition: all 0.3s linear;
    padding: 16px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;


    &:hover {
      .courses__img {
        transform: rotate(2deg) scale(1.05);
      }
    }
  }

  &__img-container {
    width: 100%;
    height: 250px;
    overflow: hidden;
  }

  &__img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &__title {
    font-size: 24px;
    font-weight: 500;
    line-height: 1;
    color: var(--text-color);
    font-family: var(--secondary-font);
    margin-bottom: 0;
    text-align: center;
  }

  &__text {
    font-size: 16px;
    margin-bottom: 0;
    color: var(--text-color);
    text-align: center;
  }
}
</style>