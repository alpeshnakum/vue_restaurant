<template>
    <div class="home">
        <vueSpinner :start="start" />
        <headerComp></headerComp>
        <h1>Update Restaurent</h1>
        <form class="update-resto-form">
            <input type="text" v-model="resto.name" required placeholder="Enter Resto Name" />
            <textarea v-model="resto.address" required placeholder="Enter your Address"></textarea>
            <p v-if="isError" style="color: red;">All fields are required.</p>
            <button type="button" @click="updateResto">Update Resto</button>
        </form>
    </div>
</template>

<script>
import vueSpinner from '@/components/spinnerComp.vue';
import headerComp from './headerComp.vue';
import axios from 'axios';

export default {
    name: 'updateResto',
    components: {
        vueSpinner,
        headerComp
    },
    data() {
        return {
            start: true,
            isError: false,
            resto: {
                name: '',
                address: '',
            },
        }
    },
    methods: {
        async updateResto() {
            if (this.resto.name == '' || this.resto.name == null || this.resto.address == '' || this.resto.address == null) {
                console.log("inside if part");
                this.isError = true;
            } else {
                console.log("inside else part");
                console.log(this.resto);
                var saveResto = await axios.put("http://localhost:3000/resto/" + this.$route.params.restId, {
                    name: this.resto.name,
                    address: this.resto.address,
                });
                console.warn(saveResto);
                if (saveResto.status == 200) {
                    alert("Record updated.");
                    this.$router.push({ name: 'homeComp' });
                }
            }
        }
    },
    async mounted() {
        var is_logged = localStorage.getItem('user-info');
        if (!is_logged) {
            this.$router.push({ name: 'SignUp' });
        }
        var paramId = this.$route.params.restId; // get id from url
        var resultData = await axios.get('http://localhost:3000/resto/' + paramId);
        console.warn(resultData);
        this.resto = resultData.data;
        this.start = false;

    }
}
</script>

<style scoped>
.update-resto-form textarea {
    padding-top: 20px;
    border-radius: 20px;
}

.update-resto-form input,
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

.update-resto-form button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    border-radius: 50px;
    color: black;
    background-color: skyblue;
    cursor: pointer;
}
</style>