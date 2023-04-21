// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// MILESTONE 1
// Stampare all'interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)




const { createApp } = Vue

  createApp({
    data() {
      return {
        //variabili vue 3
        testoInput:'',
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
        
        error: false,
      }
    },
    methods: {
        //funzioni vue 3
        insertItem(){

          //creo un oggetto vuoto
          this.obj = {
            text: '',
            done: false,
          }

          //condizione se la task inserita non é vuota o la task non supera i 3 caratteri
          if( this.testoInput != '' && this.testoInput.length > 3){

            //pusho testo in input nell text dell'oggetto
            this.obj.text = this.testoInput          
            // console.log(this.obj)

            //pusho l'oggetto nell'array
            this.todos.unshift(this.obj)
            // console.log(this.todos)

            //pulisco il campo di input
            this.testoInput = '';

            this.error = false;

          } else {

            //imposto la variabile error: vera
            this.error = true;
          }
        },

        deleteComand(i){

          //elimino l'oggetto specifico dall'array tramite l'index
          this.todos.splice( i, 1)

        },
        

        lineThrough(i){

          //condizione se il singolo oggetto é false
          if( this.todos[i].done == false){

            //se é false lo imposto true
            this.todos[i].done = true;

          } else {

            //se é vero lo imposto false
            this.todos[i].done = false;
          }
          
        },
    }
  }).mount('#app')
