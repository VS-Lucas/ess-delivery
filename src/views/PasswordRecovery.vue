<template>
  <div class="bg-[#261918] h-screen overflow-hidden">
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <div>
          <img class="w-1/2 mx-auto" src="../assets/logo.png" alt="Forra Bucho" />
        </div>
        <form @submit.prevent="sendEmail($event)" class="mt-5 space-y-6 bg-[#A62C21] p-5 rounded-lg overflow-hidden" action="#" method="POST">
            <p class="text-center text-2xl	text-white font-bold">
                Recuperar senha
            </p>
          <input type="hidden" name="remember" value="true" />
          <div class="-space-y-px rounded-md shadow-sm">
            <div>
              <label for="email-adress" class="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autocomplete="off" v-model='email' required="" class="bg-[#CA7557] relative block w-full rounded border-0 py-1.5 text-gray-900 placeholder:text-[#83271F] focus:z-10  sm:text-sm sm:leading-6" placeholder="E-mail address"/>
            </div>
          </div>
          <div v-if="!found" @mousemove="mouseCheck()" class="flex bg-[#83271F] rounded w-full justify-center">
            <p class="text-white text-center font-bold text-[13px] p-1">
              E-mail não encontrado
            </p>
          </div>
          <div>
            <button type="submit" class="group relative flex w-full justify-center rounded-md bg-[#9DBF69] py-2 px-3 text-sm font-semibold text-white hover:bg-[#c9e3a1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              ENVIAR
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  
<script>
  import axios from 'axios';

  export default {
    data(){
      return{
        email: '',
        found: Boolean,
      }
    },
    methods: {
      async sendEmail(){
        const response = await axios.post('http://localhost:3000/password-recovery', {
          email: this.email,
        });
        this.found = response.data.found;
        if (this.found){
          this.$router.push('/recovery');
        }
      },
      mouseCheck(){
        this.found = Boolean;
      }
    }
  }
</script>