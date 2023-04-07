<template>
    <section class="bg-[#261918] min-h-screen flex flex-col items-center">
    <!-- login container -->
    <div class="image-logo justify-center py-5">
        <img class="w-1/2 mx-auto" src="../assets/img/logo.png" alt="Forra o Bucho" />
    </div>
    <div class="bg-[#A62C21] flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <!-- form -->
        <div class="md:w-1/2 px-8 md:px-16">
            <div class="py-5">
              <h2 class="font-bold text-2xl text-white">Cadastre-se</h2>
              <p class="text-sm mt-4 text-white">Se você não é um membro, faça seu cadastro facilmente</p>
            </div>

            <div class="flex flex-col gap-4">
                <div class="relative">
                  <input type="email" name="email" v-model="email" required class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-200 bg-[#CA7557] dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#99c060] peer" placeholder=" " />
                  <label for="email" class="absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#99c060] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Email</label>
                </div>
                <div v-if="email_failure" @mousemove="hideText()" class="group flex w-full justify-center rounded-b-lg bg-gray-100 p-1">
                  <p class="text-[#83271F] text-[12px] font-bold text-center">Digite um email válido</p>
                </div>
                <div v-if="input_failure" @mousemove="hideText()" class="group flex w-full justify-center rounded-b-lg bg-gray-100 p-1">
                  <p class="text-[#83271F] text-[12px] font-bold text-center">Preencha todos os campos</p>
                </div>
                <div v-if="login_failure" @mousemove="hideText()" class="group flex w-full justify-center rounded-b-lg bg-gray-100 p-1">
                  <p class="text-[#83271F] text-[12px] font-bold text-center">Email já cadastrado</p>
                </div>  
                <div class="relative">
                  <input type="password" name="password" v-model="password" required class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-200 bg-[#CA7557] dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#99c060] peer" placeholder=" " />
                  <label for="password" class="absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#99c060] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Senha</label>
                </div>  
                <button v-if="!loader" @click="verifyInput" class="bg-[#99c060] rounded-xl text-white py-2 hover:scale-105 duration-300">Continuar cadastro</button>
                <button v-if="loader" class="bg-[#99c060] rounded-xl text-white py-2 hover:scale-105 duration-300">
                    <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                    </svg>
                    Loading...
                </button>
            </div>      

            <div class="mt-6 grid grid-cols-3 items-center text-white">
                <hr class="border-white">
                <p class="text-center text-sm">OU</p>
                <hr class="border-white">
            </div>

            <button class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
                <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                </svg>
                Cadastre-se com Google
            </button>

        </div>

        <!-- image -->
        <div class="md:block hidden w-1/2">
            <img class="rounded-2xl" src="/img/pexels_login.jpg">
        </div>

    </div>
    </section>
</template>

<script>
import axios from 'axios';


export default {
  name: 'RegisterLoginView',
  props: {
    msg: String
  },
  data() {
    return {
        email: '',
        password: '',
        email_failure: false,
        input_failure: false,
        login_failure: false,
        loader: false,
    }
  },
  methods: {
    async submit() {
      try {
        this.loader = true
        this.email = this.email.toLowerCase()
        const response = await axios.post('http://localhost:3000/register-login', {
          email: this.email,
          password: this.password
        });
        console.log(response.data);
        this.$router.push('/register-restaurant');
      } catch (error) {
        this.loader = false;
        this.login_failure = true;
        console.error(error);
      }
    },
    verifyInput() {
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

      this.email_failure = false;
      this.input_failure = false;
      this.login_failure = false;

      if (!this.email || !this.password) {
        this.input_failure = true;
        return;
      }
      
      if (!emailRegex.test(this.email)) {
        this.email_failure = true;
        return;
      }

      this.submit();

    },
    hideText() {
      this.email_failure = false;
      this.input_failure = false;
      this.login_failure = false;
    },
  }
}
</script>
