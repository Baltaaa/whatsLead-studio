import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import BeautyDemo from "../pages/demos/BeautyDemo"
import DentalDemo from "../pages/demos/DentalDemo"
import LegalDemo from "../pages/demos/LegalDemo"

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />

         {/* DEMOS */}
         <Route path="/demo/beauty" element={<BeautyDemo />} />
        <Route path="/demo/dental" element={<DentalDemo />} />
        <Route path="/demo/legal" element={<LegalDemo />} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter