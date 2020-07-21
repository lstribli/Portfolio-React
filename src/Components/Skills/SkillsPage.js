import React, { useContext } from 'react'
import Context from '../../Contexts/Context'
import Carousel from './SkillsCarousel'
export default function SkillsPage() {
  const dataContext = useContext(Context)
  console.log(dataContext)
  return (
    <div>
      {Carousel(dataContext)}
    </div>
  )
}
