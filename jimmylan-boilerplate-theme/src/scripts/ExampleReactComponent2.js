import React, { useState } from "react"

function ExampleReactComponent2() {
  const [clickCount, setClickCount] = useState(0)

  return (
    <div className="example-react-component" onClick={() => setClickCount(prev => prev + 1)}>
<p>allons sur mon blog</p><a href="/mon-blog">Mon blog</a>
    <p>je n'avais pas compris</p>
    </div>
  )
}

export default ExampleReactComponent2
