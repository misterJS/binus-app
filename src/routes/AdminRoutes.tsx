import { Routes, Route } from "react-router-dom";
import { Chat } from '../pages/Chat/Chat';
import UserManagement from '../pages/Cms/UserManagement/UserManagement';
import { RankingManagement } from '../pages/Cms/RankingManagement';
import { BannerSettings, ReportManagement, TransactionManagement, ViolationManagement } from "../pages/Cms";
import { TransactionDetail } from "../pages/Cms/TransactionManagement/_partials/detail/TransactionDetail";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<UserManagement />} />
      <Route path="ranking-management" element={<RankingManagement />} />
      <Route path="transaction-management" element={<TransactionManagement />} />
      <Route path="transaction-management/detail" element={<TransactionDetail />} />
      <Route path="report-management" element={<ReportManagement />} />
      <Route path="violation-management" element={<ViolationManagement />} />
      <Route path="banner-settings" element={<BannerSettings />} />
    </Routes>
  );
};

export default AdminRoutes;
