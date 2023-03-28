<template>
  <div class="bg-[#261918] h-screen overflow-hidden">
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <div>
          <img class="w-1/2 mx-auto" src="../assets/logo.png" alt="Forra Bucho" />
        </div>
        <form class="mt-5 space-y-6 bg-[#A62C21] p-5 rounded-lg overflow-hidden" action="#" method="POST">
            <h3 class="text-center text-2xl	text-white">
                Recuperar senha
            </h3>
          <input type="hidden" name="remember" value="true" />
          <div class="-space-y-px rounded-md shadow-sm">
            <div>
              <label for="email-adress" class="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autocomplete="off" v-model='email' required="" class="bg-[#CA7557] relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 placeholder:text-[#83271F] focus:z-10  sm:text-sm sm:leading-6" placeholder="E-mail address"/>
            </div>
          </div>
          <div>
            <button @click="sendEmail()" type="button" class="group relative flex w-full justify-center rounded-md bg-[#9DBF69] py-2 px-3 text-sm font-semibold text-white hover:bg-[#c9e3a1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
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
      }
    },
    method: {
      async sendEmail(){
        try{
          const response = await axios.post('http://localhost:3000/password-recovery', {
            email: this.email,
          });
          console.log(response.data)
          this.$router.push('/recovery');
        }
        catch(error){
          console.error(error);
        }
      },
    }
}
</script>