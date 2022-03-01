import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { changeProfile } from '../modules/profile';
import Profile from '../components/Profile';

function ProfileContainer() {
  const profileStr = useSelector((state: RootState) => state.profile.profileStr);
  const dispatch = useDispatch();

  const onChange = (str: string) => {
    dispatch(changeProfile(str));
  };
  return <Profile profileStr={profileStr} onChange={onChange} />;
}

export default ProfileContainer;
