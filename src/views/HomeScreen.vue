<template>
    <div class="bg-[#261918] bg-cover h-screen overflow-hidden">
        <div v-if="ok" class="fixed right-10 top-5 ">
            <div class="bg-[#A62C21] sm:w-[17rem] sm:h-[10rem] w-[13rem] h-[8rem] rounded-[20px] flex flex-col items-center justify-center">
                <h1 class="font-bold text-white">Bem-vindo</h1>
                <p class="text-white">{{ this.name }}</p>
            </div>
        </div>

        <div class="flex min-h-full items-center justify-center px-4 sm:px-6 lg:px-8">
            <div class="w-full max-w-md space-y-8">
                <div class="image-logo">
                    <img class="w-1/2 mx-auto" src="../assets/img/logo.png" alt="Forra o Bucho" />
                </div> <!--image-logo-->
                <div class="w-full max-w-md space-y-3 mt-8 bg-[#A62C21] p-3 rounded-[20px]">
                   <h3 class="text-center text-gray-50 ">Qual a forma de acesso à plataforma?</h3>
                    <div>
                        <button @click='goToLoginRestaurant()' type="submit" class="group relative flex w-full justify-center rounded-[10px] bg-[#83271F] py-2 px-3 text-sm font-semibold text-white hover:bg-[#9DBF69] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            </span>
                            Restaurante
                        </button>
                    </div><!--restaurante-->
    
                    <div>
                        <button @click="goToClientHomePage()" type="submit" class="group relative flex w-full justify-center rounded-[10px] bg-[#83271F] py-2 px-3 text-sm font-semibold text-white hover:bg-[#9DBF69] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            </span>
                            Cliente
                        </button>
                    </div><!--cliente-->
                </div> <!--card-->
            </div>


        </div><!--div-center-->


        
    </div>
    </template>
    
<script>
    import axios from "axios"

    export default {
        data() {
            return {
                name: '',
                ok: false,
            }
        },
        methods: {
            goToLoginRestaurant() {
                this.$router.push('/login');
            },
            async goToClientHomePage() {

                await axios.get('http://localhost:3000/client-login')
                .then((res)  => {
                    console.log(res.data);
                    this.name = res.data;
                }).catch((err) => {
                    console.log(err.message);
                });
                this.ok = true;
                setTimeout(() => {
                    this.$router.push('/clienthome');
                    this.ok = false;
                }, 2000); 
            }
        }
    }
</script>