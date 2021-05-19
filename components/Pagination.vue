<template>
  <div>
    <div id="vue-counter" class="p-3 text-center">
      <h3>pageNumber: {{ pageNumber }}</h3>
      <span v-for="(item, index) in new Array(3)" :key="index">
        <button
          class="p-1 m-1 rounded cursor-pointer text-base bg-white w-6"
          @click="handleClicks"
        >
          {{ index + 1 }}
        </button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNumber: 1,
    }
  },
  methods: {
    handleClicks() {
      this.pageNumber++
      if (this.pageNumber > 3) {
        this.pageNumber = 1
      }
      this.$store.dispatch('getPagination', this.pageNumber)
    },
  },
}
</script>
