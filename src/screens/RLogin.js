import React from 'react'
import { Link } from 'react-router-dom'

export default function RLogin() {
    return (
        <div>
            <section className="vh-100" style={{ "backgroundcolor": "#eee", "background-image": "blogo.jpeg" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ "borderradius": "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Admin Login</p>
                                            <form className="mx-1 mx-md-4" >
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="username" id="form3Example3c" className="form-control" name="username" />
                                                        <label className="form-label" htmlFor="form3Example3c">User Name</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4c" className="form-control" name="password" />
                                                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <Link  className="m-3 btn btn-primary btn-lg" to='/rpage'>Login</Link>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img src="blogo.jpeg" className="img-fluid" alt="Sample image" style={{ filter: "brightness(60%)" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
