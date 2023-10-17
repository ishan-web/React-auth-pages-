import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Signin from './pages/siginin/Signin'
import Forgotpassword from './pages/forgotpassword/Forgotpassword'
import Resetpassword from './pages/resetpassword/Resetpassword'

import { BrowserRouter, Routes, Route  } from 'react-router-dom';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Sidebar />}>

                </Route>
                <Route path='/signin' element={<Signin/>}></Route>
                <Route path='/forgot_password' element={<Forgotpassword/>}></Route>
                <Route path='/reset_password' element={<Resetpassword/>}></Route>
            </Routes>
        </BrowserRouter>

    )
}
export default App