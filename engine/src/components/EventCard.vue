<template>
<router-link :to="{name:'eventShow',params:{id:1}}">
    <div>
        <span>@{{event.time}} on {{event.date}}</span>
        <h3>{{ event.title }} </h3>
        <span>{{event.attendees.length}} People Attending </span>
    </div>
</router-link>
    
</template>
<script>
export default ({
    props:{
        event: Object
    }
     

})
</script>
<style scoped>
h3{
    color: green;
}

</style>>


