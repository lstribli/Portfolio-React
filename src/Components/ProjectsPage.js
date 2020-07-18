import React, { useContext } from 'react'
import Context from '../Contexts/Context'
import { Link, Switch, Route } from 'react-router-dom'
import Carousel from '../Components/Carousel/ProjectsCarousel'
export default function ProjectsPage() {
  const dataContext = useContext(Context)


  return (

    <div id="projects">
      {Carousel(dataContext)}
    </div>


  )
}
