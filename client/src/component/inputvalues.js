import React, { useState } from 'react'
import axios from "axios"

function Inputvalues() {

  const [values, setvalues] = useState({
    productName: "",
    price: 0,
  })

  const [image, setimage] = useState(null)

  const handlesubmit = (e) => {
    e.preventDefault();

    if (values.price === 0) {
      return alert(" price connot be empty")
    }

    const formdata = new FormData()
    // formdata.append(values)
    formdata.append('image', image)
    formdata.append('productName', values.productName)
    formdata.append('price', values.price)

    console.log(formdata)


    axios.post("http://localhost:5000/api/addproduct", formdata).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })

  }
  const handlechange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value })
  }

  const handleimage = (e) => {
    setimage(e.target.files[0])
  }

  console.log(values)

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input required onChange={handlechange} name="productName" value={values.productName} type='text'></input>
        <input required onChange={handlechange} name="price" value={values.price} type='number'></input>
        <input required onChange={handleimage} name="images" type='file'></input>
        <input type='submit' value="submit"></input>
      </form>
    </div>
  )
}

export default Inputvalues