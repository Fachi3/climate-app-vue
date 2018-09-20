<template>
	<span>Actualizando en {{current}}s</span>
</template>

<script>
	var seconds = 0;
	var urlicon = '';
	var array_temp = [];

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
		methods: {
		    onInterval() {
		      	this.current = this.current -= this.interval
		      	if (this.current <= 0) {
		        	clearInterval(this.timerInterval)

				    //console.log(this.name, this.update_cities)
				    //Update city
				    this.updateCities(this.name, this.update_cities)

		        	this.current = this.initial

		      	}
		    },
		    updateCities(name, cities){
		    	axios.get('//api.openweathermap.org/data/2.5/weather?q='+name+'&lang=es&appid=61d95c5cc22f6b5a43fa178e6e9c27df')
			    	.then(response => {

			    		//Insert seconts and image in object appropriate
				      	cities.filter(function (item) {
				      		if(item.name == name){
				      			item.test = 'insertion test'
				      			return item = response.data	      			
				      		}
						})
			    })
			    .catch(e => {

			    })

			    //Send cities to GridElement component for bus emit
				bus.$emit('updateEvent', cities)

		    }
		},
		mounted() {
		    setInterval(this.onInterval, this.interval * 1000)
		}
    }
</script>