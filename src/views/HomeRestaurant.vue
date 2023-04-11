<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
</style>

<template>
   <div class="home-restaurante bg-[#261918]">
        
      <RestaurantNavBar/>

      <div class="p-4">

         <div class="p-4 mt-[5rem]" style="font-family: Montserrat;">

            <div class="grid grid-cols-4 gap-4 mb-7">

               <div class="flex items-start justify-start" style="font-weight: 700;">
                  <h1 class="text-white" style="font-size: 30px;">Dashboard</h1>
               </div>

               <div class="col-end-5 mt-3">
                  <label for="table-search" class="sr-only">Search</label>
                     <div class="flex items-center justify-center relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                           <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="table-search" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-[10px] w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar...">
                     </div>
               </div>

            </div>

            <div class="h-76 mb-4 rounded bg-[#FFF3F3] dark:bg-gray-800">

               <h2 class="flex items-start justify-start pt-4 pl-4" style="font-size: 20px; font-weight: 800;">Lista de Pedidos</h2>
                  
                 <div class="grid pt-4 pb-4">
                     
                     <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-center font-semibold text-gray-500 dark:text-gray-600">
                           <thead class="text-xs text-gray-800 uppercase bg-[#FFF3F3] dark:bg-gray-800 dark:text-gray-700">
                                 <tr>
                                    <th scope="col" class="px-6 py-3 text-left">
                                       No
                                    </th>
                                    <th scope="col" class="px-12 py-3">
                                       ID
                                    </th>
                                    <th scope="col" class="px-12 py-3">
                                       STATUS
                                    </th>
                                    <th scope="col" class="px-12 py-3">
                                       LOCAL DA ENTREGA
                                    </th>
                                    <th scope="col" class="px-12 py-3">
                                       PAGAMENTO
                                    </th>
                                    <th scope="col" class="px-12 py-3">
                                       VALOR
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                       <span class="sr-only">Mais info</span>
                                    </th>
                                 </tr>
                           </thead>
                           
                           <tbody>
                                 <tr v-for="(order, index) in this.orders" :key="index" class="bg-[#FFF3F3] border-b font-medium dark:bg-gray-800 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-600">
                                    <th scope="row" class="px-6 py-4 text-left font-medium text-gray-900 whitespace-normal dark:text-gray-900">
                                       {{index}}
                                    </th>
   
                                    <DashboardCard
                                    :id="order.order_id"
                                    :name="order.nome"
                                    :order="order.items"
                                    :address="order.address"
                                    :price="order.price"
                                    :status="order.status"
                                    :payment="this.form_of_payment"
                                    />
                                 </tr>
                           </tbody>
                        </table>
                     </div>

               </div> 

            </div>

            <div class="grid grid-cols-3 gap-4 pb-2 pt-6 text-white" style="font-size: 18px; font-weight: 700;">
               
               <h2 class="flex items-start justify-start col-start-0 ">Média de pedidos</h2>
               <h2 class="flex items-start justify-start">Total de pedidos</h2>
               <h2 class="flex items-start justify-start">Pratos mais consumidos</h2>

            </div>

            <div class="grid grid-cols-3 gap-4 col-start-1 col-span-2 h-40">

               <div class="flex items-center justify-center rounded bg-[#FFF3F3] h-32 dark:bg-gray-800">
                  <img src="..\assets\img\graphic.png" alt="graphichome">
               </div>

               <div class="flex items-center justify-center rounded bg-[#FFF3F3] h-32 dark:bg-gray-800">
                  <img src="..\assets\img\total_home.png" alt="graphichome" style="width: 100%; height: 80%; object-fit: contain;">
               </div>

               <div class="flex items-center justify-center rounded bg-[#FFF3F3] h-32 dark:bg-gray-800">
                  <img src="..\assets\img\prato_home.png" alt="graphichome" style="width: 100%; height: 100%; object-fit: contain;">
               </div>
               
            </div>
         </div>
      </div>

   </div>
</template>

<script>
import RestaurantNavBar from '@/components/RestaurantNavBar.vue'
import DashboardCard from '@/components/DashboardCard.vue'
import axios from 'axios';

export default ({
   name: 'HomeRestaurant',
   data() {
      return {
         orders: [],
         key: [],
         address: '',
         form_of_payment: 'Cartão de Crédito',
         client_name: '',
         modalCard: false
      }
   },
   mounted() {
      // setInterval(() => {
            axios.get('http://localhost:3000/restaurant-orders')
            .then((res) => {
               const base_orders = (res.data.pedido);
               let aux = []
               var keys = Object.keys(base_orders);
               console.log(keys)

               keys.forEach(key => {
                  var ids = Object.keys(base_orders[key]);
                  // console.log('ids:' + ids);
                  ids.forEach(id => {
                     aux.push({
                        order_id: id,
                        items: this.get_items(key, id, base_orders),
                        price: this.get_total_price(key, id, base_orders),
                        status: this.get_status(key, id, base_orders),
                        nome: key,
                        address: this.getAddres(key, id, base_orders),
                     });
                  });
               });
               console.log('AUX:   ' + aux);
               this.orders = [...aux];
            }).catch((error) => {
               console.log(error.message)
            });
      //   }, 7000)
      
   },
   components: {
      RestaurantNavBar,
      DashboardCard
   },
   methods: {
      showDetail() {
         // console.log(this.modalCard)
         this.modalCard = !this.modalCard
         // console.log(this.modalCard)
      },
      getAddres(key, id, orders){
         return orders[key][id]['endereço'];
      },
      get_items(key, id, orders) {
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
            sorted_items.push(elem + "- " + items[index]);
            // sorted_items.push(items[index])
         });

         return sorted_items;
      },
      get_total_price(key, id, orders) {
         var keys = Object.keys(orders[key][id]['pratos']);
         var price = 0;
         keys.forEach(ky =>{
            price += parseFloat(orders[key][id]['pratos'][ky].preco.replace(',', '.')*parseInt(orders[key][id]['pratos'][ky].quantidade));
         });
         return `${price.toFixed(2)}`;
      },
      get_status(key, id, orders) {
         return orders[key][id]['status'];
      },
      get_date() {
         const dataAtual = new Date();
         const dia = String(dataAtual.getDate()).padStart(2, '0');
         const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Note que o mês começa em 0
         const ano = dataAtual.getFullYear();
         const dataFormatada = `${dia}/${mes}/${ano}`;

         return dataFormatada;
      }
   }
})
</script>
