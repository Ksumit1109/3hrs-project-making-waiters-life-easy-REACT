import React from "react";

const ItemList = ({items}) => {
    return (
        <div className="p-5 card mt-4 fonts">
            <h1 className="card-header ps-1 bg-secondary text-white">ORDERS</h1>
            <div>
                <h2 className="card-subtitle bg-light ps-2">Table 1</h2>
                <ul>
                    {items.filter((item) => item.table === "Table 1").map((item, index) => (
                        <li className="list-group card-text" key={index}>
                            {item.dish} - ₹ {item.price}
                            
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2 className="card-subtitle bg-light ps-2">Table 2</h2>
                <ul>
                    {items.filter((item) => item.table === "Table 2").map((item, index) => (
                        <li className="list-group card-text" key={index}>
                            {item.dish} - ₹ {item.price}
                        </li>
                    ))} 
                </ul>
            </div>
            <div>
                <h2 className="card-subtitle bg-light ps-2">Table 3</h2>
                <ul>
                    {items.filter((item) => item.table === "Table 3").map((item, index) => (
                        <li className="list-group card-text" key={index}>
                            {item.dish} - ₹ {item.price}
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
    )
}

export default ItemList;