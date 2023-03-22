<template>
<div class="bg-[#261918] bg-cover h-screen overflow-hidden">
    <div class="flex min-h-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
            <div class="image-logo">
                <img class="w-1/2 mx-auto" src="../assets/img/logo.png" alt="Forra o Bucho" />
            </div> <!--image-logo-->
            <form @submit.prevent="doLogin($event)" class="space-y-2 mt-5 bg-[#A62C21] p-5 rounded-[20px]" action="#" method="POST">
                <h3 class="text-center text-gray-50 ">Digite suas informações para forrar o bucho</h3> <!--h3-->
                <div class="-space-y-px shadow-sm">
                    <div>
                        <input id="email-address" name="email" v-model="email" type="email" autocomplete="off" required="" class="relative block border-0 w-full rounded-t-2xl bg-[#CA7557] py-3 px-3.5 placeholder:text-[#83271F] sm:text-sm sm:leading-6 mb-3 focus:outline-none" placeholder="CNPJ ou Email" />
                    </div>
                    <div>
                        <input id="password" name="password" v-model="password" type="password" autocomplete="off" required="" class="relative border-0 block w-full rounded-b-2xl bg-[#CA7557] py-3 px-3.5 placeholder:text-[#83271F] sm:text-sm sm:leading-6 focus:outline-none" placeholder="Senha" />
                    </div>
                </div> <!--inputs-email-password-->
            
                <div v-if="login_failure" @mousemove="hideText()" class="group flex w-full justify-center rounded-[10px] bg-[#83271F] p-1">
                    <p class="text-white text-[12px] font-bold text-center">Email/CPNJ ou senha inválidos</p>
                </div>

                <div class="flex items-center justify-end pr-2">
                    <div class="text-sm ">
                        <a href="#" class="font-medium text-[#FF8973] hover:text-[#261918]">Esqueci minha senha</a>
                    </div>
                </div> <!--link-to-password-->

                <div>
                    <button type="submit" class="group relative flex w-full justify-center rounded-[10px] bg-[#9DBF69] py-2 px-3 text-sm font-semibold text-white hover:bg-[#9DBF69]">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                        </span>
                        Login
                    </button>
                </div><!--login-button-->

                <div class="text-center text-[#FF8973]">
                    <span>Ou</span>
                </div> <!--text-to-register-->

                <div>
                    <button type="button" class="group relative flex w-full justify-center rounded-[10px] bg-[#83271F] py-2 px-3 text-sm font-semibold text-white">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                        </span>
                        Cadastre-se
                    </button>
                </div><!--register-button-->
            </form> <!--FORM-->
        </div>
    </div>
</div>
</template>

<script>
    import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

    export default {
        data() {
            return {
                email: '',
                password: '',
                login_failure: false,
            }
        },
        methods: {
            async doLogin() {
                const { email, password } = this;
                const auth = getAuth();
                try {  
                    await signInWithEmailAndPassword(auth, email, password);
                    this.login_failure = false;
                    // Próximo passo é mandar um push para a rota de /home-restaurante
                } catch (error) {
                    this.login_failure = true;
                    console.log(error.message);
                }
            },
            hideText() {
                this.login_failure = false;
            }
        }
    }
</script>