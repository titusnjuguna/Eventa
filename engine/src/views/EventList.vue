<template>
  <div class="about">
    <h1>Events</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
     
  </div>
</template>
<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventServices.js'
export default{
  components:{
    EventCard
  },
  data(){
    return{
      events:[]
    }

  },
  created(){
    EventService.getEvents().then(response =>{
      this.events= response.data
      }
    )
    .catch( error => {
      console.log('This is an error '+ error.response)
    })
  }
}
</script>
