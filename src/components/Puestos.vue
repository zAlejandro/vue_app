<template>
    <div class="container mt-5 text-center">
        <div v-for="element of datosCategoria" :key="element.id">
            <h3 class="mt-5">{{element}}</h3>
            <table class="table p-2">
                <thead class="bg-dark">
                    <tr>
                        <th class="text-white">Ubicacion</th>
                        <th class="text-white">Posicion</th>
                        <th class="text-white">Compañia</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in datos" :key="item.id">
                        <td v-if="item.Categoria == element">{{item.Ubicacion}}</td>
                        <td v-if="item.Categoria == element">{{item.Posicion}}</td>
                        <td v-if="item.Categoria == element">{{item.compañia}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    export default({
        name: 'Puestos',
        computed:{
            ...mapState(['datos', 'datosCategoria']),
        },
        methods:{
            ...mapActions(['obtenerDatos','sortearCategoria']),
        },
        mounted(){
            this.obtenerDatos()
        }
    })
</script>