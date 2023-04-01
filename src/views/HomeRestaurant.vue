<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
</style>

<template>
   <div class="home-restaurante bg-[#261918]">
        
      <nav class="fixed top-0 z-50 w-full pl-7 pr-7 pb-2 pt-2 bg-[#A62C21] dark:bg-gray-800">
         
         <div class="lg:px-1">
            <div class="flex items-center justify-between">

               <!-- Logo da navbar -->
               <div class="flex items-center justify-start">
                  <img :src='require(`@/assets/img/logo-text.png`)' class="h-12 mr-3" alt="Forra Bucho logo" />
               </div>

               <div class="flex items-center">

                  <div class="ml-8">
                     
                     <button type="button" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                        <span class="sr-only">Notificações</span>
                        <img class="h-10" :src='require(`@/assets/img/bell.png`)' alt="alert icon">
                     </button>
                     
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

         <div class="p-4 mt-16">

            <div class="grid grid-cols-4 gap-4 mb-4" style="font-family: Montserrat;">

               <div class="flex items-start justify-start" style="font-weight: 700;">
                  <h1 class="text-white" style="font-size: 30px;">Dashboard</h1>
               </div>

               <div class="flex items-center justify-start pl-4 h-8 rounded-full bg-gray-50 dark:bg-gray-800 col-end-5">
                  <p class="text-2xl text-gray-400 dark:text-gray-500" style="font-size: 15px;">Buscar...</p>
               </div>
               
               <p class="flex items-start justify-start text-white" style="font-size: 15px; font-weight: 600;">Data (ver como fazer)</p>

            </div>

            <div class="flex items-center justify-center h-56 mb-4 rounded bg-gray-50 dark:bg-gray-800">
               <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>

            <div class="grid grid-cols-4 gap-4 pb-2 text-white" style="font-family: Montserrat; font-size: 18px; font-weight: 700;">
               
               <h2 class="flex items-start justify-start col-start-0 col-span-2">Média de pedidos</h2>
               <h2 class="flex items-start justify-start">Total de pedidos</h2>
               <h2 class="flex items-start justify-start">Pratos mais consumidos</h2>

            </div>

            <div class="grid grid-cols-4 gap-4 h-36" style="font-family: Montserrat;">

               <div class="flex items-center justify-center rounded bg-gray-50 h-32 dark:bg-gray-800 col-start-0 col-span-2">
                  <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
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
