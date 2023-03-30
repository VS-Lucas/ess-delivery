<template>
    <div class="clienthome bg-[#261918] h-screen relative">
       <NavBar /> <!-- NavBar dos componentes-->
        <div class="absolute left-10 top-32"> <!-- Button "Meus Pedidos"-->
          <button type="button" class="focus:outline-none text-white bg-[#541F1B] hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-l px-7 py-3 mr-10 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Meus pedidos</button>
        </div>
  
        <div class= "absolute right-72 top-32"> <!-- Search Bar, onde muda o tamanho é em pl-10 na linha 15, e na linha 8 define a posição, relativa a div da linha 2-->
          <form>   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" class="block w-100 p-10 pl-10 text-sm py-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search..." required>
                <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>
    </div>
  
    <div class= " absolute right-32 top-32 focus:outline-none bg-[#A62C21] hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-l inline-block px-6 py-1 mr-10 mb-2 "> <!-- Button "Carrinho"-->
          <button class="px-0 hover:bg-red-800 focus:ring-4 focus:ring-red-300  ">
          <img src="@\assets\img\carrinho.png" alt="Descrição da imagem" class=" h-10 w-11" >
          </button>
    </div>

    <div class="absolute flex justify-center space-x-10  top-56 bg-cover inset-x-0"> <!-- Flexbox dos cards do restaurante e das comidas-->
      <!-- Botão dos restaurantes -->
        <div>
          <button class="focus:outline-none focus:ring-4 focus:ring-red-300">  
            <img src="@\assets\img\restaurantes.png" alt="Descrição da imagem" style="width: 600px;" class="rounded-lg transform hover:scale-105 transition duration-300"> <!-- fica um pouco maior quando passa o mouse por cima-->
          </button> 
        </div>
      
      <!-- Botão das comidas-->
        <div>
          <button class="focus:outline-none focus:ring-4 focus:ring-red-300">  
            <img src="@\assets\img\comidas.png" alt="Descrição da imagem" style="width: 600px;" class="rounded-lg transform hover:scale-105 transition duration-300"> <!-- fica um pouco maior quando passa o mouse por cima-->
          </button> 
        </div>
        </div>

    <div class="absolute flex justify-center space-x-10 bottom-12 bg-cover inset-x-0"> <!-- Flexbox dos cards de ofertas-->
        
        <div > <!-- Botão das ofertas (1) -->
        <button class="focus:outline-none focus:ring-4 focus:ring-red-300">  
          <img src="@\assets\img\primeiraopcao.png" alt="Descrição da imagem" style="width: 320px;" class="rounded-lg transform hover:scale-105 transition duration-300"> <!-- fica um pouco maior quando passa o mouse por cima-->
        </button> 
        </div>

        <div> <!-- Botão das ofertas (2) -->
          <button class="focus:outline-none focus:ring-4 focus:ring-red-300">  
            <img src="@\assets\img\segundaopcao.png" alt="Descrição da imagem" style="width: 320px;" class="rounded-lg transform hover:scale-105 transition duration-300"> <!-- fica um pouco maior quando passa o mouse por cima-->
          </button> 
        </div>

        <div> <!-- Botão das ofertas (3) -->
          <button class="focus:outline-none focus:ring-4 focus:ring-red-300">  
            <img src="@\assets\img\terceiraopcao.png" alt="Descrição da imagem" style="width: 320px;" class="rounded-lg transform hover:scale-105 transition duration-300"> <!-- fica um pouco maior quando passa o mouse por cima-->
          </button> 
        </div>

    </div>

    </div>
  
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue'
  
  export default {
    name: 'ClientHome',
    components: {
      NavBar,
    }
  }
  </script>
  
  