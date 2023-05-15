import { GenderManIcon, GenderWomanIcon } from 'icons';
import React from 'react';

type Props = {
  user: {
    id: null;
    name: null;
    gender: null;
    nickname: null;
    profile_image: null;
  };
};

function ProfileInfo({ user }: Props) {
  const { name, gender, nickname } = user;
  return (
    <div className="profile-info">
      {gender === 'M' ? <GenderManIcon /> : <GenderWomanIcon />}
      <span>
        <span className="nickname">{nickname ?? name}</span> 님
      </span>
    </div>
  );
}

export default ProfileInfo;
