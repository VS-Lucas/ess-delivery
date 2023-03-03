<template>
  <div>
    <div class="bg-gradient-to-b from-primary-red-bg to-primary-red-register">
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
                        <input type="text" id="nome" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="nome" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Nome Completo</label>
                      </div>
                    </div>

                    <div class="col-span-11 sm:col-start-2 sm:col-span-4">
                      <div class="relative">
                        <input type="text" id="cpf" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="cpf" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">CPF</label>
                      </div>
                    </div>

                    <div class="col-span-11 sm:col-start-7 sm:col-span-4">
                      <div class="relative">
                        <input type="text" id="rg" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
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
                        <input type="text" id="cnpj" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="cnpj" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">CNPJ</label>
                      </div>
                    </div>

                    <div class="col-span-11 sm:col-start-7 sm:col-span-4">
                      <div class="relative">
                        <input type="text" id="razao-social" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="razao-social" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Razão Social</label>
                      </div>
                    </div>

                    <div class="col-span-11 sm:col-start-2 sm:col-span-4">
                      <div class="relative">
                        <input type="text" id="nome-loja" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="nome-loja" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Nome da Loja</label>
                      </div>
                    </div>

                    <div class="col-span-11 sm:col-start-7 sm:col-span-4">
                      <div class="relative">
                        <input type="tel" id="telefone" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                        <label for="telefone" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Telefone</label>
                      </div>
                    </div>

                    <div class="col-span-11 sm:col-start-4 sm:col-span-5">   <!--!!!-->
                      <div class="relative">
                        <input type="text" id="especialidade" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="especialidade" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Especialidade</label>
                      </div>
                      <p id="outlined_success_help" class="mt-2 text-xs text-green-600 dark:text-green-400"><span class="font-medium">Well done!</span> Some success message.</p>    
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
                        <input type="text" id="cep" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="cep" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">CEP</label>
                      </div>
                    </div>

                    <div class="col-span-11 sm:col-start-7 sm:col-span-4">
                      <div class="relative">
                        <select id="estado-uf" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" >
                          <option value="NONE">---</option>
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
                        <label for="estado-uf" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">UF</label>
                      </div>
                    </div>

                    <div class="col-span-11 sm:col-start-2 sm:col-span-4">
                      <div class="relative">
                        <input type="text" id="cidade" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="cidade" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Cidade</label>
                      </div>
                    </div>

                    <div class="col-span-11 sm:col-start-7 sm:col-span-4">
                      <div class="relative">
                        <input type="text" id="bairro" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="bairro" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Bairro</label>
                      </div>
                    </div>

                    <div class="col-span-11 sm:col-start-2 sm:col-span-9">
                      <div class="relative">
                        <input type="adress" id="endereco" autocomplete="street-address" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="endereco" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Endereço</label>
                      </div>
                    </div>

                    <div class="col-span-11 sm:col-start-2 sm:col-span-4">
                      <div class="relative">
                        <input type="number" id="numero" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="numero" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Número</label>
                      </div>
                    </div>

                    <div class="col-span-11 sm:col-start-7 sm:col-span-4">
                      <div class="relative">
                        <input type="text" id="complemento" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="complemento" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Complemento</label>
                      </div>
                    </div>
                   
                  </div>             
                </div>
                <div class="bg-gray-200 px-4 py-3 text-right sm:px-6">
                  <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Salvar</button>
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

export default {
  name: 'RegisterView',
  props: {
    msg: String
  },
}

</script>