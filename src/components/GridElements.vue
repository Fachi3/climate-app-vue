<template>
	<div>
		<b-row class="text-center">
            <b-col>
	            <b-card-group deck
		                  class="mb-3">
			        <b-card bg-variant="secondary"
			                text-variant="white"
			                class="text-center"
			                v-for="(city, index) in cities">
			                <template slot="header">
			                	<img v-bind:src="city.urlicon">
							    <div class="bg-info" v-text="city.name+', '+city.sys.country"></div>
							</template>
			            <p class="card-text" v-text="city.weather[0].description"></p>
			            <div>
			            <small v-text="'Min '+city.main.temp_min+' °C,'"></small>
			            <small v-text="'Max '+city.main.temp_max+' °C,'"></small>
			            <br>
			            <Timer :initial='city.seconds'
			            	   :name="city.name"
			            	   :array='cities'/>
			           	<h1>{{city.test}}</h1>
			            </div>
			        </b-card>
			    </b-card-group>
			</b-col>
        </b-row>
        <RegisterElement
        	@clicked="setRegister"/>
	</div>
</template>

<script>
	import RegisterElement from './RegisterElement.vue'
	import Timer from './Timer.vue'
	import { bus } from '../main';
	var arrcities = []

	export default {
		name:'GridElements',
		components: {
		    RegisterElement,
		    Timer
		},
		created() {
			//Setting obj update cities and restart model cities of this component
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
			}
		}
	}
</script>