<template>
  <div>
    <div class="bg-gradient-to-b from-[#261918] to-[#A62C21]">
      <div class="bg-no-repeat bg-fixed md:grid md:grid-cols-7 md:gap-5"
           style="background-image: url('img/food_register_bg.png');
                  background-position: right">
        <div class="md:col-start-2 md:col-span-4 mt-5 md:mt-0">
            <br>
          <form action="#" method="POST">
            <div class="flex justify-center items-center">
              <div class="shadow sm:overflow-hidden sm:rounded-md w-full">
                <div class="space-y-6 bg-gray-50 px-4 py-5 sm:p-6">
                  <br>
                  <div class="grid grid-cols-11 gap-6">
                    <div class="col-span-11 sm:col-start-2 sm:col-span-4">
                      <h2 class="text-4xl font-bold leading-10 text-gray-800">Responsável da loja</h2>
                    </div>
                    <div class="col-span-11 sm:col-start-7 sm:col-span-4">
                      <p class="mt-1 text-sm text-gray-700">Informe os dados da pessoa que tem o nome no contrato social da empresa.</p>
                    </div>
                  </div>
                  <br>
                  <br>
                  <div class="grid grid-cols-11 gap-6">                     
                    <div class="col-span-11 sm:col-start-2 sm:col-span-9">
                      <div class="relative">
                        <input type="text" id="nome" v-model="nome" @input="onlyLetters" required class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="nome" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Nome Completo</label>
                      </div>
                    </div>

                    <div class="col-span-11 sm:col-start-2 sm:col-span-4">
                      <div class="relative">
                        <input type="text" id="cpf" v-model="cpf" v-mask="['###.###.###-##']" required pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="cpf" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">CPF</label>
                      </div>
                    </div>

                    <div class="col-span-11 sm:col-start-7 sm:col-span-4">
                      <div class="relative">
                        <input type="text" id="rg" v-model="rg" v-mask="['#.###.###']" required pattern="\d{1}.\d{3}.\d{3}" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="rg" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">RG</label>
                      </div>
                    </div>

                    <div class="col-span-11 sm:col-start-2 sm:col-span-9">
                      <div class="py-5">
                        <div class="border-t border-black" />
                      </div>
                    </div>                    
                  </div>
                  
<!--///////////////////////////////////////////////////-->
                  
                  <div class="grid grid-cols-11 gap-6">
                    <div class="col-span-11 sm:col-start-2 sm:col-span-4">
                      <h2 class="text-4xl font-bold leading-10 text-gray-800">Informações da loja</h2>
                    </div>
                    <div class="col-span-11 sm:col-start-7 sm:col-span-4">
                      <p class="mt-1 text-sm text-gray-700">Preencha com os dados do seu negócio.</p>
                    </div>
                  </div>
                  <br>
                  <br>
                  <div class="grid grid-cols-11 gap-6">                     
                    <div class="col-span-11 sm:col-start-2 sm:col-span-4">
                      <div class="relative">
                        <input type="text" id="cnpj" v-model="cnpj" v-mask="['##.###.###/####-##']" required pattern="\d{2}.\d{3}.\d{3}/\d{4}-\d{2}" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="cnpj" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">CNPJ</label>
                      </div>
                      <div v-if="cnpj_failure" @mousemove="hideText()" class="group flex w-full justify-center rounded-b-lg bg-gray-100 p-1">
                        <p class="text-[#83271F] text-[12px] font-bold text-center">CNPJ já cadastrado</p>
                      </div>
                    </div>

                    <div class="col-span-11 sm:col-start-7 sm:col-span-4">
                      <div class="relative">
                        <input type="text" id="razao_social" v-model="razao_social" required class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="razao_social" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Razão Social</label>
                      </div>
                      <div v-if="razao_social_failure" @mousemove="hideText()" class="group flex w-full justify-center rounded-b-lg bg-gray-100 p-1">
                        <p class="text-[#83271F] text-[12px] font-bold text-center">Razão social já cadastrado</p>
                      </div>
                    </div>

                    <div class="col-span-11 sm:col-start-2 sm:col-span-4">
                      <div class="relative">
                        <input type="text" id="nome_loja" v-model="nome_loja" required class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="nome_loja" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Nome da Loja</label>
                      </div>
                      <div v-if="nome_loja_failure" @mousemove="hideText()" class="group flex w-full justify-center rounded-b-lg bg-gray-100 p-1">
                        <p class="text-[#83271F] text-[12px] font-bold text-center">Nome da loja já cadastrado</p>
                      </div>
                    </div>

                    <div class="col-span-11 sm:col-start-7 sm:col-span-4">
                      <div class="relative">
                        <input type="tel" id="telefone" v-model="telefone" v-mask="['(##) #####-####']" required pattern="\(\d{2}\) \d{5}-\d{4}" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                        <label for="telefone" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Telefone</label>
                      </div>
                      <div v-if="telefone_failure" @mousemove="hideText()" class="group flex w-full justify-center rounded-b-lg bg-gray-100 p-1">
                        <p class="text-[#83271F] text-[12px] font-bold text-center">Telefone já cadastrado</p>
                      </div>
                    </div>

                    <div class="col-span-11 sm:col-start-4 sm:col-span-5">   
                      <div class="relative">
                        <input type="text" id="especialidade" v-model="especialidade" @input="onlyLetters" required class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="especialidade" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Especialidade</label>
                      </div>   
                    </div>

                    <div class="col-span-11 sm:col-start-2 sm:col-span-9">
                      <div class="py-5">
                        <div class="border-t border-black" />
                      </div>
                    </div>                    
                  </div>
                  
