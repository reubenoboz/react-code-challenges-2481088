import { useState, useEffect } from "react"

export default function DogPics () {
  const [image, setImage] = useState("")

  const fetchImage = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await res.json()
    setImage(data.message)
  }

  useEffect(() => {
    fetchImage()
  }, [])
  

  return (
    <div className='dog-pics'>
      <img style={{height: '400px', width: '400px', objectFit: 'contain'}} src={image}/>
      <button onClick={fetchImage}>🐶</button>
    </div>
  )
}
