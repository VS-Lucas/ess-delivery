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
                :hour="object.hour"
                :estimated_time="object.estimated_time"
                :info_dishes="object.info_dishes"
                :client_name="object.client_name"
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
                const base_orders = res.data.pedidos;
                const name = res.data.nome;
                let aux = []
                this.keys = Object.keys(base_orders);
                this.keys.forEach(key => {
                    aux.push({
                        order_id: key,
                        img_src: this.get_image(key, base_orders),
                        restaurant_name: this.get_restaurant_name(key, base_orders),
                        items: this.get_items(key, base_orders),
                        price: this.get_total_price(key, base_orders),
                        form_of_payment: 'Cartão de crédito',
                        status: this.get_status(key, base_orders),
                        prices: this.get_prices(key, base_orders),
                        dishes: this.get_dishes(key, base_orders),
                        date: this.get_date(key, base_orders),
                        hour: this.get_hour(key, base_orders),
                        estimated_time: base_orders[key]['tempo_estimado'],
                        info_dishes: JSON.stringify(base_orders[key]['pratos']),
                        client_name: name
                    });
                    console.log(aux)
                });
                // console.log('client name' + client_name)
                this.orders = [...aux];
            }).catch((error) => {
                console.log(error.message)
            });
        },
        methods: {
            async get_client_name() {
                await axios.get('http://localhost:3000/get-name')
                .then(res => {
                    return res.data;
                }).catch(error => { 
                    console.error(error);
                })
            },  
            get_image(key, orders) {
                console.log('KEY> ' + key);
                var keys = Object.keys(orders[key]['pratos']);
                var name = ''
                 keys.forEach(ky =>{
                    name = orders[key]['pratos'][ky].restaurante;
                });

                var img_src = {
                    'Bode do Nô': 'https://bodedono.com.br/wp-content/uploads/2020/06/LOGO-1.png',
                    'Ratão Burguer': 'https://static.ifood-static.com.br/image/upload/t_medium/logosgde/495a9874-72de-493f-a56f-fa9a1ac47afc/202010131216_oCGu_i.png'
                };

                return img_src[name];
            },
            get_restaurant_name(key, orders) {
                var keys = Object.keys(orders[key]['pratos']);
                var name = '';
                keys.forEach(ky =>{
                    name = orders[key]['pratos'][ky].restaurante;
                });
                return name;
            },
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
                    var n = parseFloat(orders[key]['pratos'][ky].preco.replace(',', '.')) * parseInt(orders[key]['pratos'][ky].quantidade);
                    price += n;
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
                    prices.push(parseFloat(orders[key]['pratos'][ky].preco.replace(',', '.')) * parseInt(orders[key]['pratos'][ky].quantidade));
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
            },
            get_date(key, orders) {
                return orders[key]['data'];
            },
            get_hour(key, orders) {
                return orders[key]['hora'];
            }
        }
    }
</script>