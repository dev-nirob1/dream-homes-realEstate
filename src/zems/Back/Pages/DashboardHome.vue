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
  LinearScale
} from 'chart.js';
import { Bar } from 'vue-chartjs';

ChartJS.register(Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale)

const chartData = {
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

</script>

<template>
  <div class="dashboard-overview">
    <div class="medium-2 large-4 gap-2">
      <StatCard v-for="stat in stats" :key="stat.id" :stat="stat" />
    </div>

<div class="medium-2">
      <div class="bar-chart">
      <Bar :data="chartData" />
    </div>
</div>
  </div>
</template>

<style scoped>
.dashboard-overview {
  padding: 2rem;
}

.bar-chart {
  margin: 3rem 0;
  height: 400px;
  width: 100%;
}
</style>
