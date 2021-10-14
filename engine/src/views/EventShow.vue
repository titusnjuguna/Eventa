<template>
  <div class="home">
    <h1> {{event.title}} </h1>
    <span>@{{event.time}} on {{event.date}}</span>
    <h2>{{event.categories}}</h2>
    <p>{{event.description}}</p>
    <h3>Location: {{event.location}}</h3>
    <p>{{event.attendees ? event.attendees.length : 0}} people attending</p>
    <h4>Attendees Detail</h4>
    <ul>
      <li v-for="attendee, index   in event.attendees" :key="index"> {{attendee.name}}</li>
    </ul>

      
  </div>
</template>
<script>
import EventService from '@/services/EventServices.js'
export default{
  props:['id'],
  data(){
    return {
      event : {}
    }
  },
  created(){
    EventService.getEvent(this.id).then(response => {
      this.event = response.data
    })
    .catch(error => console.log('There was an error:' , error.response))
  }
}
</script>
