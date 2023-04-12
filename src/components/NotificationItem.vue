<template>

    <div>

        <div class="divide-y bg-gray-50 divide-gray-100 dark:divide-gray-700">

            <div v-if="status === 'Pagamento'">
                <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                
                    <button class="w-full pl-3" @click="showDetails()">
                        <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">Você recebeu um novo pedido com ID <span class="font-semibold text-gray-900 dark:text-white">#{{ orderId }}</span> de <span class="font-semibold text-gray-900 dark:text-white">{{ clientName }}</span></div>
                        <div class="text-xs text-blue-600 dark:text-blue-500">em {{ date }} às {{ time }}</div>
                    </button>

                </a>
            </div>

            <div v-if="status === 'Cancelado'">
                <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">

                    <button class="w-full pl-3" @click="showDetails()">
                        <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">O pedido <span class="font-semibold text-gray-900 dark:text-white">#{{ orderId }}</span> feito por <span class="font-semibold text-gray-900 dark:text-white">{{ clientName }}</span> foi cancelado.</div>
                    </button>

                </a>
            </div>

            <div v-if="status === 'Entregue'">
                <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">

                    <button class="w-full pl-3" @click="showDetails()">
                        <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">O pedido <span class="font-semibold text-gray-900 dark:text-white">#{{ orderId }}</span> feito por <span class="font-semibold text-gray-900 dark:text-white">{{ clientName }}</span> foi entregue com sucesso!</div>
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
            date: String,
            time: String,
            address: Object,
            dishes: Array
        },
        methods: {
            showDetails() {
                this.$router.push({
                    name: 'notification-details',
                    params: 
                    {
                        orderId: this.orderId, 
                        clientName: this.clientName,
                        status: this.status,
                        date: this.date,
                        time: this.time

                    }
                })
            }
        }
    }
</script>