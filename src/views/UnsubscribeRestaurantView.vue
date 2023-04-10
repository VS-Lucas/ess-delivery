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
            <button v-if="!loader" @click="unsubscribe" class="bg-[#99c060] rounded-xl text-white py-2 hover:scale-105 duration-300">Remover cadastro</button>
            
            <button v-if="loader" class="bg-[#99c060] rounded-xl text-white py-5 hover:scale-105 duration-300">
              <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
              </svg>
              Tchau! Obrigado
            </button>
        </div>
        <br> 
        <div v-if="remove_failure" @mousemove="hideText()" class="group flex w-full justify-center rounded-b-lg bg-gray-100 p-1">
          <p class="text-[#83271F] text-[12px] font-bold text-center">O restaurante não pode ser removido com pedido em andamento</p>
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
  data() {
    return {
      remove_failure: false,
      loader: false,
    }
  },
  methods: {
    unsubscribe() {
      this.loader = true;
      axios.delete('http://localhost:3000/unsubscribe')
        .then(response => {
          if (response.data === 'Restaurante com pedidos em andamento') {
            this.loader = false;
            this.remove_failure = true;
          } else if (response.data === 'Exclusão realizada com sucesso.') {
            this.remove_failure = false;
            this.$router.push('/');
          }
        })
        .catch(error => {
          this.loader = false;
          console.error(error)
        })
    },
    hideText() {
      this.remove_failure = false;
    },
  }
}
</script>

