import React, { useContext } from 'react'
import Context from '../Contexts/Context'
import Carousel from '../Components/Carousel/Carousel'

export default function HomePage() {
  const dataContext = useContext(Context)
  console.log(dataContext)

  // console.log(this.context)
  return (
    <div></div>
  )

}