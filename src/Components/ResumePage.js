import React, { useContext } from 'react'
import Context from '../Contexts/Context'

export default function ResumePage() {
  const dataContext = useContext(Context)
  console.log(dataContext)
  return (
    <div>resume</div>
  )

}