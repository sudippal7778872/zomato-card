import React, { useState } from 'react'
import "./style.css"
import FoodData from "./FoodData";
import Form from 'react-bootstrap/Form';
import Cards from './Cards';

const Search = () => {
    const [fdata, setFdata] = useState(FoodData)
    const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
    return (
        <>
            <div className='container d-flex justify-content-between align-items-center' style={{ marginTop: "1rem" }}>
                <img src={zomatologo} alt="" style={{ height: "1.9rem", cursor: "pointer" }} />
                <h3 style={{ color: "green" }}>Search Filter App</h3>
            </div>

            <Form className='d-flex justify-content-center align-items-center mt-3'>
                <Form.Group className="mx-2 col-lg-4" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Search Your Restaurant" />
                </Form.Group>
                <button className='btn text-light col-lg-1' style={{ background: "#ed4c67" }} >Submit</button>
            </Form>

            <section style={{ marginTop: "2rem" }}>
                <h2 style={{ paddingLeft: "8rem" }}>Restaurant in Ahmedabad is open Now. </h2>
            </section>

            <div>
                <Cards />
            </div>
        </>
    )
}

export default Search