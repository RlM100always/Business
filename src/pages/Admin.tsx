import { useState } from 'react';
import { Clock, CheckCheck, AlertCircle, Archive, Search, Filter, Download } from 'lucide-react';

// Sample order data
interface Order {
  id: string;
  clientName: string;
  projectTitle: string;
  projectType: string;
  orderDate: string;
  deadline: string;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high';
  budget?: string;
}

const ordersData: Order[] = [
  {
    id: 'ORD-2023-001',
    clientName: 'John Smith',
    projectTitle: 'E-commerce Website',
    projectType: 'Web Development',
    orderDate: '2023-05-15',
    deadline: '2023-06-15',
    status: 'completed',
    priority: 'high',
    budget: '$3,500'
  },
  {
    id: 'ORD-2023-002',
    clientName: 'Emily Johnson',
    projectTitle: 'Fitness Tracking App',
    projectType: 'Mobile Development',
    orderDate: '2023-06-02',
    deadline: '2023-07-10',
    status: 'completed',
    priority: 'medium',
    budget: '$4,200'
  },
  {
    id: 'ORD-2023-003',
    clientName: 'Michael Chen',
    projectTitle: 'Machine Learning Research',
    projectType: 'Academic Project',
    orderDate: '2023-06-20',
    deadline: '2023-08-05',
    status: 'in-progress',
    priority: 'high',
    budget: '$2,800'
  },
  {
    id: 'ORD-2023-004',
    clientName: 'Sarah Williams',
    projectTitle: 'Inventory Management System',
    projectType: 'Web Development',
    orderDate: '2023-07-08',
    deadline: '2023-08-15',
    status: 'in-progress',
    priority: 'medium',
    budget: '$3,200'
  },
  {
    id: 'ORD-2023-005',
    clientName: 'Robert Garcia',
    projectTitle: 'Environmental Impact Study',
    projectType: 'Academic Project',
    orderDate: '2023-07-25',
    deadline: '2023-09-10',
    status: 'pending',
    priority: 'low',
    budget: '$1,800'
  },
  {
    id: 'ORD-2023-006',
    clientName: 'Jennifer Lee',
    projectTitle: 'Food Delivery App',
    projectType: 'Mobile Development',
    orderDate: '2023-08-03',
    deadline: '2023-09-20',
    status: 'pending',
    priority: 'high',
    budget: '$5,000'
  }
];

const Admin = () => {
  const [orders, setOrders] = useState<Order[]>(ordersData);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState('');
  
  // For a real application, this would be connected to a proper authentication system
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    
    // Very basic auth for demo purposes only
    if (username === 'admin' && password === 'password') {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Invalid credentials. Try admin/password.');
    }
  };
  
  const filteredOrders = orders.filter(order => {
    // Filter by status
    if (activeFilter !== 'all' && order.status !== activeFilter) {
      return false;
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      return (
        order.clientName.toLowerCase().includes(term) ||
        order.projectTitle.toLowerCase().includes(term) ||
        order.id.toLowerCase().includes(term)
      );
    }
    
    return true;
  });
  
  const updateOrderStatus = (orderId: string, newStatus: Order['status']) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: Order['priority']) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-orange-100 text-orange-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
            <p className="text-gray-600 mt-2">Please login to access the admin dashboard</p>
          </div>
          
          {loginError && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
              {loginError}
            </div>
          )}
          
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Enter your username"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Enter your password"
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-4 py-2 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
            >
              Login
            </button>
          </form>
          
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>For demo purposes, use:</p>
            <p>Username: <span className="font-mono bg-gray-100 px-1 py-0.5 rounded">admin</span> / Password: <span className="font-mono bg-gray-100 px-1 py-0.5 rounded">password</span></p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Manage projects and monitor progress</p>
          </div>
          
          <div className="mt-4 md:mt-0 space-x-3">
            <button 
              onClick={() => setIsAuthenticated(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              Logout
            </button>
            <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 flex items-center">
              <Download size={16} className="mr-2" />
              Export Data
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <h3 className="text-2xl font-bold">{orders.filter(o => o.status === 'pending').length}</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                <Clock className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">In Progress</p>
                <h3 className="text-2xl font-bold">{orders.filter(o => o.status === 'in-progress').length}</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <CheckCheck className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <h3 className="text-2xl font-bold">{orders.filter(o => o.status === 'completed').length}</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Cancelled</p>
                <h3 className="text-2xl font-bold">{orders.filter(o => o.status === 'cancelled').length}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative max-w-md w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search orders..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <div className="text-sm text-gray-600 flex items-center mr-2">
                <Filter size={16} className="mr-1" />
                <span>Filter:</span>
              </div>
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1 text-sm rounded-md ${
                  activeFilter === 'all'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveFilter('pending')}
                className={`px-3 py-1 text-sm rounded-md ${
                  activeFilter === 'pending'
                    ? 'bg-yellow-600 text-white'
                    : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                }`}
              >
                Pending
              </button>
              <button
                onClick={() => setActiveFilter('in-progress')}
                className={`px-3 py-1 text-sm rounded-md ${
                  activeFilter === 'in-progress'
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                }`}
              >
                In Progress
              </button>
              <button
                onClick={() => setActiveFilter('completed')}
                className={`px-3 py-1 text-sm rounded-md ${
                  activeFilter === 'completed'
                    ? 'bg-green-600 text-white'
                    : 'bg-green-100 text-green-700 hover:bg-green-200'
                }`}
              >
                Completed
              </button>
              <button
                onClick={() => setActiveFilter('cancelled')}
                className={`px-3 py-1 text-sm rounded-md ${
                  activeFilter === 'cancelled'
                    ? 'bg-red-600 text-white'
                    : 'bg-red-100 text-red-700 hover:bg-red-200'
                }`}
              >
                Cancelled
              </button>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Client & Project
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Deadline
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {order.id}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{order.clientName}</div>
                        <div className="text-sm text-gray-500">{order.projectTitle}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.projectType}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(order.deadline).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(order.priority)}`}>
                          {order.priority.charAt(0).toUpperCase() + order.priority.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(order.status)}`}>
                          {order.status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-2">
                          {order.status === 'pending' && (
                            <button 
                              onClick={() => updateOrderStatus(order.id, 'in-progress')}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              Start
                            </button>
                          )}
                          {order.status === 'in-progress' && (
                            <button 
                              onClick={() => updateOrderStatus(order.id, 'completed')}
                              className="text-green-600 hover:text-green-900"
                            >
                              Complete
                            </button>
                          )}
                          {(order.status === 'pending' || order.status === 'in-progress') && (
                            <button 
                              onClick={() => updateOrderStatus(order.id, 'cancelled')}
                              className="text-red-600 hover:text-red-900"
                            >
                              Cancel
                            </button>
                          )}
                          {order.status === 'completed' && (
                            <button className="text-gray-600 hover:text-gray-900">
                              <Archive size={18} />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                      No orders found matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;