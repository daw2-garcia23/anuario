<template>
    <div class="col-2 px-4">
      <div class="card shadow" style="width: 15rem;">
        <router-link :to="{name:'card', params:{id:persona.id}}"><img class="card-img-top imagen_card" :src='"/public/img/" + persona.foto' :alt='persona.nombre'></router-link>
        <p class="text-center pt-3">{{persona.nombre}}</p>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        persona: Object
    }
}

</script>

<style>

</style>