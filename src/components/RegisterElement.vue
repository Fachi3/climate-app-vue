<template>
	<div>
		<b-card class="text-center">
			<b-form inline class="mb-12 mr-sm-12 mb-sm-0">
		        <label class="sr-only" for="inlineFormInputName2">Name</label>
      			<b-input class="mb-2 mr-sm-2 mb-sm-0" 
      				id="inlineFormInputName2" 
      				v-model="register.name"
		        	type="text"
      				placeholder="Introduzca la ciudad"/>
      		
		      	<b-form-select class="mb-2 mr-sm-2 mb-sm-0"
		                    :options="register.seg"
		                    v-model="register.selectSeg">
		        	<option slot="first" :value="null">Refrescar en...</option>
		      	</b-form-select>

			    <b-button class="mb-12 mr-sm-12 mb-sm-0"
			    	@click="SearchCity">Buscar y Registrar</b-button>

			    <div class="mb-12 mr-sm-12 mb-sm-0">
				    <p v-if="message_require" v-text="message_require"></p>
				    <pre v-if="array_cities.length > 0">{{ array_cities }}</pre>
				    <p v-if="errors_cities.length > 0">Ciudad no encontrada</p>
			    </div>
			</b-form>
		</b-card>
    </div>
</template>

<script>
	var secondsIteration = 0;
	var nameCapitalize = '';

	export default {
		//Declare data to use
		data() {
		    return {
		    	register:{
		    		name: null,
		    		seg: {
		    			5: '5 seg',
		    			10: '10 seg',
		    			15: '15 seg',
		    			20: '20 seg',
		    			25: '25 seg',
		    			30: '30 seg',
		    		},
		    		selectSeg: null
		    	},
		    	message_require: null,
		    	array_cities: [],
		    	errors_cities: []
		    }
		},
		//Create filters
		filters: {
			capitalize: function(text){
				return text.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
			},
			lowercase: function(text){
				return text.toLowerCase().trim();
			}
		},
		methods:{
			SearchCity: function(){

				console.log(this.register.selectSeg)

				//If models exist or diferent of null
				if(this.register.name && this.register.selectSeg){

					//Homogenize city to search with filters
					nameCapitalize = this.$options.filters.lowercase(this.register.name);
					nameCapitalize = this.$options.filters.capitalize(nameCapitalize);

					this.errors_cities = []
					this.message_require = null
					secondsIteration = this.register.selectSeg

					//Get city
					axios.get('//api.openweathermap.org/data/2.5/weather?q='+this.register.name+'&lang=es&appid=61d95c5cc22f6b5a43fa178e6e9c27df')
				    	.then(response => {

				      	// JSON responses are automatically parsed.
				      	this.array_cities.push(response.data)

				      	//Insert seconts and image in object appropriate
				      	this.array_cities.filter(function (item) {
				      		if(item.name == nameCapitalize){
				      			item.urlicon = 'http://openweathermap.org/img/w/'+item.weather[0].icon+'.png'
				      			return item.seconds = secondsIteration
				      		}
						})

				      	//Send cities to GridElement component
				      	this.$emit('clicked', this.array_cities)

				      	//Empty models
				      	this.register.name = null
				      	this.register.selectSeg = null
				    })
				    .catch(e => {
				    	//Catch errors
				      	this.errors_cities = e
				      	//Empty models
				      	this.register.name = null
				      	this.register.selectSeg = null
				    })
				}else{
					this.message_require = 'Por favor llene todos los campos'
				}
			}
		}
	}
</script>