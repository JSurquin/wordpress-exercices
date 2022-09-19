import React, {useState, useEffect} from "react"
import {Link} from 'react-router-dom'
function Header() {

  const [pages, setPages] = useState([]);

  const baseUrl = 'http://localhost:8080/'
  
  useEffect(() => {
    fetch("http://localhost:8080/wp-json/wp/v2/pages").then(data => data.json().then(d => 
    setPages(d)
      ))
  }, [])

  return (
    <div className="example-react-component">
      <ul>
        <a style={{color: 'white'}} href='/'>Accueil</a>
      {pages?.map((page) => <li> <a style={{color: 'white'}} href={`${baseUrl + page.slug}`}>{page.title.rendered}</a> </li>)}
      </ul>
    </div>
  )
}

export default Header;
