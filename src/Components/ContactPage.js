import React, { useContext } from 'react'
import Context from '../Contexts/Context'

export default function ContactPage() {
  const dataContext = useContext(Context)
  console.log(dataContext)
  return (
    <div>contact</div>
  )
}
