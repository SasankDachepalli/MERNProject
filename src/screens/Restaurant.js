import React from 'react'
import { Link } from 'react-router-dom'


export default function Restaurant() {
    // let options = props.options;
    // let priceOptions = Object.keys(options);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">Restaurant 34</Link>
                    <div className='d-flex'>
                        <Link className="btn bg-white text-sucess mx-1" to="/addItem">Add Item</Link>
                        <Link className="btn bg-white text-sucess mx-1" to="/rOrders">Orders</Link>
                    </div>
                </div>
            </nav>
            <div> 
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col" >Item Name</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Options</th>
                            <th scope="col">Price</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='table-primary'>
                            <th scope="row" rowSpan={2}>1</th>
                            <td rowSpan={2}>Chicken Fried Rice</td>
                            <td rowSpan={2}>Biryani/Rice</td>
                            <td>half</td>
                            <td>130</td>
                            <td rowSpan={2}><button className="btn-warning">Update</button></td>
                            <td rowSpan={2}><button className="btn-danger">Delete</button></td>
                        </tr>
                        <tr className='table-primary'>
                            <td>full</td>
                            <td>220</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row" rowSpan={2}>2</th>
                            <td rowSpan={2}>Veg Fried Rice</td>
                            <td rowSpan={2}>Biryani/Rice</td>
                            <td>half</td>
                            <td>110</td>
                            <td rowSpan={2}><button className="btn-warning">Update</button></td>
                            <td rowSpan={2}><button className="btn-danger">Delete</button></td>
                        </tr>
                        <tr className='table-secondary'>
                            <td>full</td>
                            <td>200</td>
                        </tr>
                        <tr className='table-primary'>
                            <th scope="row" rowSpan={2}>3</th>
                            <td rowSpan={2}>Fish Biryani</td>
                            <td rowSpan={2}>Biryani/Rice</td>
                            <td>half</td>
                            <td>200</td>
                            <td rowSpan={2}><button className="btn-warning">Update</button></td>
                            <td rowSpan={2}><button className="btn-danger">Delete</button></td>
                        </tr>
                        <tr className='table-primary'>
                            <td>full</td>
                            <td>320</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
