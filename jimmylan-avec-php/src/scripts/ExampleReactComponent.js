import React, { useState } from "react"

function ExampleReactComponent() {
  const [clickCount, setClickCount] = useState(0)

  return (
    <div className="example-react-component" onClick={() => setClickCount(prev => prev + 1)}>
      <h1>Hello from jim!</h1>
      <p>vOUS AVEZ CLIQUER {clickCount} times.</p>
      <p>allons sur mon blog</p><a href="/blog">Mon blog</a>
    </div>
  )
}

export default ExampleReactComponent
