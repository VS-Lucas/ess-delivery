<template>
  <div>
    <div class="bg-gradient-to-b from-primary-red-bg to-primary-red-register">
      <div class="bg-no-repeat bg-fixed md:grid md:grid-cols-7 md:gap-5"
           style="background-image: url('img/food_register_bg.png');
                  background-position: right">
        <div class="md:col-start-2 md:col-span-4 mt-5 md:mt-0">
            <br>
          <form action="#" method="POST">
            <div class="flex justify-center items-center">
              <div class="shadow sm:overflow-hidden sm:rounded-md w-full">
                <div class="space-y-6 bg-gray-50 px-4 py-5 sm:p-6">
                  <br>
                    OLÁ
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script scoped>

export default {
  name: 'RegisterView',
  props: {
    msg: String
  },
}

</script>