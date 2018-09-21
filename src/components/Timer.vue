<template>
	<span>Actualizando en {{current}}s</span>
</template>

<script>
	var seconds = 0;
	var urlicon = '';
	var array_temp = [];

	//Send data cities for bus
	import { bus } from '../main';

	export default {
		props:['initial', 'name', 'array'],
		data() {
		    return {
		      	current: this.initial,
		      	timerInterval: null,
		      	interval: 1,
		      	update_cities: this.array,
		      	update_errors: []
		    }
		},
		mounted() {
		    setInterval(this.onInterval, this.interval * 1000)
		},
		methods: {
		    onInterval() {
		      	this.current = this.current -= this.interval
		      	if (this.current <= 0) {
		        	clearInterval(this.timerInterval)

				    //console.log(this.name, this.update_cities)
				    //Update city
				    console.log(this.name, this.update_cities)
				    this.updateCities(this.name, this.update_cities)

		        	this.current = this.initial

		      	}
		    },
		    updateCities(name, cities){
		    	
	    		//Insert seconts and image in object appropriate
		      	cities.filter(function (item) {

		      		if(item.name == name){

		      			axios.get('//api.openweathermap.org/data/2.5/weather?q='+name+'&units=metric&lang=es&appid=61d95c5cc22f6b5a43fa178e6e9c27df')
    					.then(response => {

    						item.urlicon = 'http://openweathermap.org/img/w/'+response.data.weather[0].icon+'.png'
			      			item.weather[0].description = response.data.weather[0].description
			      			item.main.temp = response.data.main.temp
			      			item.main.temp_min = response.data.main.temp_min
			      			item.main.temp_max = response.data.main.temp_max

    					})
					    .catch(e => {

					    })

		      		}

				})

			    //Send cities to GridElement component for bus emit
				bus.$emit('updateEvent', cities)

		    }
		}
    }
</script>