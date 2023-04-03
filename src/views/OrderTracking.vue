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
            <div class="col-span-1 bg-[#541F1B] lg:w-[20rem] lg:h-[15rem] rounded-[15px]">

            </div>
            
            <div class="col-span-1 bg-[#541F1B] lg:w-[20rem] lg:h-[15rem] rounded-[15px]">

            </div>
            
            <div class="col-span-1 bg-[#A62C21] lg:w-[20rem] lg:h-[15rem] rounded-[15px]">

            </div>
        </div>
    </div>

    <div class="mx-auto mt-5 flex items-center justify-center">
        <div>"
            <button class="bg-[#541F1B] text-white font-bold rounded-[15px] p-4">Cancelar pedido</button>
        </div>"        
    </div>
</body>    
</template>