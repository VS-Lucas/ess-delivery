<template>
    <div class="bg-[#A62C21] sm:w-11/12 sm:h-[150px] w-[450px] h-[150px] grid grid-cols-5 rounded-[20px]">
    
        <div class="flex col-span-1 text-white font-medium items-center">
            <div class="flex flex-col items-center justify-center ml-7 sm:mr-0 mr-4">
                <img class="rounded-[10px] sm:w-28 sm:h-20 w-10 h-10 mb-1" src="https://bodedono.com.br/wp-content/uploads/2020/06/LOGO-1.png">
                <p class="text-white  font-bold sm:text-[15px] text-[12px]">Bode nô</p>
            </div>
            <div class="border-l border-white h-28 mx-auto"></div>
        </div>
        
        <div class="flex col-span-1 text-white">
            <div class="flex flex-col items-center justify-center ml-6">
                <div class="max-h-32 overflow-hidden truncate">
                    <div v-for="(dish, index) in items" :key="index">
                        <p class="text-white sm:text-[17px] text-[12px]">{{ dish }}</p>
                    </div>
                   
                </div>
               <p v-if="overflow" class="text-white sm:text-[17px] text-[12px] text-center mr-16">...</p>
            </div>
        </div>
        
        <div class="col-span-1 text-white font-medium flex items-center justify-center">
            <div class="flex flex-col items-center justify-center">
                <p class="bg-[#261918] p-1 rounded-[15px]"> Status:</p>
                <p>{{ this.status }}</p>
            </div>
        </div>

        <div class="flex col-span-1 text-white font-medium">
            <div class="flex flex-col items-center justify-center">
                <p class="text-[#261918] font-bold sm:text-[17px] text-[12px] sm:mr-0 mr-3">ID: #{{ id }}</p>
                <p class="text-[#261918] font-bold sm:text-[17px] text-[12px] sm:mr-0 mr-3">{{ date }}</p>
            </div>
        </div>

        <div class="flex items-center col-span-1 text-white font-medium">
            <div class="flex items-center justify-center">
                <p class="text-white font-bold sm:text-[17px] text-[12px]">R$ {{ total_price }} ({{ form_pay }})</p>
                <button class="ml-6" @click="goToDetails()" type="submit"><img src="../assets/img/next-button.png" alt=""></button>
            </div>
        </div>
    </div>    
</template>


<script>
    export default {
        data() {
            return {
                overflow: false,
            }
        },
        props: {
            id: String,
            imgSrc: String,
            name: String,
            items: Array,
            date: String,
            total_price: String,
            form_pay: String,
            status: String,
            prices: Array,
            dishes: Array
        },
        methods: {
            goToDetails() {
                this.$router.push({
                    name: 'history-details',
                    params: 
                    {
                        id: this.id, 
                        imgSrc: this.imgSrc,
                        name: this.name,
                        items: this.items,
                        date: this.date,
                        total_price: this.total_price,
                        form_pay: this.form_pay,
                        status: this.status,
                        prices: this.prices,
                        dishes: JSON.stringify(this.dishes)
                    }
                })
            },
        },
        mounted() {
            this.overflow = this.items.length > 5;
        }
    }
</script>