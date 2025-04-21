import AdminDashboard from './views/admin/AdminDashboard';
import AdminLayout from './views/admin/AdminLayout';
import AdminTours from './views/admin/AdminTours';
import AdminDestination from './views/admin/AdminDestination';
import AdminCustomer from './views/admin/AdminCustomer';
import AdminPartner from './views/admin/AdminPartner';
import ProfitLoss from './views/admin/profitloss'; // Correct the import name

const adminRoutes = [
  {
    path: '/admin',
    element: <AdminLayout />,
    protected: true, // Add your protected route logic here
    children: [
      { path: 'dashboard', element: <AdminDashboard /> },
      { path: 'tours', element: <AdminTours/> },
      { path: 'customers', element: <AdminCustomer/> },
      { path: 'partners', element: <AdminPartner/>},
      { path: 'profitloss', element: <ProfitLoss /> }, // Correct the usage here
      { path: 'destinations', element: <AdminDestination/> },
    ],
  },
];

export default adminRoutes;
