import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div class="container mt-4">
    <div class="row">
      <div class="col-md-6 offset-md-3 text-center">
        <h2>Oops! it's a Dead End.</h2>
        <Link to="/" class="btn btn-primary">Return Home</Link>
      </div>
    </div>
  </div>
  )
}
