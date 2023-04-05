<template>
    <body class="bg-[#261918] min-h-screen">
        <header class="bg-[#A62C21] w-full flex items-center justify-between py-4 mb-8">
            <a href="#">
                <img class="ml-4 pb-1 sm:w-32 sm:h-16 w-30 h-12 object-contain" src="../assets/img/logo-text.png" alt="logo">
            </a>
        </header> <!--header-->

        <div class="flex items-center w-full mb-3">
            <div>
                <a href="#">
                    <img class="ml-4 sm:w-12 sm:h-12 w-8 h-8 object-contain" src="../assets/img/back-button.png" alt="back-button">
                </a>
            </div> <!--back-butoon-->
            
            <div class="ml-7">
                <h1 class="text-white font-bold sm:text-2xl text-xl"> Histórico </h1>
            </div> <!--Text-->

            <div class="ml-auto">
                <SearchBar/>
            </div> <!--search bar-->

        </div> <!--bar-->

        <div class="flex items-center justify-center mx-auto mb-12">
            <hr class="w-11/12 items-center">
        </div>
        

        <div v-for="(object, index) in this.orders" :key="index">
            <div class="flex items-center justify-center mx-auto mb-5">
                <InfoCard
                :id="object.order_id"
                :imgSrc="object.img_src"
                :name="object.restaurant_name"
                :items="object.items"
                :date="object.date"
                :price="object.price"
                :form_pay="object.form_of_payment"
                />
            </div>
        </div>

        <footer class="w-full h-[5px]">

        </footer> <!--Correção da bordinha do final-->

    </body> <!--background-->
</template>

<style scoped>

</style>

<script>
    import InfoCard from '@/components/InfoCard.vue';
    import SearchBar from '@/components/SearchBar.vue';
    import axios from 'axios';
    
    export default {
        components: { InfoCard, SearchBar },
        mounted() {
            const token = localStorage.getItem('authToken');
            console.log(token);
            axios.post('http://localhost:3000/get-orders', {token: token})
            .then((res) => {
                this.orders = res.data;
                console.log(this.orders);
            }).catch(() => {

            })
        },
        data() {
            return {
                orders: []
            }
        }
    }
</script>