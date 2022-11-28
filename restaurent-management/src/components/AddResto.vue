<template>
    <div class="home">
        <headerComp></headerComp>
        <h1>Add Restaurent</h1>
        <form class="add-resto-form">
            <input type="text" v-model="resto.name" required placeholder="Enter Resto Name" />
            <textarea v-model="resto.address" required placeholder="Enter your Address"></textarea>
            <button type="button" @click="addResto">Add Resto</button>
        </form>
    </div>
</template>

<script>
import headerComp from './headerComp.vue';
import axios from 'axios';

export default {
    name: 'addResto',
    components: {
        headerComp
    },
    data() {
        return {
            resto: {
                name: '',
                address: '',
            },
        }
    },
    methods: {
        async addResto() {
            console.log(this.resto);
            var saveResto = await axios.post("http://localhost:3000/resto", {
                name: this.resto.name,
                address: this.resto.address,
            });
            console.warn(saveResto);
            if (saveResto.status == 201) { 
                alert("Restaurent saved.");
                this.$router.push({name: 'homeComp'});
            }
        }
    },
    mounted() {
        var is_logged = localStorage.getItem('user-info');
        if (!is_logged) {
            this.$router.push({ name: 'SignUp' });
        }
    }
}
</script>

<style scoped>
.add-resto-form textarea {
    padding-top: 20px;
    border-radius: 20px;
}

.add-resto-form input,
textarea {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
    border-radius: 50px;
}

.add-resto-form button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    border-radius: 50px;
    color: black;
    background-color: skyblue;
    cursor: pointer;
}
</style>