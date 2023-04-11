<template>

    <nav class="bg-[#A62C21] px-2 sm:px-6 py-3.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 ">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
    
        <a class="flex items-center">
            <img src="@\assets\img\logo_navbar.png" class="h-9 mr-3 sm:h-16" alt="Logo"> <!-- sm:h-16 altera o tamanho da logo e consequentemente o da nav bar-->
        </a>
    
      </div>
    
    </nav>
    

    </template>
        
        
 <script scoped>
    export default {
        name: 'NavBar',
        props: {
        msg: String
        }
    }
</script>