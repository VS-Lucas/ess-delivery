<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
</style>

<template>
   <div class="home-restaurante bg-[#261918]">
        
      <nav class="fixed top-0 z-50 w-full h-30 pl-7 pr-7 pb-2 pt-2 bg-[#A62C21] dark:bg-gray-800">
         
         <div class="lg:px-1">
            <div class="flex items-center justify-between">

               <!-- Logo da navbar -->
               <div class="flex items-center justify-start">
                  <img :src='require(`@/assets/img/logo-text.png`)' class="h-12 mr-3" alt="Forra Bucho logo" />
               </div>

               <div class="flex items-center">

                  <div class="ml-8">
                     
                     <button id="dropdown-notification-button" type="button" aria-expanded="false" data-dropdown-toggle="dropdown-notification">
                        <span class="sr-only">Notificações</span>
                        <img class="h-9" :src='require(`@/assets/img/bell.png`)' alt="alert icon">
                     </button>

                     <!-- <button id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification" class="inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400" type="button"> 
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
                        <div class="relative flex">
                           <div class="relative inline-flex w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-2 right-3 dark:border-gray-900"></div>
                        </div>
                     </button> -->

                     <!-- Dropdown menu -->
                     <!-- <div id="dropdownNotification" class="z-20 hidden w-full md:h-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700" aria-labelledby="dropdownNotificationButton">
                     <div class="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white"></div>
                     
                     <div class="divide-y divide-gray-100 dark:divide-gray-700">
                        <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                           <div class="flex-shrink-0">
                           <img class="rounded-full w-11 h-11" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image">
                           <div class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">
                              <svg class="w-3 h-3 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                           </div>
                           </div>
                           <div class="w-full pl-3">
                              <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">New message from <span class="font-semibold text-gray-900 dark:text-white">Jese Leos</span>: "Hey, what's up? All set for the presentation?"</div>
                              <div class="text-xs text-blue-600 dark:text-blue-500">a few moments ago</div>
                           </div>
                        </a>
                        <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                           <div class="flex-shrink-0">
                           <img class="rounded-full w-11 h-11" src="/docs/images/people/profile-picture-2.jpg" alt="Joseph image">
                           <div class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-gray-900 border border-white rounded-full dark:border-gray-800">
                              <svg class="w-3 h-3 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path></svg>
                           </div>
                           </div>
                           <div class="w-full pl-3">
                              <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span class="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span> and <span class="font-medium text-gray-900 dark:text-white">5 others</span> started following you.</div>
                              <div class="text-xs text-blue-600 dark:text-blue-500">10 minutes ago</div>
                           </div>
                        </a>
                        <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                           <div class="flex-shrink-0">
                           <img class="rounded-full w-11 h-11" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image">
                           <div class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-red-600 border border-white rounded-full dark:border-gray-800">
                              <svg class="w-3 h-3 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
                           </div>
                           </div>
                           <div class="w-full pl-3">
                              <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span> and <span class="font-medium text-gray-900 dark:text-white">141 others</span> love your story. See it and view more stories.</div>
                              <div class="text-xs text-blue-600 dark:text-blue-500">44 minutes ago</div>
                           </div>
                        </a>
                        <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                           <div class="flex-shrink-0">
                           <img class="rounded-full w-11 h-11" src="/docs/images/people/profile-picture-4.jpg" alt="Leslie image">
                           <div class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-green-400 border border-white rounded-full dark:border-gray-800">
                              <svg class="w-3 h-3 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                           </div>
                           </div>
                           <div class="w-full pl-3">
                              <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> mentioned you in a comment: <span class="font-medium text-blue-500" href="#">@bonnie.green</span> what do you say?</div>
                              <div class="text-xs text-blue-600 dark:text-blue-500">1 hour ago</div>
                           </div>
                        </a>
                        <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                           <div class="flex-shrink-0">
                           <img class="rounded-full w-11 h-11" src="/docs/images/people/profile-picture-5.jpg" alt="Robert image">
                           <div class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-purple-500 border border-white rounded-full dark:border-gray-800">
                              <svg class="w-3 h-3 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                           </div>
                           </div>
                           <div class="w-full pl-3">
                              <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span class="font-semibold text-gray-900 dark:text-white">Robert Brown</span> posted a new video: Glassmorphism - learn how to implement the new design trend.</div>
                              <div class="text-xs text-blue-600 dark:text-blue-500">3 hours ago</div>
                           </div>
                        </a>
                     </div>
                     <a href="#" class="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                        <div class="inline-flex items-center ">
                           <svg class="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
                           View all
                        </div>
                     </a>
                     </div> -->
                     
                  </div>

                  <div class="ml-3">

                     <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                        <span class="sr-only">Open user menu</span>
                        <img class="w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
                     </button>

                  </div>

               </div>
            </div>
         </div>
      </nav>


      <div class="p-4">

         <div class="p-4 mt-16" style="font-family: Montserrat;">

            <div class="grid grid-cols-4 gap-4 mb-7">

               <div class="flex items-start justify-start" style="font-weight: 700;">
                  <h1 class="text-white" style="font-size: 30px;">Dashboard</h1>
               </div>

               <div class="col-end-5">
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
                                       <button @click="showDetail" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                                       Mais info...
                                       </button>

                                       <!-- Main modal -->
                                       <div v-if="this.modalCard">
                                          <div class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                                             <div class="relative w-full h-full max-w-2xl md:h-auto">
                                                <!-- Modal content -->
                                                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                                      <!-- Modal header -->
                                                      <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                                         <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                                            Detalhes do Pedido
                                                         </h3>
                                                         <button @click="showDetail" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="orderListModal">
                                                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                            <span class="sr-only">Close modal</span>
                                                         </button>
                                                      </div>
                                                      <!-- Modal body -->
                                                      <div class="p-6 space-y-6">
                                                         <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                                                         </p>
                                                         <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                            The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                                                         </p>
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
            form_of_payment: 'pix'
         },
         modalCard: false
      }
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
