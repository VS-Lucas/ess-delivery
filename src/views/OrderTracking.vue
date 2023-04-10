<template>
<body class="bg-[#261918] min-h-screen">
    <header class="bg-[#541F1B] w-full h-[6rem] flex items-center py-4 mb-8">
        <button @click="clearOrder" class="ml-4"><img src="../assets/img/back-button.png" alt="back"></button>
        <h1 class="text-white font-bold mx-auto text-3xl">Pedido #{{this.id}}</h1>
    </header>
    
    <div class="text-white ml-5 mb-3 bg-[#541F1B] w-[175px] p-1 rounded-[20px]">
        <button @click="goToHome">Ir para página inicial</button>
    </div>

    <div class="flex items-center justify-center">
        <div>
            <ol class="items-center w-full space-y-4 sm:flex sm:space-x-10 sm:space-y-0">
                
                <li class="flex w-full items-center  space-x-2.5">
                    <div v-if="this.steps.payment">
                        <span class="flex items-center justify-center w-10 h-10 border-2 bg-[#F26938] border-[#F26938] rounded-full lg:h-24 lg:w-24 shrink-0">
                            <img class="lg:h-14 lg:w-14 w-6 h-6" src="@/assets/img/money.png" alt="payment">
                        </span>
                    </div>

                    <div v-if="!this.steps.payment">
                        <span class="flex items-center justify-center w-10 h-10 border-2 border-[#6C4131] rounded-full lg:h-24 lg:w-24 shrink-0">
                            <img class="lg:h-14 lg:w-14 w-6 h-6" src="@/assets/img/money.png" alt="payment">
                        </span>
                    </div>
                    
                    <h3 class="text-white leading-tight">Pagamento</h3>
                </li>

                <li class="flex w-full items-center  space-x-2.5">
                    <div v-if="this.steps.confirmed_order">
                        <span class="flex items-center justify-center w-10 h-10 bg-[#F26938] border-2 border-[#F26938] rounded-full lg:h-24 lg:w-24 shrink-0">
                            <img class="lg:h-14 lg:w-14 w-6 h-6" src="@/assets/img/receipt.png" alt="payment">
                        </span>
                    </div>
                    <div v-if="!this.steps.confirmed_order">
                        <span class="flex items-center justify-center w-10 h-10 border-2 border-[#6C4131] rounded-full lg:h-24 lg:w-24 shrink-0">
                            <img class="lg:h-14 lg:w-14 w-6 h-6" src="@/assets/img/receipt.png" alt="payment">
                        </span>
                    </div>
                    
                    <span>
                        <h3 class="text-white leading-tight">Pedido</h3>
                        <span class="text-white">confirmado</span>
                    </span>
                </li>
                
                <li class="flex w-full items-center  space-x-2.5">
                    <div v-if="this.steps.confirmed_order">
                        <span class="flex items-center justify-center w-10 h-10 bg-[#F26938] border-2 border-[#F26938] rounded-full lg:h-24 lg:w-24 shrink-0">
                            <img class="lg:h-14 lg:w-14 w-6 h-6" src="@/assets/img/process.png" alt="payment">
                        </span>
                    </div>
                    <div v-if="!this.steps.confirmed_order">
                        <span class="flex items-center justify-center w-10 h-10 border-2 border-[#6C4131] rounded-full lg:h-24 lg:w-24 shrink-0">
                            <img class="lg:h-14 lg:w-14 w-6 h-6" src="@/assets/img/process.png" alt="payment">
                        </span>
                    </div>
                    
                    <span>
                        <h3 class="text-white leading-tight">Pedido em</h3>
                        <p class="text-white">preparação</p>
                    </span>
                </li>
                
                <li class="flex w-full items-center space-x-2.5">
                    <div v-if="this.steps.underway">
                        <span class="flex items-center justify-center w-10 h-10 bg-[#F26938] border-2 border-[#F26938] rounded-full lg:h-24 lg:w-24 shrink-0">
                            <img class="lg:h-14 lg:w-14 w-6 h-6" src="@/assets/img/fast-delivery.png" alt="payment">
                        </span>
                    </div>
                    <div v-if="!this.steps.underway">
                        <span class="flex items-center justify-center w-10 h-10 border-2 border-[#6C4131] rounded-full lg:h-24 lg:w-24 shrink-0">
                            <img class="lg:h-14 lg:w-14 w-6 h-6" src="@/assets/img/fast-delivery.png" alt="payment">
                        </span>
                    </div>
                        
                    <span>
                        <h3 class="text-white leading-tight">A caminho</h3>
                    </span>
                </li>
                
                <li class="flex w-full items-center  space-x-2.5">
                    <div v-if="this.steps.delivered">
                        <span class="flex items-center justify-center w-10 h-10 bg-[#F26938] border-2 border-[#F26938] rounded-full lg:h-24 lg:w-24 shrink-0">
                            <img class="lg:h-14 lg:w-14 w-6 h-6" src="@/assets/img/done.png" alt="payment">
                        </span>
                    </div>

                    <div v-if="!this.steps.delivered">
                        <span class="flex items-center justify-center w-10 h-10 border-2 border-[#6C4131] rounded-full lg:h-24 lg:w-24 shrink-0">
                            <img class="lg:h-14 lg:w-14 w-6 h-6" src="@/assets/img/done.png" alt="payment">
                        </span>
                    </div>
                    
                    <span class="text-white leading-tight">Entregue</span>
                </li>

            </ol>
        </div>

        
    </div>
    
    <div class="mt-16 lg:w-11/12 mx-auto mr-2">
        <h1 class="text-white font-bold mb-4">Detalhes do pedido</h1>
        
        <div class="grid grid-cols-3 gap-2">
            <div class="col-span-1 bg-[#83271F] lg:w-[20rem] lg:h-[15rem] rounded-[15px] overflow-auto">
                <table style="width:100%" class="mt-3 text-white font-normal">
                    <tr>
                        <th class="font-normal">Qtd</th>
                        
                        <th class="font-normal">Item</th>
                    </tr>
                    
                    <tr>
                        <td colspan="3"><hr class="w-11/12 m-2 border-[#541F1B]"></td>
                    </tr>
                    
                    <tr v-for="dish in dishes" :key="dish.id" class="overflow-auto">
                        <th class="font-normal">{{ dish.amount }}</th>
                        <th class="font-normal">{{ dish.nome }}</th>
                    </tr>

                    <tr>
                        <td colspan="3"><hr class="w-11/12 m-2 border-[#541F1B]"></td>
                    </tr>

                    <tr>
                       <th></th>
                       <th class="text-xl">Total: R$ {{ this.totalprice  }}</th>
                    </tr>
                    
                </table>
            </div>
            
            <div class="col-span-1 bg-[#83271F] lg:w-[20rem] lg:h-[15rem] rounded-[15px]">
                <div class="flex items-center justify-center">
                    <h2 class="text-white mt-3">Endereço de entrega</h2>
                </div>
                <hr class="w-11/12 m-2 border-[#541F1B]">
                <div class="flex flex-col flex-wrap items-center text-white mt-5 text-center">
                    <h2 class="mt-3">{{ this.address.cep }}</h2>
                    <h2 class="mt-3">{{ this.address.rua }}, <br>{{ this.address.numero }}, <br>{{ this.address.bairro }}</h2>
                    <h2 class="mt-3">{{ this.address.complemento }}</h2>
                </div>
            </div>
            
            <div class="col-span-1 bg-[#A62C21] lg:w-[20rem] lg:h-[15rem] rounded-[15px]">
                <div class="flex items-center justify-center">
                    <h2 class="text-white mt-3">Previsão de entrega</h2>
                </div>
                <hr class="w-11/12 m-2 border-[#541F1B]">
                <div class="flex items-center">   
                    <img class="ml-2" src="@/assets/img/delivery.png" alt="delivery">
                    <h2 class="ml-6 text-white">{{this.time}}</h2>
                </div>
                
            </div>
        </div>
    </div>

    <div v-if="this.show">
        <div class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                <div class="modal-container bg-white w-[400px] mx-auto h-[200px] rounded-[20px] shadow-lg z-50 overflow-y-auto">
                    <div class="modal-content py-4 text-left px-6">
                        <div class="modal-body mt-2">
                            <!-- Conteúdo do modal aqui -->
                            <label for="input">Por que você deseja cancelar:</label>
                            <input v-model="justification" name="input" class="w-full rounded-[20px]" type="text">

                            <div class="grid grid-cols-2 mt-10">
                                <div class="col-span-1">
                                    <button @click="back" type="button" class="bg-[#9DBF69] hover:bg-[#A62C21] rounded-lg text-sm px-9 py-2.5">
                                        Voltar
                                    </button>
                                </div>
                                <div class="col-start-3">
                                    <button @click="confirm" type="button" class="bg-[#9DBF69] hover:bg-green-500 rounded-lg text-sm px-4 py-2.5">
                                        <p class="text-black font-bold">Confirmar</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="this.show2">
        <div class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                <div class="modal-container bg-white w-[400px] mx-auto h-[200px] rounded-[20px] shadow-lg z-50 overflow-y-auto">
                    <div class="modal-content py-4 text-left px-6">
                        <div class="modal-body mt-2">
                            <!-- Conteúdo do modal aqui -->
                            <h1 class="text-bold text-center">Pedido cancelado com sucesso!!</h1>

                            <div class="flex items-center justify-center mt-10">
                                <div>
                                    <button @click="backToHome" type="button" class="bg-[#9DBF69] hover:bg-[#A62C21] rounded-lg text-sm px-9 py-2.5">
                                        Voltar para home
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="this.error">
        <div class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                <div class="modal-container bg-white w-[400px] mx-auto h-[200px] rounded-[20px] shadow-lg z-50 overflow-y-auto">
                    <div class="modal-content py-4 text-left px-6">
                        <div class="modal-body mt-2">
                            <!-- Conteúdo do modal aqui -->
                            <h1 class="text-bold text-center">Falha ao cancelar! Entrega em andamento</h1>

                            <div class="flex items-center justify-center mt-10">
                                <div>
                                    <button @click="toBack" type="button" class="bg-[#9DBF69] hover:bg-[#A62C21] rounded-lg text-sm px-9 py-2.5">
                                        Voltar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       

    <div class="mx-auto mt-10 flex items-center justify-center">
        <div>
            <button v-if="this.status !== 'Cancelado' && this.status !== 'Entregue'" @click="cancelOrder" class="bg-[#541F1B] text-white font-bold rounded-[15px] p-4">Cancelar pedido</button>
        </div>       
    </div>
