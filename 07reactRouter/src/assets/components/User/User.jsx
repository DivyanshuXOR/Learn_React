import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='text-4xl bg-amber-50 px-2 py-2 text-black '>Welcome User: {userid}</div>
  )
}

export default User