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
                                    {{ `${this.rua}, ${this.bairro}, ${this.numero}` }}
                                </div>
                            </div>
                            <div class="bg-[#A62C21] w-[420px] h-[25px] rounded-[10px] text-white ml-auto mr-[20px]">
                                <div class="ml-[10px]">
                                    {{ this.cep }}
                                </div>
                            </div>
                        </span>
                        <h1 class="text-white ml-[10px]">
                            Complemento
                        </h1>
                        <div class="bg-[#A62C21] w-[420px] h-[25px] rounded-[10px] text-white">
                            <div class="ml-[10px]">
                                TESTE
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
                rua: '',
                bairro: '',
                numero: '',
                cep: '',
            }
        },
        methods: {
            async getAddress() {
                await axios.get('http://localhost:3000/checkout')
                .then(response => {
                    this.rua = response.data.rua;
                    this.bairro = response.data.bairro;
                    this.numero = response.data.numero;
                    this.cep = response.data.cep;
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