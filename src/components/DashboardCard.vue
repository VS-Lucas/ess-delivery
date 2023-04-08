<template>
    <td class="px-12 py-4">
        # {{ this.id }}
    </td>
    <td class="px-12 py-4r">
        <span class="bg-[#F26938] bg-opacity-50  text-gray-600 text-sm font-medium mr-2 px-5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-600">
            {{ this.status }}
        </span>
    </td>
    <td class="px-12 py-4">
        {{ this.address.rua }}
    </td>
    <td class="px-12 py-4">
        {{ this.payment}}
    </td>
    <td class="px-12 py-4">
        {{ this.price }}
    </td>
    <div>
        <td class="px-6 py-4 text-right">
            
            
            <!-- Modal toggle -->
            <button @click="showDetail" data-modal-target="orderDetail" data-modal-toggle="orderDetail" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
            Mais info...
            </button>

            <!-- Main modal -->
            <div v-if="this.modalCard">
                <div class="fixed z-10 inset-0 overflow-y-auto bg-opacity-60 bg-[#261918] flex items-center justify-center min-h-screen px-4 rounded-lg overflow-hidden shadow-xl">
                    <div id="orderDetail" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 w-full py-40 px-60 flex items-center justify-center overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                    <div class="relative w-full h-full max-w-2xl md:h-auto">
                        <!-- Modal content -->
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <!-- Modal header -->
                                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                    Detalhes do Pedido #{{ this.id }}
                                </h3>
                                <button @click="showDetail" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="orderDetail">
                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                                </div>
                                <!-- Modal body -->
                                <div class="p-6 space-y-6">
                                <p class="text-base text-left leading-relaxed text-gray-500 dark:text-gray-400">
                                    Cliente: {{ this.name }} <br/>
                                    Pedido: {{ this.order.join(', ') }} <br/>
                                    Endereço: {{ this.address.rua }}, {{ this.address.numero }} <br/>
                                    Preço: {{ this.price }} <br/>
                                    Status: {{ this.status }} <br/>
                                    Método de Pagamento: {{ this.payment }}
                                </p>
                                </div>
                                <!-- Modal footer -->
                                <div class="flex items-center justify-end p-4 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button @click="showDetail" data-modal-hide="orderDetail" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Concluir Pedido</button>
                                </div>
                        </div>

                    </div>
                    </div>
                </div>
            </div>

        </td>
    </div>
</template>

<script>
    export default({
        data() {
            return {
                modalCard: false
            }
        },
        name:'DashboardCard',
        props: {
            id: String,
            name: String,
            order: Array,
            address: Object,
            price: String,
            status: String,
            payment: String,
        },
        mounted() {
            console.log(this.address)
        },
        methods: {
            showDetail() {
                console.log(this.modalCard)
                this.modalCard = !this.modalCard
                console.log(this.modalCard)
            },
        }
})
</script>
