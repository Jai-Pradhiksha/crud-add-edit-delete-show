let data =[]

function addItem(item) {
    data.push(item);
    console.log('Added:', item);
  }
  
  function editItem(index, newItem) {
    if (index >= 0 && index < data.length) {
      data[index] = newItem;
      console.log('Edited:', newItem);
    } else {
      console.log('Item not found at index', index);
    }
  }
  
  function deleteItem(index) {
    if (index >= 0 && index < data.length) {
      const deletedItem = data.splice(index, 1);
      console.log('Deleted:', deletedItem[0]);
    } else {
      console.log('Item not found at index', index);
    }
  }
  
  function showItems() {
    data.forEach((item, index) => {
      console.log(`Index ${index}:`, item);
    });
  }

addItem({ name: 'Item 1', value: 10 });
addItem({ name: 'Item 2', value: 20 });
editItem(0, { name: 'Updated Item 1', value: 30 });
deleteItem(1);
showItems();
