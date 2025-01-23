import AdminDashboard from './views/admin/AdminDashboard';
import AdminLayout from './views/admin/AdminLayout';
import AdminTours from './views/admin/AdminTours';
import AdminDestination from './views/admin/AdminDestination';
import AdminCustomer from './views/admin/AdminCustomer';
import AdminPartner from './views/admin/AdminPartner';
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
      { path: 'profitloss', element: <div>Profit/Loss Page</div> },
      { path: 'destinations', element:<AdminDestination/> },
    ],
  },
];

export default adminRoutes;
