import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import UserLayout from './UserLayout';
import AdminHome from './AdminHome';
import AdminSanctions from './AdminSanctions';
import AdminLogout from './AdminLogout';
import UserHome from './UserHome';
import UserReservation from './UserReservations';
import UserSanctions from './UserSanctions';
import UserLogout from './UserLogout';
import AdminLogin from './AdminLogin'; // Import the AdminLogin component

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="admin/login" element={<AdminLogin />} /> {/* Add this route for Admin Login */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="sanctions" element={<AdminSanctions />} />
          <Route path="logout" element={<AdminLogout />} />
        </Route>

        {/* User Routes */}
        <Route path="user" element={<UserLayout />}>
          <Route index element={<UserHome />} />
          <Route path="reservations" element={<UserReservation />} />
          <Route path="sanctions" element={<UserSanctions />} />
          <Route path="logout" element={<UserLogout />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
