<template>
    <body class="bg-[#261918] min-h-screen">
        <div class="w-full">
            <nav class="bg-[#541F1B] border-gray-200 flex items-center p-4">
                <button type="button">
                    <img src="../assets/img/back-button.png" alt="Back button">
                </button>
                <span class="text-3xl text-white text-center flex-1 mr-[60px]">Checkout</span>
            </nav>
        </div> 
        <div class="mt-10">
            <div class="grid grid-cols-7">
                <div class="col-start-2 col-span-2 bg-[#BA442A] h-[280px] rounded-[10px]">
                    <div class="mt-[20px] ml-[20px]">
                        <h1 class="text-3xl text-white">Meu carrinho</h1>
                    </div>
                </div>
                <div class="col-start-5 col-span-2 bg-[#BA442A] h-[280px] rounded-[10px]">
                    <div class="mt-[20px] ml-[20px]">
                        <h1 class="text-3xl text-white">Pagamento</h1>
                        <p class="text-white  mt-[20px]">
                            Selecione a forma de pagamento:
                        </p>
                        <div class="grid grid-cols-7">
                            <div class="bg-[#A62C21] col-span-6 rounded-[10px] h-[30px] flex justify-between">
                                <div class="text-white mt-[4px] ml-[10px]">
                                    <p class="text-sm">Cartão de Crédito</p>
                                </div>
                                <button class="mr-[5px]"><svg class="w-5 h-5 text-white" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                            </div>
                        </div>
                        <div class="grid grid-cols-7">
                            <div class="text-white col-span-3 mt-[6px] ml-[5px]">
                                <p class="text-sm">Cartão de Crédito</p>
                            </div>
                            <div class="text-white col-span-2 mt-[6px] ml-[5px]">
                                <p class="text-sm">Validade</p>
                            </div>
                            <div class="text-white col-span-1 mt-[6px] ml-[5px]">
                                <p class="text-sm">CVV</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-7 gap-2">
                            <div class="bg-[#A62C21] col-span-3 rounded-[10px] h-[30px] mt-1">
                                <p class="text-white mt-[3px] text-center">**** **** **** 3333</p>
                            </div>
                            <div class="bg-[#A62C21] col-span-2 rounded-[10px] h-[30px] mt-1">
                                <p class="text-white mt-[3px] text-center">08/30</p>
                            </div>
                            <div class="bg-[#A62C21] col-span-1 rounded-[10px] h-[30px] mt-1">
                                <p class="text-white text-center mt-[3px]">251</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-7">
                            <div class="text-white col-span-6 mt-[6px] ml-[5px]">
                                <p class="text-sm">Nome impresso no cartão</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-7">
                            <div class="bg-[#A62C21] col-span-6 rounded-[10px] h-[30px] mt-[5px]">
                                <div class="text-white mt-[6px] ml-[10px]">
                                    <p class="text-sm">Nivan Roberto Ferreira Júnior</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="address" class="col-start-2 col-span-5 bg-[#BA442A] h-[200px] rounded-[10px] mt-10">
                    <div class="mt-[20px] ml-[20px]">
                        <h1 class="text-3xl text-white">Endereço de entrega</h1>
                    </div>
                    <div class="mt-[20px] ml-[20px]">
                        <span class="flex text-white">
                            <h1 class="ml-[10px]">
                                Rua, Bairro, Número
                            </h1>
                            <h1 class="ml-auto mr-[398px]">
                                CEP
                            </h1>
                        </span>
                        <span class="flex">
                            <div class="bg-[#A62C21] w-[420px] h-[25px] rounded-[10px] text-white">
                                <div class="ml-[10px]">
                                    {{ `${this.addressDict.rua}, ${this.addressDict.bairro}, ${this.addressDict.numero}` }}
                                </div>
                            </div>
                            <div class="bg-[#A62C21] w-[420px] h-[25px] rounded-[10px] text-white ml-auto mr-[20px]">
                                <div class="ml-[10px]">
                                    {{ this.addressDict.cep }}
                                </div>
                            </div>
                        </span>
                        <h1 class="text-white ml-[10px]">
                            Complemento
                        </h1>
                        <div class="bg-[#A62C21] w-[420px] h-[25px] rounded-[10px] text-white">
                            <div class="ml-[10px]">
                                {{ this.addressDict.complemento }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-start-4 col-span-1 bg-[#BA442A] h-[50px] rounded-[10px] mt-10">
                    <div class="text-center mt-[10px]">
                        <button type="button">
                            <h1 class="text-2xl text-white">Confirmar</h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </body>
  </template>

<script>
    import axios from 'axios';

    export default {
        name: 'checkoutView',
        data() {
            return {
                addressDict: ''
            }
        },
        methods: {
            async getAddress() {
                await axios.get('http://localhost:3000/checkout')
                .then(response => {
                    this.addressDict = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
            }
        },
        mounted() {
            this.getAddress();
        }
    }
</script>