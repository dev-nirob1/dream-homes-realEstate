<script setup>
import StatCard from '../Components/Widget/StatCard.vue'
import { ref } from 'vue'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { Bar, Line } from 'vue-chartjs';

ChartJS.register(Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale)


// stats data
const stats = ref([
  {
    id: 1,
    title: 'Total Users',
    value: 1280,
    icon: 'fa-solid fa-users',
    change: '+4.5%',
    color: '#4f46e5', // indigo
  },
  {
    id: 2,
    title: 'Total Properties',
    value: 356,
    icon: 'fa-solid fa-building',
    change: '+2.1%',
    color: '#10b981', // green
  },
  {
    id: 3,
    title: 'Total Messages',
    value: 87,
    icon: 'fa-solid fa-envelope',
    change: '+8.3%',
    color: '#f59e0b', // amber
  },
  {
    id: 4,
    title: 'Pending Approvals',
    value: 9,
    icon: 'fa-solid fa-hourglass-half',
    change: '-1.7%',
    color: '#ef4444', // red
  },
])
  // added properties data
const propertyGrowthData = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: [
    {
      label: 'Properties Added',
      data: [5, 8, 6, 9, 11, 14, 10, 7, 12, 16, 9, 13],
      backgroundColor: '#4f46e5',
      borderRadius: 5,
    },
  ],
}

//message recieved
const messageRecieved = {
  labels: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ],
  datasets: [
    {
      label: 'Messages Received',
      data: [12, 18, 10, 25, 20, 28, 32, 30, 26, 35, 38, 42],
      borderColor: '#4f46e5',
      backgroundColor: 'rgba(79, 70, 229, 0.1)',
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointBackgroundColor: '#4f46e5',
    },
  ],
}
</script>

<template>
  <div class="dashboard-overview">
    <div class="medium-2 large-4 gap-2">
      <StatCard v-for="stat in stats" :key="stat.id" :stat="stat" />
    </div>

    <div class="medium-2 gap-2">
      <div class="bar-chart">
        <Bar :data="propertyGrowthData" />
      </div>
      <div class="bar-chart">
        <Bar :data="messageRecieved" :options="{}" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard-overview {
  padding: 2rem 0;
}

.bar-chart,
.line-chart {
  margin: 3rem 0;
  height: 400px;
  width: 100%;
}
</style>