<!--///////////////////////////////////////////////////-->
                  
                  <div class="grid grid-cols-11 gap-6">
                    <div class="col-span-11 sm:col-start-2 sm:col-span-4">
                      <h2 class="text-4xl font-bold leading-10 text-gray-800">Endereço da loja</h2>
                    </div>
                    <div class="col-span-11 sm:col-start-7 sm:col-span-4">
                      <p class="mt-1 text-sm text-gray-700">Preencha com as informações de endereço da sua loja.</p>
                    </div>
                  </div>
                  <br>
                  <br>
                  <div class="grid grid-cols-11 gap-6">                     
                    <div class="col-span-11 sm:col-start-2 sm:col-span-4">
                      <div class="relative">
                        <input type="text" id="cep" v-model="cep" v-mask="['#####-###']" required pattern="\d{5}-\d{3}" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="cep" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">CEP</label>
                      </div>
                    </div>

                    <div class="col-span-11 sm:col-start-7 sm:col-span-4">
                      <div class="relative">
                        <select id="estado_uf" v-model="estado_uf" required class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" >
                          <option disabled selected>---</option>
                          <option value="AC">Acre</option>
                          <option value="AL">Alagoas</option>
                          <option value="AP">Amapá</option>
                          <option value="AM">Amazonas</option>
                          <option value="BA">Bahia</option>
                          <option value="CE">Ceará</option>
                          <option value="DF">Distrito Federal</option>
                          <option value="ES">Espírito Santo</option>
                          <option value="GO">Goiás</option>
                          <option value="MA">Maranhão</option>
                          <option value="MT">Mato Grosso</option>
                          <option value="MS">Mato Grosso do Sul</option>
                          <option value="MG">Minas Gerais</option>
                          <option value="PA">Pará</option>
                          <option value="PB">Paraíba</option>
                          <option value="PR">Paraná</option>
                          <option value="PE">Pernambuco</option>
                          <option value="PI">Piauí</option>
                          <option value="RJ">Rio de Janeiro</option>
                          <option value="RN">Rio Grande do Norte</option>
                          <option value="RS">Rio Grande do Sul</option>
                          <option value="RO">Rondônia</option>
                          <option value="RR">Roraima</option>
                          <option value="SC">Santa Catarina</option>
                          <option value="SP">São Paulo</option>
                          <option value="SE">Sergipe</option>
                          <option value="TO">Tocantins</option>
                        </select>
                        <label for="estado_uf" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">UF</label>
                      </div>
                    </div>

                    <div class="col-span-11 sm:col-start-2 sm:col-span-4">
                      <div class="relative">
                        <input type="text" id="cidade" v-model="cidade" required class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="cidade" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Cidade</label>
                      </div>
                    </div>

                    <div class="col-span-11 sm:col-start-7 sm:col-span-4">
                      <div class="relative">
                        <input type="text" id="bairro" v-model="bairro" required class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="bairro" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Bairro</label>
                      </div>
                    </div>

                    <div class="col-span-11 sm:col-start-2 sm:col-span-9">
                      <div class="relative">
                        <input type="adress" id="endereco" v-model="endereco" autocomplete="street-address" required class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="endereco" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Endereço</label>
                      </div>
                    </div>

                    <div class="col-span-11 sm:col-start-2 sm:col-span-4">
                      <div class="relative">
                        <input type="text" id="numero" v-model="numero" v-mask="['######']" required class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="numero" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Número</label>
                      </div>
                    </div>

                    <div class="col-span-11 sm:col-start-7 sm:col-span-4">
                      <div class="relative">
                        <input type="text" id="complemento" v-model="complemento" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="complemento" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Complemento</label>
                      </div>
                    </div>

                    <div class="col-span-11 sm:col-start-2 sm:col-span-9">
                      <div class="py-5">
                        <div class="border-t border-black" />
                      </div>
                    </div>   
                  </div>

