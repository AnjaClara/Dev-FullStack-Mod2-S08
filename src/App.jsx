import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import ContactPage from "./Page/ContactPage/ContactPage"
import HomePage from "./Page/HomePage/HomePage"
import NotFound from "./Page/NotFound/NotFound"
import Produtos from "./Page/Products/Produtos"

function App() {

  return (
    <Router>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='contact' element={<ContactPage/>}/>
        <Route path='product' element={<Produtos/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App
