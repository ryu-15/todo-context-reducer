import React, { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';

import {
  dashboardContainer,
  sidebar,
  content,
  sidebarItem,
  activeSidebarItem, text,
} from '@/components/ui/Dashboard/Dashboard.css';
import Profile from '@/components/ui/Profile';
import TodoApp from '@/components/ui/Todo/TodoApp';
import { TODO_STATUS } from '@/data/constant/TodoConstant';
import TodoListIcon from '@/components/icons/TodoListIcon';
import CompleteIcon from '@/components/icons/CompleteIcon';
import PendingIcon from '@/components/icons/PendingIcon';
import ProfileIcon from '@/components/icons/ProfileIcon';
import useAuthData from '@/utils/useAuthData.ts';
import LogoutIcon from '@/components/icons/LogoutIcon';
import Popup from '@/components/ui/Popup';
import { AUTH_ACTION_TYPE } from '@/data/constant/AuthConstant';
import useAuth from '@/hooks/useAuth';


const Dashboard: React.FunctionComponent = () => {
  const [activeView, setActiveView] = useState('all');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const { localUser } = useAuthData();

  const renderContent = () => {
    switch (activeView) {
      case 'all':
        return <TodoApp filter={TODO_STATUS.ALL} />;
      case 'completed':
        return <TodoApp showForm={false} filter={TODO_STATUS.COMPLETED} />;
      case 'pending':
        return <TodoApp showForm={false} filter={TODO_STATUS.PENDING} />;
      case 'profile':
        return <Profile />;
      default:
        return <TodoApp filter={TODO_STATUS.ALL} />;
    }
  }
  const handleLogOut = () => {
    setIsPopupOpen(false);
    localStorage.removeItem('user');
    sessionStorage.removeItem('todos')
    dispatch({ type: AUTH_ACTION_TYPE.LOGOUT });
    console.log('User logged out');
    navigate({ to: '/login' }).then()
  };
 return (
   <div className={dashboardContainer}>
     <div className={sidebar}>
       <div className={text}><h2>Welcome back,</h2>
         <h3>{localUser.firstName.toUpperCase()}</h3>
       </div>
       <div
         className={`${sidebarItem} ${activeView === 'all' ? activeSidebarItem : ''}`}
         onClick={() => setActiveView('all')}
       >
         <TodoListIcon />
         <span className={text}>All Todos</span>
       </div>
       <div
         className={`${sidebarItem} ${activeView === 'completed' ? activeSidebarItem : ''}`}
         onClick={() => setActiveView('completed')}
       >
         <CompleteIcon />
         <span className={text}>Completed Todos</span>
       </div>
       <div
         className={`${sidebarItem} ${activeView === 'pending' ? activeSidebarItem : ''}`}
         onClick={() => setActiveView('pending')}
       >
         <PendingIcon />
         <span className={text}>Pending Todos</span>
       </div>
       <div
         className={`${sidebarItem} ${activeView === 'profile' ? activeSidebarItem : ''}`}
         onClick={() => setActiveView('profile')}
       >
         <ProfileIcon />
         <span className={text}>{localUser.firstName}</span>
       </div>
       <div
         className={sidebarItem}
         onClick={() => {
           setIsPopupOpen(true);
         }}
       >
         <LogoutIcon />
         <span className={text}>Logout</span>
       </div>
     </div>
     <div className={content}>{renderContent()}</div>
     {isPopupOpen && (
       <Popup
         title="Confirm Logout"
         message="Are you sure you want to log out?"
         isOpen={isPopupOpen}
         onConfirm={handleLogOut}
         onCancel={() => setIsPopupOpen(false)}
       />
     )}
   </div>
 );
};

export default Dashboard;
