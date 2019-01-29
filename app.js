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

  // Public methods
  return {
    getitems: function(){
      return data.items;
    },
    logData: function(){
      return data;
    }
  }
})();

// UI Controller
const UICtrl = (function(){

  // Public methods
  return {
    populateItemList: function(items){
      let html = '';

      items.forEach(function(item){
          html += `<li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
      </a>
    </li>`;
      });

      // Insert list items
      document.querySelector('#item-list').innerHTML = html;
    }
  }
  
})();

// App Controller
const App = (function(ItemCtrl, UICtrl){

  // Public methods
  return {
    init: function(){
      // Fetch items from data structure
      const items = ItemCtrl.getitems();

      // Populate list with items
      UICtrl.populateItemList(items);
    }
  }
  
})(ItemCtrl, UICtrl);

// Initialize App 
App.init();
