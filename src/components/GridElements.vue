<template>
	<div>
		<b-row>
            <b-col sm="12" md="6" lg="4"
            	   v-for="(city, index) in cities">
	            <b-card-group deck class="mb-3">
			        <b-card bg-variant="secondary"
			                text-variant="white"
			                class="text-center hover ehover2">
			                <template slot="header">
							    <h5 class="bg-info" v-text="city.name+', '+city.sys.country"></h5>
							</template>
							<div class="overlay">
								<h2>¿Deseas eliminar {{city.name}}?</h2>
								<button class="info" 
										data-toggle="modal" 
										data-target="#modal2"
										@click="removeRegister(index)">Si</button>
							</div>
							<img v-bind:src="city.urlicon">
				            <h6  class="card-text"
				            	v-text="city.weather[0].description"></h6>
				            	<h6 v-text="'Temp '+city.main.temp+' °C'"></h6>
				            <div >
				            <small v-text="'Min '+city.main.temp_min+' °C,'"></small>
				            <small v-text="'Max '+city.main.temp_max+' °C'"></small>
				            <br>
				            <Timer :initial='city.seconds'
				            	   :name="city.name"
				            	   :array='cities'/>
				            </div>
			        </b-card>
			        <br>
			    </b-card-group>
			</b-col>
        </b-row>
        <h5>Haz tu consulta del clima en tiempo real aquí abajo</h5>
        <RegisterElement
        	@clicked="setRegister"/>
	</div>
</template>

<script>
	import RegisterElement from './RegisterElement.vue'
	import Timer from './Timer.vue'

	//Send data cities for bus
	import { bus } from '../main';

	var array_temp = [];

	export default {
		name:'GridElements',
		components: {
		    RegisterElement,
		    Timer
		},
		created() {
			//Setting obj update cities and restart model cities this component
		    bus.$on('updateEvent', obj => {
		        this.cities = []
		        this.cities = obj
		    });
		},
		data() {
		    return {
		    	cities: []
		    }
		},
		methods:{
			setRegister: function(data){
				this.cities = data
			},
			removeRegister: function(index){
				this.cities.splice(index, 1);
				array_temp = this.cities
				this.cities = array_temp
			}
		}
	}
</script>