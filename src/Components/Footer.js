import React, { useContext } from 'react'
import Context from '../Contexts/Context'

export default function Footer() {
  const dataContext = useContext(Context)
  console.log(dataContext)
  return (
    <div>Footer</div>
  )

}