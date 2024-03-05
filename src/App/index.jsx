import { Routes, Route } from "react-router-dom";
import * as pages from "../utils/Pages"
import { paths } from "../utils/paths"

const App = () => {
  return (
	<Routes>
    <Route path={paths.home} element={<pages.Home/>}/>
    <Route path={paths.login} element={<pages.Login/>}/>
    <Route path={paths.register} element={<pages.Register/>}/>
    <Route path={paths.blogdetail('id')} element={<pages.BlogDetail/>}/>

    {/* Authors */}
    <Route path={paths.author} element={<pages.CreateBlog/>}/>

    {/* Admin */}
  </Routes>
  )
}

export default App