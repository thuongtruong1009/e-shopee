<template>
  <div id="chart" />
</template>

<script>
import { Chart } from 'frappe-charts/dist/frappe-charts.min.esm'

const data = {
  labels: ['12am-3am', '3am-6pm', '6am-9am', '9am-12am',
    '12pm-3pm', '3pm-6pm', '6pm-9pm', '9am-12am',
  ],
  datasets: [
    {
      name: 'Some Data',
      type: 'bar',
      values: [25, 40, 30, 35, 8, 52, 17, -4],
    },
    {
      name: 'Another Set',
      type: 'line',
      values: [25, 50, -10, 15, 18, 32, 27, 14],
    },
  ],
},
const chart = new frappe.Chart('#chart', {
  title: 'My Awesome Chart',
  data,
  type: 'axis-mixed',
  height: 250,
  colors: ['#7cd6fd', '#743ee2'],
})

</script>
