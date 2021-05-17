<template>
  <ul class="mx-auto">
    <li>
      <div class="w-60 rounded-lg bg-gray-100 h-60 overflow-hidden relative">
        <img
          :src="product.image"
          alt=""
          class="group-hover:opacity-75 object-cover h-full w-full"
        />
        <div class="absolute bg-gray-900 w-full bg-opacity-75 bottom-0">
          <span class="text-white block text-center">{{ product.name }}</span>
          <span class="text-white block text-center"
            >${{ product.price }}.00000</span
          >
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['product'],
}
</script>
