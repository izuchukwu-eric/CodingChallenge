<template>
  <div>
    <p class="flex justify-center text-2xl text-red-500 mx-auto">Products</p>
    <div class="flex justify-center p-3">
      <div class="relative inline-flex">
        <svg
          class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 412 232"
        >
          <path
            d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
            fill="#648299"
            fill-rule="nonzero"
          />
        </svg>
        <select
          v-model="selectedCategory"
          class="
            border border-gray-300
            rounded-full
            text-gray-600
            h-10
            pl-32
            pr-32
            bg-white
            cursor-pointer
            hover:border-gray-400
            focus:outline-none
            appearance-none
          "
          @change="sortBy"
        >
          <option disabled value="">Select category</option>
          <option value="Dairy">Dairy</option>
          <option value="Cheese">Cheese</option>
          <option value="Specialties">Specialties</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: '',
    }
  },

  methods: {
    sortBy() {
      this.$store.dispatch('getCategory', this.selectedCategory)
    },
  },
}
</script>
