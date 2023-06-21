<template>
  <tr class="w-full">
    <td id="locationText">{{ location }}</td>
    <td id="timeText">{{ time }}</td>
  </tr>
</template>

<script>
export default {
  data() {
    return {
      location: '',
      time: ''
    };
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
  methods: {
    updateTime() {
      this.time = new Date().toLocaleString();
    }
  }
};
</script>
