<template>
    <div class="bg-[#261918] bg-cover h-screen overflow-hidden">    
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
                        <button type="submit" class="group relative flex w-full justify-center rounded-[10px] bg-[#83271F] py-2 px-3 text-sm font-semibold text-white hover:bg-[#9DBF69] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
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
        export default {
            methods: {
                goToLoginRestaurant() {
                    this.$router.push('/login');
                }
            }
        }
    </script>