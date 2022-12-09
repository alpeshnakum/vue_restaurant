<template>
    <div class="home">
        <vueSpinner :start="start" />
        <headerComp></headerComp>
        <h1>Details for Restaurent id - {{arrResto['id']}}</h1>
            <b>Id: </b>{{ arrResto['id'] }}<br>
            <b>Name: </b>{{ arrResto['name'] }}<br>
            <b>Address: </b>{{ arrResto['address'] }}<br>
            <button class="btnBack" @click="fn_goBack">Back</button>
    </div>

</template>

<script>
import vueSpinner from '@/components/spinnerComp.vue';
import headerComp from './headerComp.vue';
import axios from 'axios';

export default {
    name: 'homeComp',
    components: {
        headerComp,
        vueSpinner
    },
    data() {
        return {
            start: true,
            arrResto: [],
        }
    },
    methods: {
        fn_goBack() { 
            this.$router.push({name: 'homeComp'});
        },
        async loadData() {
            var is_logged = localStorage.getItem('user-info');
            // this.name = JSON.parse(is_logged).name;
            if (!is_logged) {
                this.$router.push({ name: 'loginComp' });
            }
            var getResto = await axios.get('http://localhost:3000/resto/' + this.$route.params.restId);
            if (getResto.status == 200) {
                this.arrResto = getResto.data;
                console.warn(getResto);
                this.start = false;
            }
        }
    },
    async mounted() {
        this.loadData();
    }
}
</script>

<style scoped>
.btnBack{
    margin-top: 20px;
    background-color: skyblue;
    padding: 10px;
    border: 0px;
    width: 90px;
    border-radius: 10px;
    cursor: pointer;
}
</style>