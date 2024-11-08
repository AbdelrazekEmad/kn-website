<template>
  <div class="calender-view">
    <div class="sidebar">
      <h1 class="intro">
        Welcome👋🏻,<br />
        <span>Mustafa Emad</span>
      </h1>

      <ul class="dashboard-navs">
        <li>
          <router-link
            :to="
              Tr.i18nRoute({
                name: 'dashboard',
              })
            "
          >
            <img src="@/assets/images/calender.svg" alt="" />
            Calender
          </router-link>
        </li>
      </ul>

      <hr class="middle-line" />

      <h3 class="contact-title">Support</h3>
      <div class="contact-button">
        <router-link
          :to="
            Tr.i18nRoute({
              name: 'contact-us-page',
            })
          "
        >
          <img src="@/assets/images/contact-us.svg" alt="" />
          Contact Us
        </router-link>
      </div>
    </div>
    <div class="calender">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Tr from "@/i18n/translation";

export default {
  data() {
    return {
      Tr: Tr,
    };
  },
};
</script>

<style>
.calender-view {
  display: flex;
  gap: 24px;
}
.calender-view .sidebar {
  width: 300px;
  padding-inline: 64px 24px;
  background-color: #f1f1f1;
  padding-top: 32px;
  flex-shrink: 0;
  min-height: 800px;
  border-start-end-radius: 8px;
}
.calender-view .sidebar .intro {
  font-size: 16px;
  color: var(--secondary-color);
  margin-bottom: 40px;

  span {
    font-size: 24px;
    font-weight: 700;
    color: #494949;
  }
}
.calender-view .sidebar .dashboard-navs {
  list-style: none;
  margin: 0;
  padding: 0;
}
.calender-view .sidebar .dashboard-navs li {
  margin-bottom: 16px;
}
.calender-view .sidebar .dashboard-navs li a,
.calender-view .sidebar .contact-button a {
  display: flex;
  align-items: center;
  gap: 16px;
  color: #7e7e7e;
  font-size: 20px;
  font-weight: 400;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
}
.calender-view .sidebar .dashboard-navs li a.router-link-active,
.calender-view .sidebar .dashboard-navs li a:hover,
.calender-view .sidebar .contact-button a:hover {
  padding: 8px;
  background-color: var(--main-color);
  color: #fff;

  img {
    filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);
  }
}
.calender-view .sidebar .middle-line {
  margin-block: 40px;
  background-color: #7e7e7e;
}
.contact-title {
  font-size: 16px;
  font-weight: 500;
  color: #7e7e7e;
  margin-bottom: 24px;
}
.calender-view .calender {
  width: calc(100% - 300px);
  padding-inline-end: 64px;
}
</style>
