import React, { useState, useEffect } from "react"

function ExampleReactComponent2() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/wp-json/wp/v2/posts").then(data => data.json().then(d => 
    setPosts(d)
      ))
  }, [])
  

  return (
    <div>
    <ul>
    {posts.map((post) => <li> <a href={`/blog/${post?.slug}`}>{post?.title.rendered}</a> </li>)}
    </ul>
    </div>
  )
}

export default ExampleReactComponent2
