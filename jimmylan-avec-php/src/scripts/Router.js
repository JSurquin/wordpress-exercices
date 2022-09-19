import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ExampleReactComponent2 from './ExampleReactComponent2'
import Footer from "./Footer";
import Header from "./Header";
import Home from './Home';
import Post from './Post';

const Router = () => {
return (
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path="/boutique">
          <Route path=":slug" element={<Post/>}/>
        </Route>
        {/* <Route path="/blog">
          <Route path=":slug" element={<Post/>}/>
        </Route> */}
      <Route path="/mon-blog" element={<ExampleReactComponent2 />}>
        </Route>
    </Routes>
  </BrowserRouter>
)
}

export default Router;