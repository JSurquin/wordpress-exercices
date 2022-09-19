import React, {useState, useEffect} from "react"
import { useParams } from "react-router";

function Post() {

  const [myArticle, setMyArticles] = useState();
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/wp-json/wp/v2/posts/?slug=${params.slug}`).then(post => post.json().then(p => setMyArticles(p)))
  }, [])

  return (
    <div style={{background: 'red'}}>
      {myArticle?.length && (
          <p dangerouslySetInnerHTML={{__html: myArticle[0]?.content?.rendered}}/>
      )}
    </div>
  )
}

export default Post;
