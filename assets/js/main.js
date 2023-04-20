const { createApp } = Vue

  createApp({
    data() {
      return {
        //variabili vue 3
        value:'',
        todos: [
          {
            text: 'Fare i compiti',
            done: false
          },
          {
            text: 'Fare la spesa',
            done: true
          },
          {
            text: 'Fare il bucato',
            done: false
          }
        ],
        obj:{
          text: '',
          done: false,
        }, 

      }
    },
    methods: {
        //funzioni vue 3
        insertItem(){
          this.obj.push()
        }
    }
  }).mount('#app')
