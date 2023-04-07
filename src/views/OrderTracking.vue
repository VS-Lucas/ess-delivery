<template>
<body class="bg-[#261918] min-h-screen">
    <header class="bg-[#541F1B] w-full h-[6rem] flex items-center py-4 mb-8">
        <button class="ml-4"><img src="../assets/img/back-button.png" alt="back"></button>

        <h1 class="text-white font-bold mx-auto text-3xl">Pedido #</h1>
    </header>
    

    <div class="flex items-center justify-center">
        <div>
            <ol class="items-center w-full space-y-4 sm:flex sm:space-x-10 sm:space-y-0">
                
                <li class="flex w-full items-center  space-x-2.5">
                    <span class="flex items-center justify-center w-10 h-10 bg-[#F26938] border-2 border-[#F26938] rounded-full lg:h-24 lg:w-24 shrink-0">
                        <img class="lg:h-14 lg:w-14 w-6 h-6" src="@/assets/img/money.png" alt="payment">
                    </span>
                    <h3 class="text-white leading-tight">Pagamento</h3>
                </li>

                <li class="flex w-full items-center  space-x-2.5">
                    <span class="flex items-center justify-center w-10 h-10 bg-[#F26938] border-2 border-[#F26938] rounded-full lg:h-24 lg:w-24 shrink-0">
                        <img class="lg:h-14 lg:w-14 w-6 h-6" src="@/assets/img/receipt.png" alt="payment">
                    </span>
                    <span>
                        <h3 class="text-white leading-tight">Pedido</h3>
                        <span class="text-white">confirmado</span>
                    </span>
                </li>
                
                <li class="flex w-full items-center  space-x-2.5">
                    <span class="flex items-center justify-center w-10 h-10 bg-[#6C4131] border-2 border-[#6C4131] rounded-full lg:h-24 lg:w-24 shrink-0">
                        <img class="lg:h-14 lg:w-14 w-6 h-6" src="@/assets/img/process.png" alt="payment">
                    </span>
                    
                    <span>
                        <h3 class="text-white leading-tight">Pedido em</h3>
                        <p class="text-white">preparação</p>
                    </span>
                </li>
                
                <li class="flex w-full items-center space-x-2.5">
                    <span class="flex items-center justify-center w-10 h-10 bg-[#6C4131] border-2 border-[#6C4131] rounded-full lg:h-24 lg:w-24 shrink-0">
                        <img class="lg:h-14 lg:w-14 w-6 h-6" src="@/assets/img/fast-delivery.png" alt="payment">
                    </span>
                    <span>
                        <h3 class="text-white leading-tight">A caminho</h3>
                    </span>
                </li>
                
                <li class="flex w-full items-center  space-x-2.5">
                    <span class="flex items-center justify-center w-10 h-10 bg-[#6C4131] border-2 border-[#6C4131] rounded-full lg:h-24 lg:w-24 shrink-0">
                        <img class="lg:h-14 lg:w-14 w-6 h-6" src="@/assets/img/done.png" alt="payment">
                    </span>
                    <span class="text-white leading-tight">Entregue</span>
                </li>

            </ol>
        </div>

        
    </div>
    
    <div class="mt-16 lg:w-11/12 mx-auto mr-2">
        <h1 class="text-white font-bold mb-4">Detalhes do pedido</h1>
        
        <div class="grid grid-cols-3 gap-2">
            <div class="col-span-1 bg-[#83271F] lg:w-[20rem] lg:h-[15rem] rounded-[15px] overflow-auto">
                <table style="width:100%" class="mt-3 text-sm text-white">
                    <tr>
                        <th class="">Qtd</th>
                        
                        <th class="">Item</th>
                    </tr>
                    
                    <tr>
                        <td colspan="3"><hr class="w-11/12 m-2 border-[#541F1B]"></td>
                    </tr>
                    
                    <tr v-for="dish in Object.keys(this.freq)" :key="dish.id">
                        <th class="">{{ this.freq[dish] }}</th>
                        <th class="">{{ dish }}</th>
                    </tr>

                    <tr>
                        <td colspan="3"><hr class="w-11/12 m-2 border-[#541F1B]"></td>
                    </tr>

                    <tr>
                       <th></th>
                       <th>Total: </th>
                    </tr>
                    
                </table>
            </div>
            
            <div class="col-span-1 bg-[#83271F] lg:w-[20rem] lg:h-[15rem] rounded-[15px]">

            </div>
            
            <div class="col-span-1 bg-[#A62C21] lg:w-[20rem] lg:h-[15rem] rounded-[15px]">
                <div class="flex items-center justify-center">
                    <h2 class="text-white">Previsão de entrega</h2>
                </div>
                <hr class="w-11/12 m-2 border-[#541F1B]">
                <div class="flex items-center">   
                    <img class="ml-2" src="@/assets/img/delivery.png" alt="delivery">
                    <h2 class="ml-6">12:12-12:40</h2>
                </div>
                
            </div>
        </div>
    </div>

    <div class="mx-auto mt-5 flex items-center justify-center">
        <div>
            <button @click="cancelOrder" class="bg-[#541F1B] text-white font-bold rounded-[15px] p-4">Cancelar pedido</button>
        </div>       
    </div>
</body>    
</template>



<script>
import qs from 'qs';
// import axios from 'axios';

export default {
    data() {
        return {
            freq: {}
        }
    }, 
    mounted() {
        const objectString = this.$route.params.clientOrder;
        const object = qs.parse(objectString);
        console.log(object)
        const keys = Object.keys(object);
        keys.forEach(key => {
            this.freq[object[key].nome] = 0;
        });

        keys.forEach(key => {
            this.freq[object[key].nome]++;
        }); 
    },
    methods: {
        cancelOrder() {
            console.log("to aq")
        }
    }
}
</script>