<template>
    <div>
        <router-link :to="{name:'eventList'}">Real Events</router-link> |
        <nav>
            <router-link :to="{name:'eventList'}">List</router-link> |
            <router-link :to="{name:'eventShow',params:{id:1}}">Show</router-link>|
            <router-link :to="{name:'profile',params:{ username:'Njugush'}}">Profile</router-link>|
            <router-link :to="{name:'eventCreate'}">Create</router-link>
        </nav>    
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>