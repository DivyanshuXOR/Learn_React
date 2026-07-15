import React from 'react'
import { useEffect , useState } from 'react'


function GitHub() {
    const [data , setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/DivyanshuXOR')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    }, [])
    return (
    <>
    <div className='flex justify-center max-inline-full  bg-red-400 '><img  src={data.avatar_url} alt="Git_picture"  height={100} width={300} /></div>
    <div className='text-center bg-green-200  text-black text-3xl '>{data.name}</div>
    <div className='text-center bg-green-200  text-black text-xl'>GitHub Followers: {data.followers}</div>
    <div className='text-center bg-green-200  text-red-400 text-4xl font-bold'>{data.bio}</div>
    </>
  )
}

export default GitHub