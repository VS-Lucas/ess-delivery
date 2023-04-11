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

        <!-- Pedido a ser confirmado ou recusado (pago) -->
        <div v-if="this.$route.params.status === 'Pagamento'">

            <div class="text-center">
                <div class="inline-block bg-[#A62C21] sm:w-11/12 rounded-[20px] mx-auto">
                    <div class="grid grid-cols-3 grid-rows-1 gap-2 text-start">

                        <div class="flex col-start-1 col-end-1 text-white">
                            <div class="flex flex-col align-middle p-4 ml-2">
                                <div>
                                    <h2 class="pb-4" style="font-size: 24px; font-weight: 800;">Novo pedido</h2>

                                    <p style="font-size: 16px; font-weight: 400;"><span style="font-weight: 600; font-size: 18px;">Realizado em</span> {{ this.date }} às {{ this.time }}</p>
                                    <p style="font-size: 16px; font-weight: 400;"><span style="font-weight: 600; font-size: 18px;">Cliente:</span> {{ this.$route.params.clientName }}</p>
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
                                    <h2 class="pb-4" style="font-size: 20px; font-weight: 600;">Itens:</h2>

                                    <div class="pb-1" style="font-size: 16px; font-weight: 400;" v-for="(dish, index) in this.dishes" :key="index">
                                        <div v-html="dish"></div>
                                    </div>
                                    
                                </div>

                            </div>
                        </div>

                        <div class="col-start-3 col-end-3 row-start-1 row-end-1 flex justify-center items-end pb-[4.5rem]">
                            <p class="pt-3 text-white" style="font-size: 16px; font-weight: 400;">Total do pedido: <span style="font-weight: 600; font-size: 20px;">R${{ this.total }}</span><span style="font-weight: 400; font-size: 14px;"> (sem frete)</span></p>
                        </div>
                        
                        <div class="inline-flex justify-evenly col-start-3 col-end-3 row-start-1 row-end-1 my-4">

                            <NotificationCancelModal
                                :name="this.$route.params.clientName"
                                :id="this.$route.params.orderId"
                            />

                        </div>

                    </div>
                    
                </div>
            </div>
        </div>

        <!-- Pedido cancelado -->
        <div v-if="this.$route.params.status === 'Cancelado'">

            <div class="text-center">
                <div class="inline-block bg-[#A62C21] sm:w-11/12 rounded-[20px] mx-auto">
                    
                    <div class="grid grid-cols-3 grid-rows-1 gap-2 text-start">
                        <div class="flex col-start-1 col-end-1 text-white">
                            <div class="flex flex-col align-middle p-4 ml-2">
                                <div>
                                    <h2 class="pb-4" style="font-size: 24px; font-weight: 800;">Pedido cancelado</h2>

                                    <p style="font-size: 16px; font-weight: 400;"><span style="font-weight: 600; font-size: 18px;">Realizado em</span> {{ this.date }} às {{ this.time }}</p>
                                    <p style="font-size: 16px; font-weight: 400;"><span style="font-weight: 600; font-size: 18px;">Cliente:</span> {{ this.$route.params.clientName }}</p>
                                    <p class="pb-4" style="font-size: 16px; font-weight: 400;"><span style="font-weight: 600; font-size: 18px;">ID do pedido:</span> #{{ this.$route.params.orderId }}</p>

                                    <p style="font-size: 16px; font-weight: 600;"><span style="font-weight: 600; font-size: 18px;">Motivo do cancelamento:</span></p>
                                    
                                    <p style="font-size: 16px; font-weight: 400;">{{ this.justification }}</p>

                                </div>

                            </div>
                        </div>

                        <div class="flex col-start-2 col-end-2 text-white">
                            <div class="flex flex-col align-middle p-4 ml-2">
                                <div>
                                    <h2 class="pb-4" style="font-size: 20px; font-weight: 600;">Itens:</h2>

                                    <div class="pb-1" style="font-size: 16px; font-weight: 400;" v-for="(dish, index) in this.dishes" :key="index">
                                        <div v-html="dish"></div>
                                    </div>
                                    
                                </div>

                            </div>
                        </div>

                        <div class="col-start-3 col-end-3 row-start-1 row-end-1 flex justify-center items-end pb-[4.5rem]">
                            <p class="pt-3 text-white" style="font-size: 16px; font-weight: 400;">Total do pedido: <span style="font-weight: 600; font-size: 20px;">R${{ this.total }}</span><span style="font-weight: 400; font-size: 14px;"> (sem frete)</span></p>
                        </div>
                        
                        <div class="flex justify-start items-end font-medium text-center col-start-3 col-end-3 row-start-1 row-end-1 my-4">

                            <button @click="goToHomeRestaurant()" type="button" class="block w-full mx-4 text-white bg-[#9DBF69] hover:bg-[#7d9b4f] rounded-lg text-sm px-4 py-2.5">
                                <p class="font-bold">Voltar</p>
                            </button>

                        </div>

                    </div>
                    
                </div>
            </div>
        </div>

        <!-- Pedido entregue -->
        <div v-if="this.$route.params.status === 'Entregue'">
            <div class="text-center">
                <div class="inline-block bg-[#A62C21] sm:w-11/12 rounded-[20px] mx-auto">
                    
                    <div class="grid grid-cols-3 grid-rows-1 gap-2 text-start">
                        <div class="flex col-start-1 col-end-1 text-white">
                            <div class="flex flex-col align-middle p-4 ml-2">
                                <div>
                                    <h2 class="pb-4" style="font-size: 24px; font-weight: 800;">Pedido entregue</h2>

                                    <p style="font-size: 16px; font-weight: 400;"><span style="font-weight: 600; font-size: 18px;">Realizado em</span> {{ this.date }} às {{ this.time }}</p>
                                    <p style="font-size: 16px; font-weight: 400;"><span style="font-weight: 600; font-size: 18px;">Cliente:</span> {{ this.$route.params.clientName }}</p>
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
                                    <h2 class="pb-4" style="font-size: 20px; font-weight: 600;">Itens:</h2>

                                    <div class="pb-1" style="font-size: 16px; font-weight: 400;" v-for="(dish, index) in this.dishes" :key="index">
                                        <div v-html="dish"></div>
                                    </div>
                                    
                                </div>

                            </div>
                        </div>

                        <div class="col-start-3 col-end-3 row-start-1 row-end-1 flex justify-center items-end pb-[4.5rem]">
                            <p class="pt-3 text-white" style="font-size: 16px; font-weight: 400;">Total do pedido: <span style="font-weight: 600; font-size: 20px;">R${{ this.total }}</span><span style="font-weight: 400; font-size: 14px;"> (sem frete)</span></p>
                        </div>
                        
                        <div class="flex justify-start items-end font-medium text-center col-start-3 col-end-3 row-start-1 row-end-1 my-4">

                            <button @click="goToHomeRestaurant()" type="button" class="block w-full mx-4 text-white bg-[#9DBF69] hover:bg-[#7d9b4f] rounded-lg text-sm px-4 py-2.5">
                                <p class="font-bold">Voltar</p>
                            </button>

                        </div>

                    </div>
                    
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
                date: '',
                time: '',
                dishes: [],
                total: '',
                justification: ''
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
                this.time = this.getTime(this.$route.params.clientName, this.$route.params.orderId, orders)
                this.dishes = this.getItems(this.$route.params.clientName, this.$route.params.orderId, orders)
                this.total = this.getTotalPrice(this.$route.params.clientName, this.$route.params.orderId, orders)
                this.justification = this.getJustification(this.$route.params.clientName, this.$route.params.orderId, orders)
            
            })
            .catch(error => {
                console.log(error.message);
            });
        },
        methods: {
            getDate(key, id, orders) {
                return orders[key][id]['data'];
            },

            getAddress(key, id, orders){
                return orders[key][id]['endereço'];
            },

            getTime(key, id, orders) {
                return orders[key][id]['hora']
            }
            ,
            getItems(key, id, orders) {
                
                var keys = Object.keys(orders[key][id]['pratos']);
                var items = [];
                var amount = [];
                var sorted_items = [];

                keys.forEach(ky =>{
                    items.push(orders[key][id]['pratos'][ky].nome);
                });
                keys.forEach(ky =>{
                    amount.push(orders[key][id]['pratos'][ky].quantidade);
                });
                amount.forEach((elem, index) => {
                    sorted_items.push("Qtd: " + elem + " | Item: " + items[index]);
                });

                return sorted_items;
            },

            getTotalPrice(key, id, orders) {
                var keys = Object.keys(orders[key][id]['pratos']);
                var price = 0;
                keys.forEach(ky =>{
                    price += parseFloat(orders[key][id]['pratos'][ky].preco.replace(',', '.')*parseInt(orders[key][id]['pratos'][ky].quantidade));
                });
                return `${price.toFixed(2)}`;
            },

            getJustification(key, id, orders) {
                return orders[key][id]['justification']
            },

            goToHomeRestaurant() {
                this.$router.push('/home-restaurant')
            }
        }
    }
</script>