<!--///////////////////////////////////////////////////-->
                  
                  <div class="grid grid-cols-11 gap-6">
                    <div class="col-span-11 sm:col-start-2 sm:col-span-4">
                      <h2 class="text-4xl font-bold leading-10 text-gray-800">Dados de serviços</h2>
                    </div>
                    <div class="col-span-11 sm:col-start-7 sm:col-span-4">
                      <p class="mt-1 text-sm text-gray-700">Preencha com as informações de funcionamento da sua loja.</p>
                    </div>
                  </div>
                  <br>
                  <br>
                  <div class="grid grid-cols-11 gap-6">                     

                    <div class="col-span-11 sm:col-start-2 sm:col-span-4">
                      <div class="relative">
                        <input type="text" id="taxa" v-model="taxa" v-mask="['R$ ##']" required pattern="R\$ [1-9][0-9]*" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="taxa" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Taxa de entrega</label>
                      </div>
                    </div>

                    <div class="col-span-11 sm:col-start-7 sm:col-span-4">
                      <div class="relative">
                        <select id="horario" v-model="tempo_entrega" required class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" >
                          <option disabled selected>---</option>
                          <option value="10min-20min">De 10min a 20 min</option>
                          <option value="15min-30min">De 15min a 30min</option>
                          <option value="30min-45min">De 30min a 45min</option>
                          <option value="45min-1h">De 45min a 1h</option>
                        </select>
                        <label for="horario" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Tempo de entrega</label>
                      </div>
                    </div>

                    <div class="col-span-11 sm:col-start-4 sm:col-span-5">
                      <div class="relative">
                        <select id="tempo_entrega" v-model="horario" required class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" >
                          <option disabled selected>---</option>
                          <option value="08h-17h">Das 08h às 17h</option>
                          <option value="08h-12h">Das 08h às 12h</option>
                          <option value="12h-18h">Das 12h às 18h</option>
                          <option value="14h-00h">Das 14h às 00h</option>
                          <option value="17h-22h">Das 17h às 22h</option>
                        </select>
                        <label for="tempo_entrega" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Horário de funcionamento</label>
                      </div>
                    </div>

                    <div class="col-span-11 sm:col-start-2 sm:col-span-9">
                      <label for="logo" class="block text-sm font-medium leading-6 text-gray-900">Logo</label>
                      <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div class="text-center">
                          <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M13 2v2h-2V2H9v2H7V2H6a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2h-1zM7 6h6v2H7V6zm0 4h6v2H7v-2zm6 6H7v-2h6v2z" />
                          </svg>
                          <div class="mt-4 flex text-sm leading-6 text-gray-600">
                            <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                              <span>Upload a file</span>
                              <input id="file-upload" name="file-upload" type="file" class="sr-only" @change="mostrarImagem" />
                            </label>
                            <p class="pl-1">or drag and drop</p>
                          </div>
                          <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                        </div>
                        <div class="logo-preview" v-if="imagemSelecionada">
                          <img :src="imagemSelecionada" />
                        </div>
                      </div>
                    </div>
                   
                  </div>
                              
                </div>
                <div class="bg-gray-200 px-4 py-3 text-right sm:px-6">
                  <button @click="verifyInput" type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Salvar</button>
                </div>
              </div>
            </div>
            <br>
          </form>
        </div>
      </div>
    </div> 
  </div>
</template>


<script scoped>
import {mask} from 'vue-the-mask';
import axios from 'axios';


