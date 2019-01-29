// Storage Controller

// Item Controller
const ItemCtrl = (function(){
  // Item Constructor
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
    items: [
      {id: 0, name: 'Steak Dinner', calories: 1200},
      {id: 1, name: 'Ribs', calories: 1500},
      {id: 2, name: 'Pizza', calories: 1800},
    ],
    currentItem: null,
    totalCalories: 0
  }

  return {
    logData: function(){
      return data;
    }
  }
})();

// UI Controller
const UICtrl = (function(){
  
})();

// App Controller
const App = (function(ItemCtrl, UICtrl){

  return {
    init: function(){
      console.log('App is online...');
    }
  }
  
})(ItemCtrl, UICtrl);

// Initialize App 
App.init();
