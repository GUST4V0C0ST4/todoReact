import { BrowserRouter, Route, Routes } from "react-router";
import PageComponent from "./pages/page-components";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/componentes" element={<PageComponent />} />
      </Routes>
    </BrowserRouter>
  )
}
