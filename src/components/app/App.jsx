import { Routes, Route } from 'react-router-dom';
import { Home, Login, ForgotPassword, Profile, Register } from '../../pages';
import ResetPassword from '../../pages/reset-password/ResetPassword';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/register' element={<Register />} />
      <Route path='/reset-password' element={<ResetPassword />} />
    </Routes>
  )
}

export default App;
