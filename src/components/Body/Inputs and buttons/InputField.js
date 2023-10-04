import React,{useState} from "react";


const InputField= ({onItemSubmit})=>{

    const [price , setPrice] = useState('')
    const priceHandler = (event)=>{
        setPrice(event.target.value)
    }

    const [dish , setDish] = useState('')  
    const dishHandler = (event)=>{
        setDish(event.target.value)
    }

    const [table , setTable] = useState('Table 1')
    const tableHandler = (event)=>{     
        setTable(event.target.value)
    }
 

    const handleSubmit = () => {
        // Create a new item object
        const newItem = {
          price: price,
          dish: dish,
          table: table,
        }    

        onItemSubmit(newItem)

        // Clear the input fields
        setPrice("");
        setDish("");
      };



      
    return(

        <div className="d-flex justify-content-around fonts">
            <div className="Form">
                <label>Choose Price</label>
                <input className="m-2" type="Number" value={price} onChange={priceHandler} placeholder="Enter Price" />
                <label>Choose Item</label>
                <input className="m-2" type="text" value={dish} onChange={dishHandler} placeholder="Enter Dish"/>
                <label className="m-2">Choose Category</label>
                <select name="Category" id="Category" value={table} onChange={tableHandler}>
                    <option  >Table 1</option>
                    <option >Table 2</option>
                    <option>Table 3</option>
                </select>
                <button className="btn btn-primary ms-3" onClick={handleSubmit}>Add Bill</button>
            </div>
        </div>
    )
}

export default InputField;