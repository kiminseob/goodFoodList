import React from 'react';

type Props = {
  user: {
    id: string;
    name: string;
    nickname: string;
    profile_image: string;
  };
};

function ProfileInfo({ user }: Props) {
  const { name, nickname } = user;
  return (
    <div className="profile-info">
      <span className="nickname">{nickname ?? name}</span> 님
    </div>
  );
}

export default ProfileInfo;
