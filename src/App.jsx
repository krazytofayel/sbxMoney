import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Help from './Pages/Help/Help';
import HelpDetail from './Pages/Help/HelpDetail/helpDetail';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact_Us from './Pages/Contact_Us/Contact_Us';
import Condition_Of_Use from './Pages/Static_Page/Condition_Of_Use/Condition_Of_Use';
import Privacy_Policy from './Pages/Static_Page/Privacy_Policy/Privacy_Policy';
import Lagel_Agreement from './Pages/Static_Page/Lagel_Agreement/Lagel_Agreement';
import User_Guide from './Pages/Static_Page/User_Guide/user_Guide';
import Login_Form from './Pages/Login_Logout/Login_Form/Login_Form';
import SignUp from './Pages/Login_Logout/Sign_UP_Form/Sign_Up';
import NotFoundpage from './Pages/NotFound_Page/NotFoundpage';
import Admin from './Pages/DashBoard/Admin/Admin';
import Money_Transfer_Process from './Components/ShareableComponents/MoneyTransferProcess/Money_Transfer_Process';
import Sender_Information from './Components/ShareableComponents/MoneyTransferProcess/Money_Transfer_Process_Component/Sender_Information/Sender_Information';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import ForgotPasswordRequest from './Pages/Login_Logout/ForgotPassword/ForgotPasswordRequest/ForgotPasswordRequest';
import ResetPassword from './Pages/Login_Logout/ForgotPassword/ResetPassword/ResetPassword';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/helpdetails" element={<HelpDetail />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<Contact_Us />} />
        <Route path="/condition_of_use" element={<Condition_Of_Use />} />
        <Route path="/privacy_policy" element={<Privacy_Policy />} />
        <Route path="/lagel_agreement" element={<Lagel_Agreement />} />
        <Route path="/user_guide" element={<User_Guide />} />
        <Route path="/sign_in" element={<Login_Form />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/sendmoney" element={<ProtectedRoute><Money_Transfer_Process /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        <Route path='/sender' element={<ProtectedRoute><Sender_Information /></ProtectedRoute>} />
        {/*-------------------- NotFound page start--------------------- */}
        <Route path="/404" element={<NotFoundpage />} />
        <Route path="*" element={<Navigate to="/404" />} />
        {/*---------------------- NotFound page End------------------------ */}

        {/* forget password */}
        <Route path="/forgot-password" element={<ForgotPasswordRequest />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App;
