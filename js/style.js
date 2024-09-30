const addButton = document.getElementById('addButton');
 
  const itemList = document.getElementById('items');

  
  addButton.addEventListener('click', () => {
      
      const itemCount = itemList.children.length;
     
      const newItem = document.createElement('li');
      newItem.className = 'item';
      newItem.textContent = `Item ${itemCount + 1}`;
      
      itemList.appendChild(newItem);
  });