import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

type Props = Record<string, any>;

const StarIcon = () => (
  <FontAwesomeIcon style={{ color: '#FFBA00' }} icon={solid('star')} />
);
const AddIcon = (props: Props) => (
  <FontAwesomeIcon
    style={{ color: '#FFE8E0', cursor: 'pointer' }}
    icon={solid('add')}
    {...props}
  />
);
const SearchIcon = (props: Props) => (
  <FontAwesomeIcon
    style={{ color: '#FF4200', cursor: 'pointer' }}
    icon={solid('search')}
    {...props}
  />
);

export { StarIcon, AddIcon, SearchIcon };
