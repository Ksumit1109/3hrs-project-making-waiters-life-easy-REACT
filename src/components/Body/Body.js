import React, { useState, useEffect } from "react";
import InputField from "./Inputs and buttons/InputField";
import ItemList from "./Items/ItemList";


const uniqueID = Math.floor(Math.random()*10)

const Body = () => {
  const [items, setItems] = useState([]);

  // Function to load data from local storage when the component mounts
  useEffect(() => {
    const savedItems = localStorage.getItem({uniqueID});
    if (savedItems) {
      // Parse the saved items from string to an array
      const parsedItems = JSON.parse(savedItems);
      setItems(parsedItems);
    }
  }, []); // The empty array [] as the second argument ensures this effect runs only once when the component mounts.

  const handleItemSubmit = (newItem) => {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);

    // Save the updated items to local storage
    localStorage.setItem({uniqueID}, JSON.stringify(updatedItems));
  };

  return (
    <>
      <InputField onItemSubmit={handleItemSubmit} />
      <ItemList items={items} />
    </>
  );
};

export default Body;
