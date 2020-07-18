import React, { useContext } from 'react'
import Context from '../Contexts/Context'
import Carousel from './Carousel/Carousel';
import '../Components/Carousel/Carousel.css';



export default function BioPage(props) {
  const dataContext = useContext(Context)
  console.log(dataContext)
  return (
    <div>

    </div>
  )
}
