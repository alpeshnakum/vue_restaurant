<template>
	<div style="position: relative;">
		<router-view />
		
	</div>
</template>

<script>
// import vueSpinner from '@/components/spinnerComp.vue';

export default {
    name: 'App',
	// data() { 
	// 	return {

	// 	}
	// },
	// components: {
	// 	vueSpinner,
	// }
}
</script>

<style>
#app {
	/* font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin: 20px;
	padding: 20px; */
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
}
</style>
