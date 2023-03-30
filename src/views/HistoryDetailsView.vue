<template>
    <body class="bg-[#261918] min-h-screen">
        <header class="bg-[#A62C21] w-full flex items-center justify-between py-4 mb-8">
            <a href="/clienthome">
                <img class="ml-4 pb-1 sm:w-32 sm:h-16 w-30 h-12 object-contain" src="../assets/img/logo-text.png" alt="logo">
            </a>
        </header> <!--header-->

        <div class="flex items-center w-full mb-3">
            <div>
                <a href="javascript:history.back()">
                    <img class="ml-4 sm:w-12 sm:h-12 w-8 h-8 object-contain" src="../assets/img/back-button.png" alt="back-button">
                </a>
            </div> <!--back-butoon-->
            
            <div class="ml-7">
                <h1 class="text-white font-bold sm:text-2xl text-xl"> Histórico </h1>
            </div> <!--Text-->
        </div>

        <div class="flex items-center justify-center mx-auto mb-12">
            <hr class="w-11/12 items-center">
        </div> <!--bar-->

        <!-- CARD -->
        <div class="bg-[#A62C21] sm:w-11/12 sm:h-[300px] w-[450px] h-[150px] grid grid-cols-4 rounded-[20px] mx-auto">
            <div class="flex col-span-1 text-white font-medium items-center">
                <div class="flex flex-col items-center justify-center ml-7 sm:mr-0 mr-4">
                    <img class="rounded-[20px] mb-3 sm:w-[200px] sm:h-[150px]" :src="this.$route.params.imgSrc" alt="Imagem do Restaurante">
                    <h2 class="text-white font-bold text-center">{{ this.$route.params.name }}</h2>
                    <h3 class="text-gray-400">Localização</h3>
                </div>
                
            </div>
            
            
            <div class="flex col-span-1 text-white">
                <div class="flex flex-col ml-7 sm:mr-0 mr-4 mt-14">
                    <h2 class="text-black font-bold">ID: #{{ this.$route.params.id }}</h2>
                    <h4 class="text-black mb-3">{{ this.$route.params.date }}</h4>
  
                    <span class="text-white sm:text-[17px] text-[12px] mb-12">{{ dish }}
                        {{ this.$route.params.items.join(', ') }}
                    </span>

                    <h2 class="text-gray-400">Entregue em:</h2>
                    <h3> Rua 31 nº 12, jardim baixo</h3> <!--PEgar esses dados depois-->
                </div>
            </div>

            <div class="flex col-span-1 text-white">
            </div>

            <div class="flex col-span-1 text-white mr-2">
                <div class="flex flex-col ml-7 sm:mr-0 mr-4 mt-10">
                    <div v-for="(dish, index) in this.$route.params.items" :key="index">
                        <span class="text-white sm:text-[17px] text-[12px] mb-1">{{ dish }}</span>
                        <span class="ml-10">R$ {{ this.$route.params.price }}</span>
                        <!-- <p class="text-white sm:text-[17px] text-[12px] mb-1">{{ dish }}            ;R$ {{ this.$route.params.price }}</p> -->
                    </div>

                    <h2>Taxa de entrega: (PEGAR OS DADOS)</h2>

                    <hr class="text-center mr-3 mb-2">

                    <h1 class="ml-auto mr-3 text-3xl font-bold mb-5">R$ {{ this.$route.params.price }} ({{ this.$route.params.form_pay }})</h1>


                    <button class="bg-[#F26938] rounded-[25px] text-2xl font-bold p-3">Pedir novamente</button>
                </div>
            </div>
        </div>
    </body>
</template>


<script>
    export default {
        data() {
            return {
            }
        },
    }
</script>