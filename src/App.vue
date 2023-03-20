<template>
  <Header/>
  <AnuarioVue />
  <router-view />
  <Footer/>
</template>

<script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
import AnuarioVue from './views/Anuario.vue';

  export default {
    name: "App",
    components:{
      Header,
      Footer,
      AnuarioVue
    }
  };
</script>


