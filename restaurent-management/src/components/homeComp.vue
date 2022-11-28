<template>
    <div class="home">
        <headerComp></headerComp>
        <h1>Hello {{ name }}, Welcome to home page</h1>
        <!-- <p>{{arrResto}}</p> -->
        <table class="table-resto" border="1px">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Address</th>
                <th>Action</th>
            </tr>
            <tr v-for="resto in arrResto" :key="resto.id">
                <td>{{ resto.id }}</td>
                <td>{{ resto.name }}</td>
                <td>{{ resto.address }}</td>
                <td>
                    <router-link class="btnUpdate" :to="'/update-resto/' + resto.id">Update</router-link>
                    <a class="btnDelete" @click="deleteResto(resto.id)">Delete</a>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import headerComp from './headerComp.vue';
import axios from 'axios';

export default {
    name: 'homeComp',
    components: {
        headerComp
    },
    data() {
        return {
            name: '',
            arrResto: [],
        }
    },
    methods: {
        async deleteResto(id) {
            // console.warn(id);
            var text = "Want to delete Restaurent?";
            if (confirm(text) == true) {
                var deleteResto = await axios.delete("http://localhost:3000/resto/" + id);
                if (deleteResto.status == 200) {
                    this.loadData();
                } else { 
                    alert('Error while deleting Restaurent');
                }
            }
        },
        async loadData() {
            var is_logged = localStorage.getItem('user-info');
            // this.name = JSON.parse(is_logged).name;
            if (!is_logged) {
                this.$router.push({ name: 'loginComp' });
            }
            var getResto = await axios.get('http://localhost:3000/resto');
            this.arrResto = getResto.data;
            console.warn(getResto);
        }
    },
    async mounted() {
        this.loadData();
    }
}
</script>

<style>
.home {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.table-resto td {
    width: 400px;
    padding: 10px;
}

.btnDelete{
    cursor: pointer;
    margin: 10px;
    background-color: rgba(207,207,207,0.68);
    color: red;
    padding: 8px;
    border-radius: 6px;
}

.btnUpdate{
    text-decoration: none;
    cursor: pointer;
    margin: 10px;
    background-color: rgba(207,207,207,0.68);
    color: blue;
    padding: 8px;
    border-radius: 6px;
}
</style>