</body>    
</template>



<script>
import axios from 'axios';

export default {
    data() {
        return {
            time: '',
            dishes: {},
            justification: '',
            name: '',
            show: false,
            show2: false,
            freq: {},
            id: '',
            address: {},
            totalprice: '',
            status: '',
            steps: {
                payment: false,
                confirmed_order: false,
                order_in_preparation: false,
                underway: false,
                delivered: false,
            },
            error: false,
            intervalId: null,
            restaurant: ''
        }
    },
    mounted() {
        setTimeout(async () => {

            await axios.get('http://localhost:3000/get-tracking')
            .then(response => {
                const order = response.data;
                const id = Object.keys(response.data);
                this.id = id[0];
                this.address = order[id[0]]['endereco'];
                this.totalprice = order[id[0]]['preco'];
                this.time = order[id[0]]['tempo_estimado'];
                this.restaurant = order[id[0]]['restaurante'];
                this.name = order[id[0]]['nome'];
                this.status = order[id[0]]['status'];
                const key_dishes = Object.keys(order[id[0]]['pratos']);
                key_dishes.forEach(key => {
                    this.dishes[key] = {
                        nome: order[id[0]]['pratos'][key].nome,
                        amount: order[id[0]]['pratos'][key].quantidade
                    }
                });
            }).catch(error => {
                console.error(error);
            });

            this.steps.payment = true;
            await axios.get('http://localhost:3000/get-orders')
            .then(response => {
            const orders = response.data.pedidos;
            this.status = orders[this.id]['status'];
            if (this.status === 'Cancelado') {
                this.steps.payment = false;
                this.steps.confirmed_order = false;
                this.steps.order_in_preparation = false;
                this.steps.underway = false;
                this.steps.delivered = false;
            } else {
                if (this.status === 'Pedido confirmado') {
                    this.steps.payment = true;
                    this.steps.confirmed_order = true;
                } else if (this.status === 'Pedido em preparação') {
                    this.steps.payment = true;
                    this.steps.confirmed_order = true;
                    this.steps.order_in_preparation = true;
                } else if (this.status === 'A caminho') {
                    this.steps.payment = true;
                    this.steps.confirmed_order = true;
                    this.steps.order_in_preparation = true;
                    this.steps.underway = true;
                } else if (this.status === 'Entregue') {
                    this.steps.payment = true;
                    this.steps.confirmed_order = true;
                    this.steps.order_in_preparation = true;
                    this.steps.underway = true;
                    this.steps.delivered = true;
                }
            }
            }).catch(error => {
                console.error(error)
            });
        }, 200);
    },
    Destroy() {
        clearInterval(this.intervalId);
        axios.put('http://localhost:3000/clear-tracking')
        .then(() => {
        }).catch(error => { 
            console.error(error);
        });
    },
    methods: {
        cancelOrder() {
            if (this.steps.underway) {
                this.error = true;
            } else {
                this.show = true;
            }
        },
        back() {
            this.show = false;
        },
        confirm() {
            // Cancelamento do pedido do cliente
            axios.post('http://localhost:3000/cancel-customer-order', {id: this.id, restaurant: this.restaurant})
            .then(() => {
                this.show = false;
                this.show2 = true;
            }).catch(err => {
                console.log(err.message);
            });
            // Cancelamento do pedido do restaurante
            axios.post('http://localhost:3000/cancel-restaurant-order', {name: this.name, id: this.id, justification: this.justification, restaurant: this.restaurant})
            .then(() => {
                this.show = false;
                this.show2 = true;
            }).catch(err => {
                console.log(err.message);
            });
            // Clear no campo de acompanhamento
            axios.put('http://localhost:3000/clear-tracking')
            .then(() => {
            }).catch(error => { 
                console.error(error);
            });
        },
        backToHome() {
            this.show2 = false;
            this.$router.push('/clienthome');
        },
        toBack() {
            this.error = false;
        },
        clearOrder() {
            axios.put('http://localhost:3000/clear-tracking')
            .then(() => {
                history.back();
            }).catch(error => { 
                console.error(error);
            });
        },
        goToHome() {
            axios.put('http://localhost:3000/clear-tracking')
            .then(() => {
                this.$router.push('clienthome');
            }).catch(error => { 
                console.error(error);
            });
        },

    }
}
</script>