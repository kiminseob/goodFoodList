import React, { useState, useRef } from 'react';
import { observer } from 'mobx-react';
import useStore from 'hooks/useStore';
import useClickOutside from 'hooks/useClickOutside';
import ProfileInfo from './ProfileInfo';

function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const { UserInfoStore } = useStore();
  const { user } = UserInfoStore;

  const handleClick = () => {
    setIsOpen((_isOpen) => !_isOpen);
  };

  const profileRef = useRef<HTMLDivElement>(null);

  useClickOutside(profileRef, () => {
    setIsOpen(false);
  });

  return (
    <span ref={profileRef}>
      <span className="profile">
        <img src={user.profile_image} onClick={handleClick} />
      </span>
      {isOpen && <ProfileInfo user={user} />}
    </span>
  );
}

export default observer(Profile);
