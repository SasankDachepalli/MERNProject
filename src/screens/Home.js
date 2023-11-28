import React, { useEffect, useState } from 'react'
import Navbar from './Restaurant'
import { Badge } from 'react-bootstrap'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import {Link,useNavigate} from "react-router-dom";
import Cart from './Cart'

import Model from '../Model1'
import { useCart } from '../components/ContextReducer'

export default function Home() {
  const [search,setSearch] = useState('');
  const navigate = useNavigate;
  const handleLogout = ()=>{
    localStorage.removeItem("authToken");
    navigate("/login");
  }
  let data = useCart();
  const [cartView,setCartview] = useState(false)
  const [foodCat, setFoodCat] = useState([])
  const [foodItem, setFoodItem] = useState([])
  const loadData = async () => {
    let response = await fetch("http://localhost:5003/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'applictaion/json'
      }
    });
    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
    // console.log(response[0],response[1]);
  }
  
  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
      {/* <div><Navbar></Navbar></div> */}
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">Restaurant 34</Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/rlogin">Restauarnt Login</Link>
              </li>
            </ul>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {(localStorage.getItem("authToken"))?
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/myOrder">My Orders</Link>
                  </li>
                : ""}
              </ul>
              {(!localStorage.getItem("authToken"))?
              <div className='d-flex'>
                <Link className="btn bg-white text-sucess mx-1" to="/login">Login</Link>
                <Link className="btn bg-white text-sucess mx-1" to="/signup">SignUp</Link>
              </div>
                :
                <div className='d-flex'>
                  <div className='d-flex'>
                    <Link className="btn bg-white text-sucess mx-2" onClick={()=>{setCartview(true)}}>My cart{"     "}
                      <Badge pill bg='danger'>{data.length}</Badge>
                    </Link>
                  </div>
                  {cartView? <Model onClose={()=>setCartview(false)}><Cart></Cart></Model>:""}
                  <div className='d-flex'>
                    <Link className="btn bg-danger text-sucess mx-2"  onClick={handleLogout}>Logout</Link>
                  </div>
                </div>
              }
              
                  

              <div className="d-flex justify-content-center">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div><Carousel></Carousel></div>
      <div className='container m-3 b-3'>
        {

          foodCat !== []
            ? foodCat.map((data) => {
              return (<div className='row mb-3'>
                <div key={data._id} className='fs-3 m-3'>
                  {data.CategoryName}
                </div>
                <hr />
                {foodItem !== []
                  ?
                  foodItem.filter((item) => (item.CategoryName == data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                    .map(filterItems => {
                      return (
                        <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                          <Card foodItem={filterItems}
                            foodDesc={filterItems.description}
                            price = {filterItems.price}
                            // imgsrc={filterItems.img}
                          ></Card>
                        </div>
                      )
                    }
                    ) : <div>No such data found"</div>}
              </div>
              )
            })
            : <div></div>

        }
      </div>
      <div><Footer></Footer></div>
    </div>
  )
}
