import React from 'react'
import { Link } from 'react-router-dom'

function Cocktail({name,image,info,glass,id}) {
  return (
<div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 mt-4">
    <div className="card p-0 overflow-hidden h-100 shadow">
      <img src={image} className="card-img-top img-fluid"
        alt="name" />
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <h6 className="card-title">{glass}</h6>
        <p className="card-text">
         {info}
        </p>
      </div>
      <Link to={`/cocktail/${id}`} className='btn btn-success'>Details</Link>
    </div>
  </div>






  )
}

export default Cocktail

