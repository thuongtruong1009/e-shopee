<template>
  <div class="calendar light">
    <div class="calendar_plan">
      <div class="cl_plan">
        <div class="cl_title">
          Today
        </div>
        <div class="cl_copy">
          22nd  April  2018
        </div>
        <div class="cl_add">
          <i class="fas fa-plus" />
        </div>
      </div>
    </div>
    <div class="calendar_events">
      <p class="ce_title">
        Upcoming Events
      </p>
      <div class="event_item">
        <div class="ei_Dot dot_active" />
        <div class="ei_Title">
          10:30 am
        </div>
        <div class="ei_Copy">
          Monday briefing with the team
        </div>
      </div>
      <div class="event_item">
        <div class="ei_Dot" />
        <div class="ei_Title">
          12:00 pm
        </div>
        <div class="ei_Copy">
          Lunch for with the besties
        </div>
      </div>
      <div class="event_item">
        <div class="ei_Dot" />
        <div class="ei_Title">
          13:00 pm
        </div>
        <div class="ei_Copy">
          Meet with the client for final design <br> @foofinder
        </div>
      </div>
      <div class="event_item">
        <div class="ei_Dot" />
        <div class="ei_Title">
          14:30 am
        </div>
        <div class="ei_Copy">
          Plan event night to inspire students
        </div>
      </div>
      <div class="event_item">
        <div class="ei_Dot" />
        <div class="ei_Title">
          15:30 am
        </div>
        <div class="ei_Copy">
          Add some more events to the calendar
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
 .light {
    background-color: #fff;
    border-radius: 1rem;
}
.calendar {
    width: 20rem;
    box-shadow: 0px 0px 35px -16px rgba(0, 0, 0, 0.75);
    font-family: 'Roboto', sans-serif;
    padding: 20px 30px;
    color: #363b41;
    display: inline-block;
}
.header_copy {
    color: #a39d9e;
    font-size: 20px;
}
.calendar_plan {
    margin: 10px 0 20px;
}
.cl_plan {
    width: 100%;
    height: 5rem;
    background-image: linear-gradient(-222deg, #ff8494, #ffa9b7);
    box-shadow: 0px 0px 52px -18px rgba(0, 0, 0, 0.75);
    padding: 5px;
    color: #fff;
    border-radius: 1rem;
}
.cl_copy {
    font-size: 20px;
    margin: 20px 0;
    display: inline-block;
}
.cl_add {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    margin: 0 0 0 65px;
    color: #c2c2c2;
    padding: 11px 13px;
}
.calendar_events {
    color: #a39d9e;
}
.ce_title {
    font-size: 14px;
}
.event_item {
    margin: 18px 0;
    padding: 5px;
    cursor: pointer;
}
.event_item:hover {
    background-image: linear-gradient(-222deg, #ff8494, #ffa9b7);
    box-shadow: 0px 0px 52px -18px rgba(0, 0, 0, 0.75);
}
.event_item:hover .ei_Dot {
    background-color: #fff;
}
.event_item:hover .ei_Copy, .event_item:hover .ei_Title {
    color: #fff;
}
.ei_Dot, .ei_Title {
    display: inline-block;
}
.ei_Dot {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: #a39d9e;
    box-shadow: 0px 0px 52px -18px rgba(0, 0, 0, 0.75);
}
.dot_active {
    background-color: #ff8494;
}
.ei_Title {
    margin-left: 10px;
    color: #363b41;
}
.ei_Copy {
    font-size: 12px;
    margin-left: 27px;
}
.dark {
    background-image: linear-gradient(-222deg, #646464, #454545);
    color: #fff;
}
.dark .header_title, .dark .ei_Title, .dark .ce_title {
    color: #fff;
}

</style>
