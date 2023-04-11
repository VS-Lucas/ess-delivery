<template>
    <div class="bg-[#261918] h-screen">
        <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <div>
          <img class="w-1/2 mx-auto" src="../assets/logo.png" alt="Forra Bucho" />
        </div>
        <div class="mt-8 space-y-6 bg-[#A62C21] p-5 rounded-lg">
            <h3 class="text-center text-2xl	text-white">
                Recuperar senha 
            </h3>

            <div class="text-white text-center">
                <p>
                  Sua nova senha é: {{ this.password }}
                </p>
            </div>
  
          <div>
            <button @click="toLogin()" type="submit" class="group relative flex w-full justify-center rounded-md bg-[#9DBF69] py-2 px-3 text-sm font-semibold text-white hover:bg-[#c9e3a1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>
  
  <script>
    export default {
        name: 'recoverySent',
        data(){
          return{
            password: '',
          }
        },
        created() {
          const password = this.$route.params.password;
          this.password = password;
        }, 
        methods: {
          toLogin(){
            this.$router.push({
              path: '/login'
            })
          }
        },
    }
  </script>