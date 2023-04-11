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
        <div class="text-center">
            <div class="inline-block bg-[#A62C21] sm:w-11/12 rounded-[20px] mx-auto">
                
                <div class="grid grid-cols-3 gap-2 text-start">
                    <div class="flex col-start-1 col-end-1 text-white">
                        <div class="flex flex-col align-middle p-4 ml-2">
                            <div>
                                <h2 class="pb-4" style="font-size: 24px; font-weight: 800;">Novo pedido</h2>

                                <p style="font-size: 16px; font-weight: 400;"><span style="font-weight: 600; font-size: 18px;">Cliente:</span> {{ this.$route.params.clientName }}</p>
                                <p style="font-size: 16px; font-weight: 400;"><span style="font-weight: 600; font-size: 18px;">Data:</span> {{ this.date }}</p>
                                <p class="pb-4" style="font-size: 16px; font-weight: 400;"><span style="font-weight: 600; font-size: 18px;">ID do pedido:</span> #{{ this.$route.params.orderId }}</p>

                                <p style="font-size: 16px; font-weight: 600;"><span style="font-weight: 600; font-size: 18px;">Endereço de entrega:</span></p>
                                
                                <p style="font-size: 16px; font-weight: 400;">{{ this.address.rua }}, {{ this.address.numero }} - {{ this.address.complemento }}</p>
                                <p style="font-size: 16px; font-weight: 400;">CEP: {{ this.address.cep }}</p>
                                <p style="font-size: 16px; font-weight: 400;">{{ this.address.bairro }}</p>

                            </div>

                        </div>
                    </div>

                    <div class="flex col-start-2 col-end-2 text-white">
                        <div class="flex flex-col align-middle p-4 ml-2">
                            <div>
                                <h2 class="pb-4" style="font-size: 24px; font-weight: 800;">Itens:</h2>

                                <!-- <p style="font-size: 16px; font-weight: 400;"><span style="font-weight: 600; font-size: 18px;">Cliente:</span> {{ this.$route.params.clientName }}</p>
                                <p class="pb-4" style="font-size: 16px; font-weight: 400;"><span style="font-weight: 600; font-size: 18px;">ID do pedido:</span> #{{ this.$route.params.orderId }}</p>

                                <p style="font-size: 16px; font-weight: 600;"><span style="font-weight: 600; font-size: 18px;">Endereço de entrega:</span></p> -->
                                
                                
                                
                                <!-- <div class="flex flex-col align-bottom">
                                    <p style="font-size: 16px; font-weight: 400;">Avenida Boa Viagem, 546</p>
                                    <p style="font-size: 16px; font-weight: 400;">Boa Viagem</p>
                                    <p style="font-size: 16px; font-weight: 400;">Recife, PE</p>
                                </div> -->
                            </div>

                            <!-- <h2 class="text-[#261918] font-bold">ID: #{{ this.$route.params.id }}</h2>
                            <h4 class="text-[#261918] mb-3">{{ this.$route.params.date }}</h4>
        
                            <span class="text-white sm:text-[17px] text-[12px] mb-12">
                                {{ this.$route.params.items.join(', ') }}
                            </span>

                            <h2 class="text-gray-400">Entregue em:</h2>
                            <h3> {{this.address.rua}}, Nº {{this.address.numero}}, {{this.address.bairro}}</h3> -->
                        </div>
                    </div>

                    
                    <div class="inline-flex justify-evenly col-start-3 col-end-3 my-4">

                        <NotificationCancelModal
                            :name="this.$route.params.clientName"
                            :id="this.$route.params.orderId"
                        />

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
                
            </div>
        </div>

        <footer class="w-full bg-[#261918] h-20"></footer>

    </body>

</template>


<script>

import NavBar from '@/components/NavBar.vue';
import NotificationCancelModal from '@/components/NotificationCancelModal.vue';
import axios from "axios";

    export default {
        name: 'NotificationDetails',
        data() {
            return {
                address: {},
                date: ''
            }
        },
        components: {
            NavBar,
            NotificationCancelModal
        },
        mounted() {
            
            axios.get('http://localhost:3000/restaurant-orders')
            .then(res => {
                const orders = res.data.pedido;
                console.log(res.data.pedido)
                this.address = this.getAddress(this.$route.params.clientName, this.$route.params.orderId, orders)
                this.date = this.getDate(this.$route.params.clientName, this.$route.params.orderId, orders)
            })
            .catch(error => {
                console.log(error.message);
            });
        },
        methods: {
            // async accept() {
            //     this.status = 'Confirmado'
            // },
            // async deny() {
            //     this.status = 'Cancelado'
            // }
            // getStatus(key, id, orders) {
            //     console.log(orders[key][id]['status']);
            //     return orders[key][id]['status'];
            // },
            getDate(key, id, orders) {
                return orders[key][id]['data'];
            },
            getAddress(key, id, orders){
                return orders[key][id]['endereço'];
            }
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