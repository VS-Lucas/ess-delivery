<template>
    <section class="bg-[#261918] min-h-screen flex items-center justify-center">
    <!-- login container -->
    <div class="bg-[#A62C21] flex rounded-2xl shadow-lg max-w-5xl p-5 items-center">

      <div class="md:w-1/2 px-8 md:px-10">

        <h2 class="font-bold text-2xl text-center text-white">Tá fazendo besteira, abestado</h2>
        <p class="font-medium text-sm mt-4 text-center text-white">Se há algum problema que possamos resolver, gostaríamos de saber para melhorar a experiência de nossos usuários. Por favor, compartilhe suas preocupações conosco antes de tomar a decisão de se descadastrar.</p>
        <p class="font-medium text-sm mt-4 text-center text-white">Se, no entanto, a sua decisão é irrevogável. Gostaríamos de agradecer pelo tempo em que você esteve conosco e esperamos ter a oportunidade de te ver de volta no futuro.</p>
        
        <br>
        <div class="flex flex-col gap-4">    
            <button @click="unsubscribe" class="bg-[#99c060] rounded-xl text-white py-2 hover:scale-105 duration-300">Remover cadastro</button>
        </div>      

      </div>

      <!-- image -->
      <div class="md:block hidden w-1/2">
          <img class="rounded-2xl h-auto max-h-100 ml-1 mr-1" src="/img/unhappy_woman.jpg">
      </div>

    </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UnsubscribeRestaurantView',
  props: {
    msg: String
  },
  methods: {
    unsubscribe() {
      axios.delete('http://localhost:3000/unsubscribe')
        .then(response => {
          console.log(response.data)
          this.$router.push('/')
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>

