import React from 'react'
import  { useState } from 'react'


export default function AddItem() {
    const [item, setitem] = useState({ CategoryName: "", name: "", img: "", geolocation: "" })
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5003/api//createitem",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: item.name, CategoryName: item.CategoryName, img: item.img, price :item.price })
        });
        const json = await response.json()
        console.log(json);
        if (!json.success) {
            alert("Please enter valid details of the item");
        }
        else{
            window.confirm("Item Created")
        }
    }
    const onChange = (event) => {
        setitem({ ...item, [event.target.name]: event.target.value })
    }
    return (
        <div>
            <div className="container h-100">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>New Item</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label for="iname">Item Name</label>
                                        <input type="text" className="form-control" id="name" name="name" value={item.name} onChange={onChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label for="category">Category Name</label>
                                        <input type="text" className="form-control" id="cartegory"  name="CategoryName" value={item.CategoryName} onChange={onChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label for="imagesrc">Image Source</label>
                                        <input type="text" className="form-control" id="imgsrc" name="img" value={item.img} onChange={onChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label for="price">Price</label>
                                        <input type="text" className="form-control" id="price-1"  name="price" value={item.price} onChange={onChange}/>
                                    </div>
                                    <button type="submit" className="m-3 btn btn-primary btn-lg">ADD</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
