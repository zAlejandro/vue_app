<template>
  <div class="">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a href="#" class="navbar-brand p-2">Home</a>
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a href="#" class="nav-link text-white p-2"></a>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto pe-3">
              <li class="navbar-item">
                <a href="#" class="nav-link">Login</a>
              </li>
            </ul>
        </nav>

        <div class="text-center py-5 colorines">
          <div class="container py-2">
            <div class="input-group">
              <input type="text" v-model="ffiltro" class="form-control" @keyup.enter="filtrarDatos">
              <div class="input-group-append">
                <button class="btn btn-warning" @click="filtrarDatos">Buscar</button>
              </div>
            </div>
          </div>
        </div>
    <Puestos></Puestos>
  </div>

</template>
<style scoped>
  .colorines{
    background: #6a11cb;
    background: linear-gradient(
    to right,
    rgba(106, 17, 203, 1),
    rgba(37, 117, 252, 1))
  }
</style>
<script>
import Puestos from './components/Puestos.vue'
import {mapMutations, mapState} from 'vuex';

export default {
  name: 'App',
  data(){
    return{
      //ffiltro es la variable que usa updateFiltro para cambiar el valor de filtro
      ffiltro: ''
    }
  },
  components: {
    Puestos
  },
  computed:{
    ...mapState(['datos', 'datosCategoria','filtro']),
  },
  methods:{
    ...mapMutations(['filtrarDatos', 'updateFiltro']),
  },
  //esto es para actualizar el state filtro
  updated(){
    this.updateFiltro(this.ffiltro)
  }
}
</script>
