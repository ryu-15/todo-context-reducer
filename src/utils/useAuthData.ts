const useAuthData = () => {
  const localUser = localStorage.getItem('user')
    ? JSON.parse(<string>localStorage.getItem('user'))
    : '';

  const localAuthUsers = localStorage.getItem('authUsers')
    ? JSON.parse(<string>localStorage.getItem('authUsers'))
    : [];

  console.log(localUser, localAuthUsers);
  return { localAuthUsers, localUser };
};

export default useAuthData;
