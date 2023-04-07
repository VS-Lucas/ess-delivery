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

               <p class="flex items-start justify-start text-white" style="font-size: 15px; font-weight: 600;">Data (ver como fazer)</p>

            </div>

            <div class="h-76 mb-4 rounded bg-[#DDDDDD] dark:bg-gray-800">

               <h2 class="flex items-start justify-start pt-4 pl-4" style="font-size: 20px; font-weight: 800;">Lista de Pedidos</h2>

               <div class="grid pt-4 pb-4">
                     
                     <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-center font-semibold text-gray-500 dark:text-gray-600">
                           <thead class="text-xs text-gray-800 uppercase bg-[#DDDDDD] dark:bg-gray-800 dark:text-gray-700">
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
                                 <tr class="bg-[#DDDDDD] border-b font-medium dark:bg-gray-800 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-600">
                                    <th scope="row" class="px-6 py-4 text-left font-medium text-gray-900 whitespace-normal dark:text-gray-900">
                                       01
                                    </th>
                                    <td class="px-12 py-4">
                                       #12451
                                    </td>
                                    <td class="px-12 py-4r">
                                       <span class="bg-[#F26938] bg-opacity-50  text-gray-600 text-sm font-medium mr-2 px-5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-600">
                                          Em preparo
                                       </span>
                                    </td>
                                    <td class="px-12 py-4">
                                       Rua da Harmonia
                                    </td>
                                    <td class="px-12 py-4">
                                       Dinheiro-Entrega
                                    </td>
                                    <td class="px-12 py-4">
                                       39,90
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                       <!-- <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Mais info...</a> -->
                                       
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
                                                               Detalhes do Pedido #{{ this.order_id }}
                                                            </h3>
                                                            <button @click="showDetail" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="orderDetail">
                                                               <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                               <span class="sr-only">Close modal</span>
                                                            </button>
                                                         </div>
                                                         <!-- Modal body -->
                                                         <div class="p-6 space-y-6">
                                                            <p class="text-base text-left leading-relaxed text-gray-500 dark:text-gray-400">
                                                               Cliente: {{ this.client_name }} <br/>
                                                               Pedido: {{ this.items }} <br/>
                                                               Endereço: {{ this.delivery_place }} <br/>
                                                               Preço: {{ this.price }} <br/>
                                                               Método de Pagamento: {{ this.form_of_payment }}
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
                                 </tr>
                                 <tr class="bg-[#DDDDDD] border-b font-medium dark:bg-gray-800 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-600">
                                    <th scope="row" class="px-6 py-4 text-left font-medium text-gray-900 whitespace-normal dark:text-gray-900">
                                       02
                                    </th>
                                    <td class="px-12 py-4">
                                       #12452
                                    </td>
                                    <td class="px-12 py-4">
                                       <span class="bg-[#F26938] bg-opacity-50  text-gray-600 text-sm font-medium mr-2 px-5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-600">
                                          Em preparo
                                       </span>
                                    </td>
                                    <td class="px-12 py-4">
                                       Retirar na loja
                                    </td>
                                    <td class="px-12 py-4">
                                       Débito-Site
                                    </td>
                                    <td class="px-12 py-4">
                                       51,00
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                       <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Mais info...</a>
                                    </td>
                                 </tr>
                                 <tr class="bg-[#DDDDDD] dark:bg-gray-800 font-medium hover:bg-white dark:hover:bg-gray-600">
                                    <th scope="row" class="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                       03
                                    </th>
                                    <td class="px-12 py-4">
                                    #12453
                                    </td>
                                    <td class="px-12 py-4">
                                       <span class="bg-[#F26938] bg-opacity-50  text-gray-600 text-sm font-medium mr-2 px-5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-600">
                                          Em preparo
                                       </span>
                                    </td>
                                    <td class="px-12 py-4">
                                       Fenda do Biquíni
                                    </td>
                                    <td class="px-12 py-4">
                                       PIX-Site
                                    </td>
                                    <td class="px-12 py-4">
                                       19,90
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                       <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Mais info...</a>
                                    </td>
                                 </tr>
                           </tbody>
                        </table>
                     </div>

               </div>

            </div>

            <div class="grid grid-cols-4 gap-4 pb-2 text-white" style="font-size: 18px; font-weight: 700;">
               
               <h2 class="flex items-start justify-start col-start-0 col-span-2">Média de pedidos</h2>
               <h2 class="flex items-start justify-start">Total de pedidos</h2>
               <h2 class="flex items-start justify-start">Pratos mais consumidos</h2>

            </div>

            <div class="grid grid-cols-4 gap-4 col-start-1 col-span-2 h-36">

               <div class="flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
                  <img src="..\assets\img\graphic.png" alt="graphichome">
               </div>

               <div class="flex items-center justify-center rounded bg-gray-50 h-32 dark:bg-gray-800">
                  <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
               </div>

               <div class="flex items-center justify-center rounded bg-gray-50 h-32 dark:bg-gray-800">
                  <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
               </div>
               
            </div>
         </div>
      </div>

   </div>
</template>

<script>
import RestaurantNavBar from '@/components/RestaurantNavBar.vue'
// import axios from 'axios';

export default ({
   name: 'HomeRestaurant',
   data() {
      return {
         orders: {
            order_id: '12451',
            items: ['parmegiana', 'coca', 'batata'],
            delivery_place: 'Rua da Harmonia',
            price: '93,00',
            form_of_payment: 'pix',
            client_name: 'Bonna Gil'
         },
         modalCard: false
      }
   },
   components: {
      RestaurantNavBar
   },
   methods: {
      showDetail() {
         console.log(this.modalCard)
         this.modalCard = !this.modalCard
         console.log(this.modalCard)
      }
   }
})
</script>
