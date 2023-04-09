<template>

    <div>

        <div class="divide-y bg-gray-50 divide-gray-100 dark:divide-gray-700">

            <div v-if="status === 'Pagamento'">
                <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                
                    <button class="w-full pl-3" @click="showDetails()">
                        <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">Você recebeu um novo pedido: ID <span class="font-semibold text-gray-900 dark:text-white">#{{ orderId }}</span></div>
                        <div class="text-xs text-blue-600 dark:text-blue-500">a few moments ago</div>
                    </button>

                </a>
            </div>

            <div v-if="status === 'Cancelado'">
                <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">

                    <button class="w-full pl-3" @click="showDetails()">
                        <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">O pedido <span class="font-semibold text-gray-900 dark:text-white">#{{ orderId }}</span> foi cancelado.</div>
                        <div class="text-xs text-blue-600 dark:text-blue-500">10 minutes ago</div>
                    </button>

                </a>
            </div>

            <div v-if="status === 'A caminho'">
                <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">

                    <button class="w-full pl-3" @click="showDetails()">
                        <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">O pedido <span class="font-semibold text-gray-900 dark:text-white">#{{ orderId }}</span> está a caminho para o cliente {{ clientName }}.</div>
                        <div class="text-xs text-blue-600 dark:text-blue-500">10 minutes ago</div>
                    </button>

                </a>
            </div>

            <div v-if="status === 'Entregue'">
                <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">

                    <button class="w-full pl-3" @click="showDetails()">
                        <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">O pedido <span class="font-semibold text-gray-900 dark:text-white">#{{ orderId }}</span> foi entregue com sucesso!</div>
                        <div class="text-xs text-blue-600 dark:text-blue-500">44 minutes ago</div>
                    </button>

                </a>
            </div>

        </div>

    </div>

</template>

<script>

    export default {
        props: {
            orderId: String,
            status: String,
            clientName: String,
            address: Object,
            date: String
        },
        methods: {
            showDetails() {
                this.$router.push({
                    name: 'notification-details',
                    params: 
                    {
                        orderId: this.orderId, 
                        clientName: this.clientName,
                        // items: this.items,
                        // total_price: this.total_price,
                        // form_pay: this.form_pay,
                        status: this.status
                        // prices: this.prices,
                        // dishes: JSON.stringify(this.dishes)
                    }
                })
            },
            // getAddress(key, id, orders){
            //     return orders[key][id]['endereço'];
            // }
        }
    }
</script>