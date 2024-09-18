<template>
     <div class="bg-white">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Home <span aria-hidden="true">&rarr;</span></a>
        </div>
      </nav>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
              </div>
              <div class="py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</a>
              </div>
            </div>
          </div>
        </DialogPanel>
        
      </Dialog>

   

    </header>


    
    <div class="flex min-h-screen items-center justify-center bg-gray-100">
  <div class="bg-white p-8 rounded-lg shadow-lg w-full sm:w-[500px]">
    <div class="text-center mb-6">
      
      <!-- MensajeSS DE SESIÓN -->
      <div v-if="mensajeError" class="p-4 mb-4 text-sm rounded-lg bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-800 flex items-center justify-center w-full" role="alert">
        <div>
          <span class="font-medium">⚠️ Error:</span> Usuario o contraseña incorrectos. Verifica tus credenciales y vuelve a intentarlo.
        </div>
      </div>


      <div v-if="mensajeExitoso" class="p-4 mb-4 text-sm rounded-lg bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-800 flex items-center justify-center w-full" role="alert">
        <div>
          <span class="font-medium">✅ Éxito:</span> Inicio de Sesión Exitoso , Bienvenido {{ usuario }}
        </div>
      </div>


      <img class="mx-auto h-24 w-24 mb-4" src="../components/icons/login.png" alt="Your Company" />
      <h2 class="text-2xl font-bold text-gray-900">Inicio de Sesión</h2>
    </div>

    <form @submit.prevent="Login" class="space-y-6" action="#" method="POST">
      <div>
        <label for="username" class="block text-sm font-medium text-gray-700">Nombre de Usuario</label>
        <div class="mt-1">
          <input v-model="usuario" id="username" name="username" type="text" autocomplete="username" required class="block w-full rounded-md border-gray-300 shadow-sm text-lg py-3 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
        </div>
        <div class="mt-1">
          <input v-model="contraseña" id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-gray-300 shadow-sm text-lg py-3 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>
      </div>

      <div>
        <button @click="Login" type="submit" class="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600">Iniciar Sesión</button>
      </div>
    </form>

    <p class="mt-6 text-center text-sm text-gray-500">
      Aún no tienes una cuenta? <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Regístrate ahora</a>
    </p>
  </div>
</div>



    
  </div>




 



</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const usuario = ref('')
const contraseña = ref('')
const router = useRouter()
const usuarioValidado = ref('firetensor')
const contraseñaValidada = ref('fire123')

const mensajeExitoso = ref (false)
const mensajeError = ref (false)


const navigation = [
  { name: 'Productos', href: '#' },
  { name: 'Sobre Nosotros', href: 'https://m.universidadperu.com/empresas/firetensor.php' },
  { name: 'Contáctanos', href: '#' },
  
]

const mobileMenuOpen = ref(false)

const Login = () => {
  if (usuario.value === usuarioValidado.value && contraseña.value === contraseñaValidada.value) {

    mensajeExitoso.value = true
    mensajeError.value = false
        setTimeout(() => {
          router.push('/interfaz-uno')
        }, 1500) 
    


    
    
  } else {
  
    usuario.value = ''
    contraseña.value = ''
    mensajeError.value = true
    mensajeExitoso.value = false
  }
}
</script>