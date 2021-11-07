import { createStore } from 'vuex'

export default createStore({
  state: {
    frutas:[
      {nombre: 'Manzana', cantidad: 0},
      {nombre: 'Pera', cantidad: 0},
      {nombre: 'Naranja', cantidad: 0}
    ],
    datos: [],
    datosAll: [],
    datosCategoria: [],
    filtro: '',
    detalles: []
  },
  mutations: {
    aumentar(state, index){
      state.frutas[index].cantidad++
    },
    reiniciar(state){
      state.frutas.forEach(item => {
        item.cantidad = 0
      });
    },
    //esta mutacion llenas los datos de datos, que es el state que se muestra en pantalla
    //y datosAll que es el state que contiene todos los objetos
    llenarDatos(state, datosAccion){
      state.datos = datosAccion
      state.datosAll = datosAccion
    },
    //esta mutacion toma todas las categorias y las mete en un array sin repetirse
    sortearCategoria(state){
      for(var i=0;i<state.datos.length;i++){
        if (state.datosCategoria.includes(state.datos[i].Categoria)){
          console.log('pos no lo tiene')
        }else{
          state.datosCategoria.push(state.datos[i].Categoria)
          console.log('pos si lo tiene')
        }
      }
      console.log(state.datosCategoria)
    },
    //esta funcion filtra los datos y los manda al state "datos"
    filtrarDatos(state){
      for(var i=0;i<state.datosAll.length;i++){
        if(state.datosAll[i].Categoria == state.filtro || state.datosAll[i].Ubicacion == state.filtro
          || state.datosAll[i].compañia == state.filtro || state.datosAll[i].Posicion == state.filtro
          )
        {
          state.datos = []
          state.datosCategoria = []
          state.datos.push(state.datosAll[i])
        }
        else if(state.filtro == '')
        {
          state.datos = state.datosAll
          console.log('este no wei')
        }else{
          console.log('')
        }
        //el codigo de justo debajo es la mutation de sortear categoria tal cual
        for(var y=0;y<state.datos.length;y++){
          if (state.datosCategoria.includes(state.datos[y].Categoria)){
            console.log('pos no lo tiene')
          }else{
            state.datosCategoria.push(state.datos[y].Categoria)
            console.log('pos si lo tiene')
          }
        }
        console.log(state.filtro)
      }
    },
    //esta es la forma que encontre de pasar los datos del input al state filtro dinamicamente
    updateFiltro(state, valor){
      console.log(valor)
      state.filtro = valor
    }

  },
  actions: {
    //esto es lo que use yo para comunicarme con el json, pero aqui iria lo de la bd
    //aparte hace el commit de las mutaciones para tener todos los datos inicialmente
    obtenerDatos: async function({ commit }){
      const data = await fetch('datos.json')
      const datos = await data.json()
      commit('llenarDatos', datos)
      commit('sortearCategoria')
    }
  },
  modules: {
  }
})
