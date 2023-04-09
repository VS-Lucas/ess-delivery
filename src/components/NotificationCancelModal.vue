<template>
    <div class="mx-auto mt-10 flex items-center justify-center">
        <div>  
            <button @click="confirmButton" class="bg-[#541F1B] text-white font-bold rounded-[15px] p-4">Confirmar Pedido</button>
        </div>
        <div>
            <button @click="refuseButton" class="bg-[#541F1B] text-white font-bold rounded-[15px] p-4">Recusar Pedido</button>
        </div>       
    </div>

    <div v-if="this.refuseModal">
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
                                    <button @click="cancelRefuse" type="button" class="bg-[#9DBF69] hover:bg-[#A62C21] rounded-lg text-sm px-9 py-2.5">
                                        Voltar
                                    </button>
                                </div>
                                <div class="col-start-3">
                                    <button @click="confirmRefuse" type="button" class="bg-[#9DBF69] hover:bg-green-500 rounded-lg text-sm px-4 py-2.5">
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
            refuseModal: false
        }
    },
    methods: {
        confirmButton() {
            // Confirmar pedido e enviar para o cliente
            axios.post('http://localhost:3000/', {id: this.id})
            .then(() => {
                
            }).catch(err => {
                console.log(err.message);
            });
            // Confirmar pedido e enviar para o restaurante
            axios.post('http://localhost:3000/', {name: this.name, id: this.id, justification: this.justification})
            .then(() => {
                
            }).catch(err => {
                console.log(err.message);
            });
        },
        refuseButton() {
            refuseModal = !refuseModal;
        },
        cancelRefuse() {
            refuseModal = !refuseModal;
        },
        confirmRefuse() {
            // Recusar pedido e enviar para o cliente
            axios.post('http://localhost:3000/', {id: this.id})
            .then(() => {
                refuseModal = !refuseModal;
            }).catch(err => {
                console.log(err.message);
            });
            // Recusar pedido e enviar para o restaurante
            axios.post('http://localhost:3000/', {name: this.name, id: this.id, justification: this.justification})
            .then(() => {
                
            }).catch(err => {
                console.log(err.message);
            });
        },

    }
})
</script>
