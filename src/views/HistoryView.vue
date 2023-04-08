<template>
    <body class="bg-[#261918] min-h-screen">
        <header class="bg-[#A62C21] w-full flex items-center justify-between py-4 mb-8">
            <a href="/clienthome">
                <img class="ml-4 pb-1 sm:w-32 sm:h-16 w-30 h-12 object-contain" src="../assets/img/logo-text.png" alt="logo">
            </a>
        </header> <!--header-->

        <div class="flex items-center w-full mb-3">
            <div>
                <a href="javascript:history.back()">
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
                :total_price="object.price"
                :form_pay="object.form_of_payment"
                :status="object.status"
                :prices="object.prices"
                :dishes="object.dishes"
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
        components: { SearchBar, InfoCard},
        data() {
            return {
                orders: [],
                keys: []
            }
        },
        mounted() {
            axios.get('http://localhost:3000/get-orders')
            .then((res) => {
                const base_orders = res.data;
                let aux = []
                this.keys = Object.keys(base_orders);

                this.keys.forEach(key => {
                    aux.push({
                        order_id: key,
                        img_src: 'https://www.pizzariaatlantico.com.br/mobile/img/logo.png',
                        restaurant_name: 'Anonymous',
                        items: this.get_items(key, base_orders),
                        date: 'xx/xx/xx',
                        price: this.get_total_price(key, base_orders),
                        form_of_payment: 'Cartão de crédito',
                        status: this.get_status(key, base_orders),
                        prices: this.get_prices(key, base_orders),
                        dishes: this.get_dishes(key, base_orders)
                    });
                });

                this.orders = [...aux];
            }).catch((error) => {
                console.log(error.message)
            });
        },
        methods: {
            get_items(key, orders) {
                var keys = Object.keys(orders[key]['pratos']);
                const items = [];
                keys.forEach(ky =>{
                    items.push(orders[key]['pratos'][ky].nome);
                });

                return items;
            },
            get_total_price(key, orders) {
                var keys = Object.keys(orders[key]['pratos']);
                var price = 0;
                keys.forEach(ky =>{
                    var n = orders[key]['pratos'][ky].preco.replace(',', '.');
                    price += parseFloat(n);
                });
                return `${price.toFixed(2)}`;
            },
            get_status(key, orders) {
                return orders[key]['status'];
            },
            get_prices(key, orders) {
                var keys = Object.keys(orders[key]['pratos']);
                var prices = [];
                keys.forEach(ky =>{
                    prices.push(orders[key]['pratos'][ky].preco);
                });

                return prices;
            },
            get_dishes(key, orders) {
                var keys = Object.keys(orders[key]['pratos']);
                var dishes = []
                keys.forEach(ky =>{
                    dishes.push(orders[key]['pratos'][ky]);
                    console.log(dishes);
                });

                return dishes;
            }
        }
    }
</script>