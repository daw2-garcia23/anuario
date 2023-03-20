
<template>
    <div>
      <main> 
          <div v-if="$route.params.id > 0">
              <div class="" v-for="item in alumnos" :key="item.id">
                      <div v-if="item.id == $route.params.id">
                          <InfoAlumnos :persona="item"/>
                      </div>
              </div>
              <div class="" v-for="item in profes" :key="item.id">
                      <div v-if="item.id == $route.params.id">
                          <InfoAlumnos :persona="item"/>
                      </div>
              </div>
          </div>
    
          <div v-else>
              <div class="row p-0">
                <div class="col-12 text-center bg-secondary espaciosTitulos pt-3 pb-3">
                    <h1 class="text-white">Desarollo de aplicaciones web (DAW)</h1>
                    <h4 class="text-white">2022/2023</h4>
                </div>
              </div>    
              <div class="bg-success">
                  <div class="row p-0">
                      <h2 class="text-center my-5 text-white">Docentes</h2>
                      <div class="d-flex justify-content-center">
                          <div v-for="item in profes" :key="item.id">
                              <Profesor v-if="item.lugar == 'profesor'" :persona="item"/>
                          </div>
                      </div>
                      <h2 class="text-center my-5 text-white">Alumnado</h2>
                      <div class="d-flex justify-content-center pb-5">
                          <div v-for="item in alumnos" :key="item.id">
                              <div v-if="item.lugar == 'alumno'">
                                  <Alumno :persona="item"/>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </main> 
    </div>
</template>

<script>
import Profesor from '../components/Profesor.vue'
import Alumno from '../components/Alumno.vue'
import InfoAlumnos from '../components/InfoAlumnos.vue';

export default {
    name: 'Anuario',
    components:{
    Alumno,
    Profesor,
    InfoAlumnos
},
    data(){
        return{
            profes: [
                {
                    id:4,
                    nombre: 'Patricia Salinas',
                    foto: 'profesor3.jpg',
                    lugar: 'profesor'
                },
                 {
                    id:2,
                    nombre: 'Jordi Egea',
                    foto: 'profesor1.png',
                    lugar: 'profesor'
                },
                {
                    id:1,
                    nombre: 'Carlos Arrebola',
                    foto: 'profesor.png',
                    lugar: 'profesor'
                },
                {
                    id:3,
                    nombre: 'Raul Sanchez',
                    foto: 'profesor2.jpg',
                    lugar: 'profesor'
                },
                
                {
                    id:5,
                    nombre: 'Ana Rovira',
                    foto: 'anna_rovira.jpg',
                    lugar: 'profesor'
                }
            ],
            alumnos: [
                {
                    id:6,
                    nombre: 'Rubén Redondo',
                    foto: 'foto1.png',
                    lugar: 'alumno',
                    estudios:['Bachillerato','Grado superior de desarollo web'],
                    trabajo:['Vendedor de fundas de móvil']
                },
                {
                    id:7,
                    nombre: 'Sergio Pereira',
                    foto: 'foto2.png',
                    lugar: 'alumno',
                    estudios:['Grado medio en Sistemas Microinformáticos y Redes','Grado superior de desarollo web'],
                    trabajo:['Dj o eso dice ser']
                },
                {
                    id:8,
                    nombre: 'Álex Pérez',
                    foto: 'foto3.png',
                    lugar: 'alumno',
                    estudios:['Bachillerato','Grado superior de desarollo web'],
                    trabajo:['Ayudante en prácticas de programación','Camarero en Times Burger']
                },
                {
                    id:9,
                    nombre: 'Edgar Muñoz',
                    foto: 'foto4.png',
                    lugar: 'alumno',
                    estudios:['Grado medio en Sistemas Microinformáticos y Redes','Grado superior de desarollo web'],
                    trabajo:['Experto en Google Maps y petanca']
                },
                {
                    id:10,
                    nombre: 'Pau Díaz',
                    foto: 'foto5.png',
                    lugar: 'alumno',
                    estudios:['Grado medio en Sistemas Microinformáticos y Redes','Grado superior de desarollo web'],
                    trabajo:['Prácticas de desarrollador web FrontEnd']
                },
                {
                    id:11,
                    nombre: 'Zeus Sorroche',
                    foto: 'foto6.png',
                    lugar: 'alumno',
                    estudios:['Grado superior de desarollo web'],
                    trabajo:['Prácticas de desarrollador web']
                }
            ]
        }
    }
}
</script>