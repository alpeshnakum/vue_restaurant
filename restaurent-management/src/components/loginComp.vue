<template>
    <div class="login">
        <h1>Login</h1>
        <form @submit.prevent="fn_login" method="post">
            <div class="login">
                <p v-if="!areInvalid_var" class="errPassword" style="color: red;">Invalid email or password</p>
                <input @keyup="isValidEmail()" type="email" v-model="email" placeholder="Enter your Email" >
                <p v-if="!isValidEmail_var" class="errEmail" style="color: red;">Please enter valid email</p>
                <input @keyup="isValidPassword()" type="password" v-model="password" placeholder="Enter your Password" >
                <p v-if="!isValidPassword_var" class="errPassword" style="color: red;">Please enter valid password</p>
                <!-- <input type="submit" v-on:click="fn_signUp" value="Sign Up" /> -->
                <input type="submit" value="Login" />
                <router-link to="/signup">SignUp Here!</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'loginComp',
    data() {
        return {
            areInvalid_var: true,
            isValidEmail_var:true,
            isValidPassword_var:true,
            email: '',
            password: '',
        }
    },

    methods: {
        isValidEmail() {
            this.isValidEmail_var =!!this.email
            return !!this.email;
        },
        isValidPassword() {
            this.isValidPassword_var = !!this.password;
            return !!this.password;
        },
        async fn_login() {
            const isFromSubmit = this.isValidEmail_var && this.isValidPassword_var;
            if (isFromSubmit) {
                let getData = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
                if (getData.status == 200 && getData.data.length > 0) {
                    localStorage.setItem("user-info", JSON.stringify(getData.data[0]));
                    this.$router.push({ name: 'homeComp' });
                } else {
                    // this.isValidEmail_var = false;
                    // this.isValidPassword_var = false;
                    this.areInvalid_var = false;
                }   
                console.log(getData);
            } else { 
                console.log('form is invalid =============');
            }
        }
    },
    mounted() {
        var is_logged = localStorage.getItem('user-info');
        if (is_logged) {
            this.$router.push({ name: 'homeComp' });
        }
    }
}
</script>

<style scoped>
.login {
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

.login input {
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

.login button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    border-radius: 50px;
    color: black;
    background-color: skyblue;
    cursor: pointer;
}
</style>