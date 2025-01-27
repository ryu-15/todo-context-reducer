import React, { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';

import useAuth from '@/hooks/useAuth';
import { AUTH_ACTION_TYPE } from '@/data/constant/AuthConstant';
import { logOutButton, profileContainer, profileWrapper } from '@/components/ui/Profile/Profile.css.ts';
import Popup from '@/components/ui/Popup';
import useAuthData from '@/utils/useAuthData.ts';

const Profile: React.FunctionComponent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { localUser } = useAuthData();
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    setIsPopupOpen(false);
    localStorage.removeItem('user');
    sessionStorage.removeItem('todos')
    dispatch({ type: AUTH_ACTION_TYPE.LOGOUT });
    console.log('User logged out');
    navigate({ to: '/login' }).then()
  };

  return (
    <div className={profileContainer}>
      <h2>User Profile</h2>
      <p className={profileWrapper}>
        <strong>Email:</strong> {localUser?.email}
      </p>
      <p className={profileWrapper}>
        <strong>First Name:</strong> {localUser?.firstName}
      </p>
      <p className={profileWrapper}>
        <strong>Last Name:</strong> {localUser?.lastName}
      </p>
      <p className={profileWrapper}>
        <strong>ID:</strong> {localUser?.id}
      </p>
      <div className='centerAlignWrapper'>
      <button onClick={()=>setIsPopupOpen(true)} className={logOutButton}>Log out</button>
      </div>
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

export default Profile;
