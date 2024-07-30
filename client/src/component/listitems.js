import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Listitems() {

    const [data, setdata] = useState(null)

    const getdata = () => {
        axios.get("http://localhost:5000/api/allproduct")
            .then((res) => setdata(res.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getdata()
    }, []) 

    const handledelete = (id) => {
        axios.delete(`http://localhost:5000/api/deleteproduct/${id}`)
            .then((res) => {alert(res.data);getdata()})
            .catch((err) => console.log(err))
    }

    const img= {
        with:"250px",
        height:"250px"
    }

    const productDiv = {
        display :"flex"
    }

    return (
        <div>
            <img src='http://localhost:5000/image/1721723057225-cup-of-coffee-1280537_1920.jpg' alt='run'></img>
            {data?.map((data) => {
                return <div style={productDiv} key={data._id}>
                    <p >{data?.productName}</p>
                    <p >{data?.price}</p>
                    <img style={img} src={`http://localhost:5000/${data?.image}`} alt={data?.productName} ></img>
                   <div> <button onClick={() => handledelete(data._id)}>delete</button> </div>
                </div>
            }

            )}

        </div>
    )
}

export default Listitems