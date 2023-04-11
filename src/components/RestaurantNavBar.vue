<template>

    <div>

        <nav class="bg-[#A62C21] px-2 py-3.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 ">

            <div class="container flex flex-wrap justify-between items-center mx-auto">

                <a class="flex items-center justify-start">
                    <img src="@\assets\img\logo_navbar.png" class="h-9 sm:h-16" alt="Logo"> <!-- sm:h-16 altera o tamanho da logo e consequentemente o da nav bar-->
                </a>
                
                <div class="inline-flex justify-end items-center">

                    <button type="button" @click="showNotificationsMenu" data-modal-target="notifications" data-modal-toggle="notifications" class="z-20 text-sm font-medium text-center text-white focus:outline-none dark:text-gray-400">
                        <svg class="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
                    </button>
                    
                    <button type="button" class="px-5" @click="showProfileMenu" data-modal-target="profile" data-modal-toggle="profile">
                        <img src="@\assets\img\user_icon.png" alt="Descrição da imagem" class="h-14" >
                    </button>

                </div>

            </div>

        </nav>

        <div v-if="this.notificationsMenu" class="right-0">

            <div class="fixed z-10 inset-0 overflow-y-auto bg-opacity-60 bg-[#261918] flex items-center justify-center px-4 rounded-lg overflow-hidden shadow-xl"></div>

            <div id="notifications" tabindex="-1" aria-hidden="true" aria-modal="true" class="fixed right-0 mr-4 mt-16 z-50 w-[380px] max-h-[80vh] p-4 overflow-x-hidden overflow-y-auto h-[calc(100%-1rem)] md:h-full">

                <div class="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
                    Notificações:
                </div>

                <div v-for="(object, index) in this.orders" :key="index">
                    
                    <NotificationItem
                    :orderId="object.orderId"
                    :status="object.status"
                    :clientName="object.clientName"
                    :date="object.date"
                    :time="object.time"
                    />
                    
                </div>


                <div class="block rounded-b-lg py-1 text-sm w-full font-medium text-center text-gray-900 bg-gray-50"></div>
                
            </div>
        </div>

        <div v-if="this.profileMenu">

            <div class="fixed z-10 inset-0 overflow-y-auto bg-opacity-60 bg-[#261918] flex items-center justify-center min-h-screen px-4 rounded-lg shadow-xl"></div>

            <div id="profile" tabindex="-1" aria-hidden="true" aria-modal="true" class="fixed right-0 mr-4 mt-16 z-50 w-[300px] p-4 overflow-x-hidden overflow-y-auto h-[calc(100%-1rem)] md:h-full">

                <div class="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
                    Perfil:
                </div>

                <button type="button" @click="goToUpdateRegister" class="block py-2 text-sm w-full font-medium text-center text-gray-500 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                    <div class="inline-flex items-center text-sm">
                        Atualizar dados cadastrais
                    </div>
                </button>

                <button type="button" @click="goToUnsubscribe" class="block py-2 text-sm w-full font-medium text-center text-gray-500 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                    <div class="inline-flex items-center text-sm">
                        Descadastrar restaurante
                    </div>
                </button>

                <button type="button" @click="logOutAccount" class="block rounded-b-lg py-2 text-sm w-full font-medium text-center text-gray-500 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                    <div class="inline-flex items-center text-sm">
                        Sair da conta
                    </div>
                </button>

            </div>

        </div>

    </div>

</template>
        
        
<script scoped>

    import NotificationItem from '@/components/NotificationItem.vue';
    import axios from 'axios';

    export default {
        name: 'RestaurantNavBar',
        data() {
            return {
                notificationsMenu: false,
                profileMenu: false,
                orders: [],
                key: []
            }
        },
        components: {
            NotificationItem
        },
        props: {
            msg: String
        },
        methods: {
            showNotificationsMenu() {
                if (this.notificationsMenu) {
                    this.notificationsMenu = false;
                }
                else {
                    if (this.profileMenu) {
                        this.profileMenu = false;
                        this.notificationsMenu = true;
                    }
                    else {
                        this.notificationsMenu = true;
                    }
                }
            },
            showProfileMenu() {
                if (this.profileMenu) {
                    this.profileMenu = false;
                }
                else {
                    if (this.notificationsMenu) {
                        this.notificationsMenu = false;
                        this.profileMenu = true;
                    }
                    else {
                        this.profileMenu = true;
                    }
                }
            },
            goToUpdateRegister() {
                this.$router.push('/update-register')
            },
            goToUnsubscribe() {
                this.$router.push('/unsubscribe-restaurant')
            },
            logOutAccount() {
                this.$router.push('/login')
            },
            getStatus(key, id, orders) {
                console.log(orders[key][id]['status']);
                return orders[key][id]['status'];
            },
            getDate(key, id, orders) {
                return orders[key][id]['data']
            },
            getTime(key, id, orders) {
                return orders[key][id]['hora']
            }
        },
        mounted() {
            
            axios.get('http://localhost:3000/restaurant-orders')
            .then(response => {
                const base_orders = response.data.pedido
                console.log(base_orders)
                let aux = []
                var keys = Object.keys(base_orders)

                keys.forEach(key => {
                    var ids = Object.keys(base_orders[key])
                    ids.forEach(id => {
                        aux.push({
                            orderId: id,
                            status: this.getStatus(key, id, base_orders),
                            clientName: key,
                            date: this.getDate(key, id, base_orders),
                            time: this.getTime(key, id, base_orders)
                            })
                    })
                    
                })
                this.orders = [...aux];
            })
            .catch(error => {
                console.error(error)
            })
            
        }
    }  
</script>