<template>
  <div>
    <slot />
    <div class="p-3 text-center">
      <span v-for="(item, index) in new Array(3)" :key="index">
        <button class="p-1 m-1 rounded cursor-pointer text-base bg-white w-6">
          {{ index + 1 }}
        </button>
      </span>
    </div>
  </div>
</template>

<script>
export default {}
</script>
