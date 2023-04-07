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
                    
                    <button class="px-5" @click="showProfileMenu" data-modal-target="profile" data-modal-toggle="profile">
                        <img src="@\assets\img\user_icon.png" alt="Descrição da imagem" class="h-14" >
                    </button>

                </div>

            </div>

        </nav>

        <div v-if="this.notificationsMenu" class="right-0">

            <div class="fixed z-10 inset-0 overflow-y-auto bg-opacity-60 bg-[#261918] flex items-center justify-center min-h-screen px-4 rounded-lg overflow-hidden shadow-xl"></div>

            <div id="notifications" tabindex="-1" aria-hidden="true" aria-modal="true" class="fixed right-0 mr-4 mt-16 z-50 w-[500px] p-4 overflow-x-hidden overflow-y-auto h-[calc(100%-1rem)] md:h-full">

                <div class="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
                    Notificações:
                </div>

                <div class="divide-y bg-white divide-gray-100 dark:divide-gray-700">

                    <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                        
                        <div class="w-full pl-3">
                            <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">New message from <span class="font-semibold text-gray-900 dark:text-white">Jese Leos</span>: "Hey, what's up? All set for the presentation?"</div>
                            <div class="text-xs text-blue-600 dark:text-blue-500">a few moments ago</div>
                        </div>

                    </a>

                    <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">

                        <div class="w-full pl-3">
                            <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span class="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span> and <span class="font-medium text-gray-900 dark:text-white">5 others</span> started following you.</div>
                            <div class="text-xs text-blue-600 dark:text-blue-500">10 minutes ago</div>
                        </div>

                    </a>

                    <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">

                        <div class="w-full pl-3">
                            <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span> and <span class="font-medium text-gray-900 dark:text-white">141 others</span> love your story. See it and view more stories.</div>
                            <div class="text-xs text-blue-600 dark:text-blue-500">44 minutes ago</div>
                        </div>

                    </a>

                    <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                        
                        <div class="w-full pl-3">
                            <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> mentioned you in a comment: <span class="font-medium text-blue-500" href="#">@bonnie.green</span> what do you say?</div>
                            <div class="text-xs text-blue-600 dark:text-blue-500">1 hour ago</div>
                        </div>

                    </a>

                    <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">

                        <div class="w-full pl-3">
                            <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span class="font-semibold text-gray-900 dark:text-white">Robert Brown</span> posted a new video: Glassmorphism - learn how to implement the new design trend.</div>
                            <div class="text-xs text-blue-600 dark:text-blue-500">3 hours ago</div>
                        </div>

                    </a>

                </div>

                <button type="button" class="block rounded-b-lg py-2 text-sm w-full font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                    <div class="inline-flex items-center">
                        <svg class="w-4 h-4 mr-2 rounded-b-lg text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
                            Ver tudo
                    </div>
                </button>
                
            </div>

        </div>

        <div v-if="this.profileMenu">

            <div class="fixed z-10 inset-0 overflow-y-auto bg-opacity-60 bg-[#261918] flex items-center justify-center min-h-screen px-4 rounded-lg overflow-hidden shadow-xl"></div>

                <div id="profile" tabindex="-1" aria-hidden="true" aria-modal="true" class="fixed right-0 mr-4 mt-16 z-50 w-[300px] p-4 overflow-x-hidden overflow-y-auto h-[calc(100%-1rem)] md:h-full">

                <div class="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
                    Perfil:
                </div>

                <button type="button" @click="goToUpdateRegister" class="block rounded-b-lg py-2 text-sm w-full font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                    <div class="inline-flex items-center">
                        Atualizar dados cadastrais
                    </div>
                </button>

            </div>

        </div>

    </div>

</template>
        
        
<script scoped>
    export default {
        name: 'RestaurantNavBar',
        data() {
            return {
                notificationsMenu: false,
                profileMenu: false
            }
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
                    this.notificationsMenu = true;
                }
            },
            showProfileMenu() {
                if (this.profileMenu) {
                    this.profileMenu = false;
                }
                else {
                    this.profileMenu = true;
                }
            },
            goToUpdateRegister() {
                this.$router.push('/update-register')
            }
        }
    }  
</script>