<template>
    <div class="header">
        <div class="nav">
            <div class="nav-menu">
                <router-link to="/" class="menu-item">Home</router-link>
                <router-link to="/add-resto" class="menu-item">Add Restaurent</router-link>
                <!-- <router-link to="/update-resto" class="menu-item">Update Restaurent</router-link> -->
                <a class="menu-item" @click="logout">Logout</a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'headerComp',
    methods: { 
        logout() {
            localStorage.clear();
            this.$router.push({name: 'loginComp'});
        }
    }
}
</script>


<style scoped>
.nav{
    background-color: #333;
    overflow: hidden;
}

.menu-item{
    float: left;
    color: white;
    text-align: center;
    padding: 10px 14px;
    text-decoration: none;
    font-size: 20px;
}

.menu-item:hover{
    background-color: #ddd;
    color: #222;
}
</style>