import React, { useContext } from 'react'
import Context from '../../Contexts/Context'
import Carousel from './BioCarousel';




export default function BioPage(props) {
  const dataContext = useContext(Context)
  console.log(dataContext)
  return (
    <div id="projects">
      {Carousel(dataContext)}
    </div>
  )
}