export default {
  name: 'RegisterRestaurantView',
  directives: {mask},
  props: {
    msg: String
  },
  data() {
    return {
      nome: '',
      cpf: '',
      rg: '',
      cnpj: '',
      razao_social: '',
      nome_loja: '',
      telefone: '',
      especialidade: '',
      cep: '',
      estado_uf: '',
      cidade: '',
      bairro: '',
      endereco: '',
      numero: '',
      complemento: '',
      taxa: '',
      tempo_entrega: '',
      horario: '',
      razao_social_failure: false,
      nome_loja_failure: false,
      telefone_failure: false,
      cnpj_failure: false,
      imagemSelecionada: null,
    }
  },
  methods: {
    onlyLetters() {
      this.nome = this.nome.replace(/[^a-zA-ZÀ-ú\s]/g, ''),
      this.especialidade = this.especialidade.replace(/[^a-zA-ZÀ-ú\s]/g, '')
    },
    submit() {
      const formData = {
        nome: this.nome,
        cpf: this.cpf,
        rg: this.rg,
        cnpj: this.cnpj,
        razao_social: this.razao_social,
        nome_loja: this.nome_loja,
        telefone: this.telefone,
        especialidade: this.especialidade,
        cep: this.cep,
        estado_uf: this.estado_uf,
        cidade: this.cidade,
        bairro: this.bairro,
        endereco: this.endereco,
        numero: this.numero,
        complemento: this.complemento,
        taxa: this.taxa,
        tempo_entrega: this.tempo_entrega,
        horario: this.horario,
      };
      axios.post('http://localhost:3000/register-restaurant', formData)
        .then(
          this.$router.push('/home-restaurant')
        )
    },
    async verifyData() {
      event.preventDefault();
      try {
        let response;
        response = await axios.post('http://localhost:3000/verify-data', {
          cnpj: this.cnpj,
          razao_social: this.razao_social,
          nome_loja: this.nome_loja,
          telefone: this.telefone,
        });

        this.razao_social_failure = false;
        this.nome_loja_failure = false;
        this.telefone_failure = false;
        this.cnpj_failure = false;

        if (response.data === "Razão social já cadastrado") {
          this.razao_social_failure = true;
          return;
        } else if (response.data === "Telefone já cadastrado") {
          this.telefone_failure = true;
          return;
        } else if (response.data === "Nome da loja já cadastrado") {
          this.nome_loja_failure = true;
          return;
        } else if (response.data === "CNPJ já cadastrado") {
          this.cnpj_failure = true;
          return;
        } else if (response.data === "Razão social e telefone já cadastrado") {
          this.razao_social_failure = true;
          this.telefone_failure = true;
          return;
        } else if (response.data === "Razão social e nome da loja já cadastrado") {
          this.razao_social_failure = true;
          this.nome_loja_failure = true;
          return;
        } else if (response.data === "Razão social e CNPJ já cadastrado") {
          this.razao_social_failure = true;
          this.cnpj_failure = true;
          return;
        } else if (response.data === "Nome da loja e telefone já cadastrado") {
          this.nome_loja_failure = true;
          this.telefone_failure = true;
          return;
        } else if (response.data === "Nome da loja e CNPJ já cadastrado") {
          this.nome_loja_failure = true;
          this.cnpj_failure = true;
          return;
        } else if (response.data === "Telefone e CNPJ já cadastrado") {
          this.telefone_failure = true;
          this.cnpj_failure = true;
          return;
        } else if (response.data === "Razão social, nome da loja e telefone já cadastrado") {
          this.razao_social_failure = true;
          this.nome_loja_failure = true;
          this.telefone_failure = true;
          return;
        } else if (response.data === "Razão social, nome da loja e CNPJ já cadastrado") {
          this.razao_social_failure = true;
          this.nome_loja_failure = true;
          this.cnpj_failure = true;
          return;
        } else if (response.data === "Razão social, telefone e CNPJ já cadastrado") {
          this.razao_social_failure = true;
          this.telefone_failure = true;
          this.cnpj_failure = true;
          return;
        } else if (response.data === "Nome da loja, telefone e CNPJ já cadastrado") {
          this.nome_loja_failure = true;
          this.telefone_failure = true;
          this.cnpj_failure = true;
          return;
        } else if (response.data === "Razão social, nome da loja, telefone e CNPJ existem") {
          this.razao_social_failure = true;
          this.nome_loja_failure = true;
          this.telefone_failure = true;
          this.cnpj_failure = true;
          return;
        } else if (response.data === "Razão social, nome da loja, telefone e CNPJ não existem") {
          this.razao_social_failure = false;
          this.nome_loja_failure = false;
          this.telefone_failure = false;
          this.cnpj_failure = false;
          this.submit();
        }
      } catch (error) {
        console.error(error);
      }
    },
    verifyInput() {
      const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
      const rgRegex = /^\d{1}.\d{3}.\d{3}$/
      const cnpjRegex = /^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/
      const telRegex = /^\(\d{2}\) \d{5}-\d{4}$/
      const cepRegex = /^\d{5}-\d{3}$/

      if (!this.nome || !this.cpf || !this.rg || !this.cnpj || 
          !this.razao_social || !this.nome_loja || !this.telefone || !this.especialidade ||
          !this.cep || !this.estado_uf || !this.cidade || !this.bairro ||
          !this.endereco || !this.numero || !this.taxa || !this.tempo_entrega || !this.horario) {
        return;
      }

      if (!cpfRegex.test(this.cpf) || !rgRegex.test(this.rg) || !cnpjRegex.test(this.cnpj) ||
          !telRegex.test(this.telefone) || !cepRegex.test(this.cep)) {
        return;
      }

      this.verifyData();

    },
    hideText() {
        this.razao_social_failure = false;
        this.nome_loja_failure = false;
        this.cnpj_failure = false;
        this.telefone_failure = false;
    },
    mostrarImagem(event) {
      const arquivoSelecionado = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagemSelecionada = e.target.result;
      };
      reader.readAsDataURL(arquivoSelecionado);
    },
  }
}

</script>

