<template>
    
    <div class="flex justify-start items-end text-white">
                        
        <button @click="denyButton()" :disabled="denyButtonDisable" class="block w-[180px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
            Recusar pedido
        </button>

    </div>

    <div class="flex justify-end items-end text-white">

        <button @click="confirmButton()" :disabled="confirmButtonDisable" class="block w-[180px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
            Confirmar pedido
        </button>

    </div>  


    <div v-if="this.denyModal">
        <div class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                <div class="modal-container bg-white w-[400px] mx-auto h-[200px] rounded-[20px] shadow-lg z-50 overflow-y-auto">
                    <div class="modal-content py-4 text-left px-6">
                        <div class="modal-body mt-2">
                            <!-- Conteúdo do modal aqui -->
                            <label for="input">Por que você deseja recusar o pedido?</label>
                            <input v-model="justification" name="input" class="w-full rounded-[20px]" type="text">

                            <div class="grid grid-cols-2 mt-10">
                                <div class="col-span-1">
                                    <button @click="cancelDeny" type="button" class="bg-[#9DBF69] hover:bg-[#A62C21] rounded-lg text-sm px-9 py-2.5">
                                        Voltar
                                    </button>
                                </div>
                                <div class="col-start-3">
                                    <button @click="confirmDenied" type="button" class="bg-[#9DBF69] hover:bg-green-500 rounded-lg text-sm px-4 py-2.5">
                                        <p class="text-black font-bold">Recusar Pedido</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>

<script>
import axios from 'axios'

export default ({
    data() {
        return {
            justification: '',
            denyModal: false,
            denyButtonDisable: false,
            confirmButtonDisable: false
        }
    },
    props: {
        name: String,
        id: String
    },
    methods: {
        async confirmButton() {
            this.denyButtonDisable = true;
            // Confirmar pedido e enviar para o restaurante
            await axios.post('http://localhost:3000/accept-order', {name: this.name, id: this.id})
            .then(() => {
                
            }).catch(err => {
                console.log(err.message);
            });
            // Confirmar pedido e enviar para o cliente
            await axios.post('http://localhost:3000/notify-order-accepted', {name: this.name, id: this.id})
            .then(() => {
                
            }).catch(err => {
                console.log(err.message);
            });
        },
        denyButton() {
            this.confirmButtonDisable = true;
            this.denyModal = !this.denyModal;

        },
        cancelDeny() {
            this.denyModal = !this.denyModal;
        },
        confirmDenied() {
            if (!this.justification) {
                return;
            }
            this.denyModal = !this.denyModal;

            // Recusar pedido e enviar para o restaurante
            axios.post('http://localhost:3000/deny-order', {name: this.name, id: this.id})
            .then(() => {
                this.denyModal = !this.denyModal;
            }).catch(err => {
                console.log(err.message);
            });
            // Recusar pedido e enviar para o cliente
            axios.post('http://localhost:3000/notify-order-denied', {name: this.name, id: this.id, justification: this.justification})
            .then(() => {
                
            }).catch(err => {
                console.log(err.message);
            });
        },

    }
})
</script>
