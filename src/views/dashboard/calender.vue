<script setup>
import { ScheduleXCalendar } from "@schedule-x/vue";
import { createCalendar, createViewDay, createViewMonthAgenda, createViewMonthGrid, createViewWeek } from "@schedule-x/calendar";
import "@schedule-x/theme-default/dist/index.css";
import { createEventModalPlugin } from "@schedule-x/event-modal";

function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`; // Format as YYYY-MM-DD
}

const eventModal = createEventModalPlugin();
const defaultView = createViewMonthGrid();

const calendarApp = createCalendar({
  selectedDate: getTodayDate(),
  views: [defaultView, createViewMonthAgenda(), createViewWeek(), createViewDay()],
  defaultView: defaultView.name,
  plugins: [eventModal],
  events: [
    {
      id: 1,
      title: "Event 1",
      start: "2024-11-05",
      end: "2024-11-05",
    },
    {
      id: 2,
      title: "Event 2",
      start: "2024-11-05 12:00",
      end: "2024-11-05 13:00",
    },
  ],
});

const closeModal = () => {
  eventModal.close();
};
</script>

<template>
  <div>
    <ScheduleXCalendar :calendar-app="calendarApp">
      <template #eventModal="{ calendarEvent }">
        <div class="event__popup">
          <h2 class="event__popup__title">{{ calendarEvent.title }}</h2>
          <button @click="closeModal">x</button>
        </div>
      </template>
    </ScheduleXCalendar>
  </div>
</template>

<style>
.sx-vue-calendar-wrapper {
  width: 100%;
  max-width: 100vw;
  height: 800px;
  max-height: 90vh;
  --sx-color-primary: var(--dark-main-color);
}
.sx__calendar {
  border: none;
  background: #f9f9f9;
}
.sx__month-grid-day {
  background-color: #ffffff;
  border: 0;
  margin: 8px;
}
.sx__range-heading {
  font-size: 24px;
  font-weight: 700;
  color: #494949;
}
.sx__month-grid-week,
.sx__month-grid-day:not(:last-child) {
  border: 0;
}
.sx__calendar-header .sx__calendar-header-content:first-child {
  flex-grow: 1;
}
.sx__calendar-header .sx__calendar-header-content:first-child .sx__forward-backward-navigation {
  flex-grow: 1;
  order: 3;
  text-align: end;
}

/* next & prev buttons */
.sx__chevron-wrapper {
  background-color: #494949 !important;
  border-radius: 8px;
  margin-inline: 8px;
}
.sx__chevron-wrapper .sx__chevron {
  border-color: #fff;
}

/* Today button in top right corner */
.sx__today-button {
  background: #494949 !important;
  border-radius: 8px;
  color: #fff;
}
/* event popup style */
.event__popup {
  padding: 24px;
  box-shadow: 0px 0px 15px 0px #bebebe;
  border-radius: 8px;
}
.event__popup__title {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 8px;
}
</style>
