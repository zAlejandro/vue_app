<template>
    <div class="text-center">
        <ul class="list-group">
            <li v-for="(item, index) of arrayOrdenado" :key="item.id" @click="aumentar(index)"
            class="list-group-item d-flex justify-content-between align-items-center">
                {{item.nombre}}
                <span class="badge bg-primary">{{item.cantidad}}</span>
            </li>
        </ul>
        <button class="btn btn-danger mt-3" @click="reiniciar">reiniciar</button>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    export default({
        name: 'Lista',
        computed:{
            ...mapState(['frutas']),
            arrayOrdenado(state){
                return state.frutas.sort( (a,b) => b.cantidad - a.cantidad)
            }
        },
        methods:{
            ...mapMutations(['aumentar', 'reiniciar'])
        }
    })
</script>