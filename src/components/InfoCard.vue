<template>
    <div class="bg-[#A62C21] sm:w-11/12 sm:h-[150px] w-[450px] h-[150px] grid grid-cols-5 rounded-[20px]">
    
        <div class="flex col-span-1 text-white font-medium items-center">
            <div class="flex flex-col items-center justify-center ml-7 sm:mr-0 mr-4">
                <img class="rounded-[10px] sm:w-28 sm:h-20 w-10 h-10 mb-1" :src="imgSrc">
                <p class="text-white  font-bold sm:text-[15px] text-[12px]">{{ name }}</p>
            </div>
            <div class="border-l border-white h-28 mx-auto"></div>
        </div>
        <div class="flex col-span-1 text-white">
            <div class="flex flex-col items-center justify-center ml-6">
                <div v-for="(dish, index) in items" :key="index">
                    <p class="text-white sm:text-[17px] text-[12px]">{{ dish }}</p>
                </div>
            </div>
        </div>
        
        <div class="col-span-1 text-white font-medium">
        </div>

        <div class="flex col-span-1 text-white font-medium">
            <div class="flex flex-col items-center justify-center">
                <p class="text-black font-bold sm:text-[17px] text-[12px] sm:mr-0 mr-3">ID: #{{ id }}</p>
                <p class="text-white font-bold sm:text-[17px] text-[12px] sm:mr-0 mr-3">{{ date }}</p>
            </div>
        </div>
        <div class="flex items-center col-span-1 text-white font-medium">
            <div class="flex items-center justify-center">
                <p class="text-white font-bold sm:text-[17px] text-[12px]">R$ {{ price }} ({{ form_pay }})</p>
                <button class="ml-6" type="submit"><img src="../assets/img/next-button.png" alt=""></button>
            </div>
        </div>
    </div>    
</template>


<script>
    export default {
        props: {
            id: String,
            imgSrc: String,
            name: String,
            items: Array,
            date: String,
            price: String,
            form_pay: String
        }
    }
</script>