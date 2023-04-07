import { Routes, Route } from "react-router-dom";
import { ForgotPassword } from '../pages/Auth/ForgotPassword/ForgotPassword';
import { Login } from '../pages/Auth/Login';
import { Registration } from '../pages/Auth/Registration';
import { JobDetail } from '../pages/Garden/JobDetail';
import { Transaction } from '../pages/Transaction';
import { Profile } from '../pages/User/Profile';
import { ProjectPost } from "../pages/Transaction/_partials/ProjectPost";
import { EditProfile } from "../pages/User/_partials/EditProfile";
import { Confirmation } from "../pages/Auth/ConfirmationPage/ConfirmationPage";
import { Garden } from "../pages/Garden/Garden";
import Dashboard from "../pages/Dashboard/Dashboard";
import { Chat } from "../pages/Chat/Chat";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="garden" element={<Garden />} />
      <Route path="login" element={<Login />} />
      <Route path="chat" element={<Chat />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="register" element={<Registration />} />
      <Route path="confirmation" element={<Confirmation />} />
      <Route path="garden/job-detail" element={<JobDetail />} />
      <Route path="user" element={<Profile />} />
      <Route path="user/edit-profile" element={<EditProfile />} />
      <Route path="transaction" element={<Transaction />} />
      <Route path="transaction/post-project" element={<ProjectPost />} />
    </Routes>
  );
};

export default UserRoutes;