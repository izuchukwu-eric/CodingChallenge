<template>
  <div
    class="
      grid
      gap-y-2 gap-x-0
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-2
      md:gap-
      lg:grid-cols-4
    "
  >
    <product-card
      v-for="product in products.data.data"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from './ProductCard'
export default {
  components: {
    ProductCard,
  },

  computed: {
    products() {
      return this.$store.state.products
    },
  },

  mounted() {
    this.$store.dispatch('getProducts')
  },
}
</script>
