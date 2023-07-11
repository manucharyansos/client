<template>
  <div>
    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      class="fixed bg-gray-100 top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="flex flex-col gap-3 mt-14 w-1/2 bg-gray-600 p-10 ">
        <div class="flex flex-col gap-4 bg-gray-700 p-4 w-3/4 mx-auto overflow-y-auto" v-for="review of product.reviews">
          <!-- Profile and Rating -->
          <div class="flex justify justify-between">
            <div class="flex gap-2">
              <div class="w-7 h-7 text-center rounded-full bg-red-500">
                <img :src="`http://127.0.0.1:8000/user-images/${ review.user.image }`" alt="">
              </div>
              <span>{{ review.user.name }}</span>
            </div>
            <div class="flex p-1 gap-1 text-orange-300">
<!--              <ion-icon name="star"></ion-icon>-->
<!--              <ion-icon name="star"></ion-icon>-->
<!--              <ion-icon name="star"></ion-icon>-->
<!--              <ion-icon name="star"></ion-icon>-->
<!--              <ion-icon name="star-half"></ion-icon>-->
            </div>
          </div>

          <div>
            {{ review.comment }}
          </div>

          <div class="flex justify-between">
            <span>{{ review.created_at}}</span>
            <button class="p-1 px-2 bg-gray-900 hover:bg-gray-950 border border-gray-950 bg-opacity-60">
<!--              <ion-icon name="share-outline"></ion-icon> Share-->
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    product: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>
