import React, { useContext } from 'react'
import Context from '../Contexts/Context'

export default function ContactPage() {
  const dataContext = useContext(Context)
  console.log(dataContext)
  return (
    <div id="contact">
      <h2>Reach me at any one of these mediums</h2>
      <ul id="contactList">
        {dataContext.contact.map(c =>
          <li key={c.id}>
            <a href={c.link} target="none"> <img src={c.icon} /> </a>

          </li>
        )}
      </ul>
    </div>
  )
}
