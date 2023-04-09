<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
</style>

<template>

    <body class="bg-[#261918] h-screen" style="font-family: Montserrat;">
        
        <header>

           <NavBar/>

           <div class="flex items-center w-full pb-3 pt-[7rem]">
                <div>
                    <a href="javascript:history.back()">
                        <img class="ml-14 sm:w-12 sm:h-12 w-8 object-contain" src="../assets/img/back-button.png" alt="back-button">
                    </a>
                </div>
                
                <div class="pl-4">
                    <h1 class="text-white font-bold sm:text-2xl text-xl"> Pedido #{{ this.$route.params.orderId }} - {{ this.$route.params.clientName }}</h1>
                </div>
            </div>

            <div class="flex items-center justify-center mx-auto pb-8">
                <hr class="w-11/12 items-center">
            </div>

        </header>

        <!-- CARD -->
        <div :style="{ height: this.height + 'px' }" class="bg-[#A62C21] sm:w-11/12 w-[450px] h-[300px] grid grid-cols-3 rounded-[20px] mx-auto">
            
            <!-- <div class="flex col-span-1 text-white font-medium items-center">
                <div class="flex flex-col items-center justify-center ml-7 sm:mr-0 mr-4">
                    <img class="rounded-[20px] mb-3 sm:w-[200px] sm:h-[150px]" src="https://bodedono.com.br/wp-content/uploads/2020/06/LOGO-1.png" alt="Imagem do Restaurante">
                    <h2 class="text-white font-bold text-center">Bode do nô</h2>
                </div>
            </div> -->
            
            
            <div class="flex col-span-1 text-white">
                <div class="flex flex-col ml-7 sm:mr-0 p-4 ">
                    <h2 style="font-size: 20px; font-weight: 800;">Novo pedido</h2>

                    <p style="font-size: 15px; font-weight: 400;"><span style="font-weight: 600;">Cliente:</span> {{ this.$route.params.clientName }}</p>
                    <p class="pb-1" style="font-size: 15px; font-weight: 400;"><span style="font-weight: 600;">ID do pedido:</span> #{{ this.$route.params.orderId }}</p>

                    <p style="font-size: 15px; font-weight: 400;"><span style="font-weight: 600;">Endereço de entrega:</span> #{{ this.$route.params.address }}</p>

                    <!-- <h2 class="text-[#261918] font-bold">ID: #{{ this.$route.params.id }}</h2>
                    <h4 class="text-[#261918] mb-3">{{ this.$route.params.date }}</h4>
  
                    <span class="text-white sm:text-[17px] text-[12px] mb-12">
                        {{ this.$route.params.items.join(', ') }}
                    </span>

                    <h2 class="text-gray-400">Entregue em:</h2>
                    <h3> {{this.address.rua}}, Nº {{this.address.numero}}, {{this.address.bairro}}</h3> -->
                </div>
            </div>

            <!-- <div class="flex col-span-2 text-white mr-2 ml-10">
                <div class="grid grid-cols-2 mt-20">
                    <div class="col-span-1 mt-5">
                        <div v-for="(dish, index) in this.$route.params.items" :key="index">
                            <span class="text-white sm:text-[17px] text-[12px] mb-1">{{ dish }}</span>
                        </div>
                    </div>
                    
                    <div class="relative col-span-1 mt-5 text-right">
                        <div v-for="(price, index) in this.$route.params.prices" :key="index">
                            <span class="text-white sm:text-[17px] text-[12px] mb-1">{{ price }}</span>
                        </div>
                        
                        <hr class="text-center mr-3 mb-2 w-full">
                        <h1 class=" ml-auto mr-3 text-3xl font-bold mb-5">R$ {{ this.$route.params.total_price }} <br>({{ this.$route.params.form_pay }})</h1> 
                        <button class="bg-[#F26938] rounded-[25px] text-2xl font-bold p-3 absolute bottom-7 right-0">Pedir novamente</button>
                    </div>
                </div>
            </div> -->
            
        </div>

        <footer class="w-full bg-[#261918] h-20"></footer>

    </body>

</template>


<script>

import NavBar from '@/components/NavBar.vue';

    export default {
        name: 'NotificationDetails',
        props: {
            orderId: String,
            clientName: String,
            address: Object
        },
        data() {
            return {
                height: 300,
                // address: {},
            }
        },
        components: {
            NavBar
        },
        methods: {
            // getStatus(key, id, orders) {
            //     console.log(orders[key][id]['status']);
            //     return orders[key][id]['status'];
            // },
            // getAddress(key, id, orders){
            //     return orders[key][id]['endereço'];
            // },
            // get_items(key, id, orders) {
            //     // id
            //     console.log('to aq')
            //     var keys = Object.keys(orders[key][id]['pratos']);
            //     console.log(keys);
            //     var items = [];
            //     keys.forEach(ky =>{
            //         items.push(orders[key][id]['pratos'][ky].nome);
            //     });
            //     console.log('to aq em items' + items)
            //     return items;
            // },
            // get_total_price(key, id, orders) {
            //     var keys = Object.keys(orders[key][id]['pratos']);
            //     var price = 0;
            //     keys.forEach(ky =>{
            //         price += parseFloat(orders[key][id]['pratos'][ky].preco.replace(',', '.'));
            //     });
            //     return `${price.toFixed(2)}`;
            // },
        }
    }
</script>