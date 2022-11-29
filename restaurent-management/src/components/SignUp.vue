<template>
    <div class="register">
        <h1>Sign Up</h1>
        <form method="post" @submit.prevent="fn_signUp">
            <div class="register">
                <input @keyup="isValidName()" type="text" v-model="name" placeholder="Enter your Name" required>
                <p v-if="!isValidName_var" class="errEmail" style="color: red;">Name is required</p>
                <input @keyup="isValidEmail()" type="email" v-model="email" placeholder="Enter your Email" required>
                <p v-if="!isValidEmail_var" class="errEmail" style="color: red;">Email is required</p>
                <input @keyup="isValidPassword()" type="password" v-model="password" placeholder="Enter your Password"
                    required>
                <p v-if="!isValidPassword_var" class="errEmail" style="color: red;">Password is required</p>
                <!-- <input type="submit" v-on:click="fn_signUp" value="Sign Up" /> -->
                <input type="submit" value="Sign Up" />
                <router-link to="/login">Login Here!</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SignUp',
    data() {
        return {
            isValidName_var: true,
            isValidEmail_var: true,
            isValidPassword_var: true,
            name: null,
            email: null,
            password: null,
        }
    },
    methods: {
        isValidName() {
            this.isValidName_var = !!this.name
            return !!this.name;
        },
        isValidEmail() {
            this.isValidEmail_var = !!this.email
            return !!this.email;
        },
        isValidPassword() {
            this.isValidPassword_var = !!this.password;
            return !!this.password;
        },
        async fn_signUp() {
            var data = JSON.stringify({
                "name": this.name,
                "email": this.email,
                "password": this.password
            });

            // to save data in API we have to use post() || if we fetch data then will use get()
            let saveData = await axios.post("http://localhost:3000/users", data);
            console.log(saveData);
            if (saveData.status == 201) { 
                localStorage.setItem("user-info", JSON.stringify(saveData.data)); // JSON.stringify will convert data into string from object
                alert("You have registered.");
                this.$router.push({name: 'homeComp'});
            }
        }
    },
    mounted() {
        let is_logged = localStorage.getItem('user-info');
        if (is_logged) {
            this.$router.push({ name: 'homeComp' });
        }
    }
}
</script>

<style scoped>
.register {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 20px;
    padding: 20px;
}

.logo {
    width: 100px;
}

.register input {
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

.register button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    border-radius: 50px;
    color: black;
    background-color: skyblue;
    cursor: pointer;
}
</style>