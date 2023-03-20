<template>
    <div class="col-2 offset-1 px-4">
      <div class="card shadow" style="width: 15rem;">
        <img class="card-img-top imagen_cardProfesor" :src='"/public/img/"+persona.foto' :alt='persona.nombre'>
        <p class="text-center pt-3">{{persona.nombre}}</p>
      </div>
    </div>
</template>

<script>
export default {
    name: 'TheCard',
    props: {
        persona: Object
    }
}
</script>

<style>

</style>