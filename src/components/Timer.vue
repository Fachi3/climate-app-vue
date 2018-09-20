<template>
	<span>Actualizando en {{current}}s</span>
</template>

<script>
	export default {
		props:['initial', 'name'],
		data() {
		    return {
		      	current: this.initial,
		      	timerInterval: null,
		      	interval: 1,
		      	city_name: this.name,
		      	update_cities: [],
		      	update_errors: []
		    }
		},
		methods: {
		    onInterval() {
		      	this.current = this.current -= this.interval
		      	if (this.current <= 0) {
		        	clearInterval(this.timerInterval)

		        	//Update city
		        	axios.get('//api.openweathermap.org/data/2.5/weather?q='+this.city_name+'&lang=es&appid=61d95c5cc22f6b5a43fa178e6e9c27df')
				    	.then(response => {

				      	// JSON responses are automatically parsed.
				      	this.update_cities.push(response.data)

				      	//Insert image in object appropriate
				      	this.update_cities.filter(function (item) {
				      		if(item.name == this.city_name){
				      			return item.urlicon = 'http://openweathermap.org/img/w/'+item.weather[0].icon+'.png'
				      		}
						})

				      	//Send cities to GridElement component
				      	this.$emit('clicked', this.update_cities)
				    })
				    .catch(e => {
				    	//Catch errors
				      	this.update_errors = e
				    })

		        	this.current = this.initial

		      	}
		    }
		},
		mounted() {
		    setInterval(this.onInterval, this.interval * 1000)
		}
    }
</script>