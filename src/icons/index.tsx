import React from 'react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';

type Props = Partial<FontAwesomeIconProps> & {
  disabled?: boolean;
  isregular?: string;
};

const StarIcon = (props: Props) => (
  <FontAwesomeIcon
    style={{ color: '#FFBA00' }}
    icon={props.isregular === 'true' ? regular('star') : solid('star')}
    {...props}
  />
);
const AddIcon = (props: Props) => (
  <FontAwesomeIcon
    {...props}
    style={{ color: '#FFE8E0', cursor: 'pointer' }}
    icon={solid('add')}
  />
);
const CircleAddIcon = (props: Props) => {
  const { className, disabled, ...rest } = props;
  return (
    <FontAwesomeIcon
      icon={solid('circle-plus')}
      className={disabled ? 'fa-disabled ' : 'fa-actived ' + className}
      size="2xl"
      {...rest}
    />
  );
};

const SearchIcon = (props: Props) => (
  <FontAwesomeIcon
    {...props}
    style={{ color: '#FF4200', cursor: 'pointer' }}
    icon={solid('search')}
  />
);
const ArrowLeftIcon = (props: Props) => (
  <FontAwesomeIcon
    {...props}
    style={{ cursor: 'pointer', marginLeft: '0.5rem' }}
    icon={solid('square-caret-left')}
  />
);
const ArrowDownIcon = (props: Props) => (
  <FontAwesomeIcon
    {...props}
    style={{ cursor: 'pointer', marginLeft: '0.5rem' }}
    icon={solid('square-caret-down')}
  />
);
const AddressIcon = (props: Props) => (
  <FontAwesomeIcon
    {...props}
    style={{ marginRight: '0.5rem' }}
    icon={solid('location-dot')}
  />
);
const TelIcon = (props: Props) => (
  <FontAwesomeIcon
    {...props}
    style={{ marginRight: '0.5rem' }}
    icon={solid('address-book')}
  />
);
const TimerIcon = (props: Props) => (
  <FontAwesomeIcon
    {...props}
    style={{ marginRight: '0.5rem' }}
    icon={solid('clock')}
  />
);
const HomeIcon = (props: Props) => (
  <FontAwesomeIcon
    {...props}
    style={{ marginRight: '0.5rem', color: 'white' }}
    icon={solid('house')}
  />
);
const CircleCheckIcon = (props: Props) => (
  <FontAwesomeIcon
    {...props}
    style={{ marginLeft: '0.5rem' }}
    icon={solid('circle-check')}
  />
);
const HandPointDownIcon = (props: Props) => (
  <FontAwesomeIcon
    {...props}
    style={{ margin: '0.5rem 0' }}
    icon={solid('hand-point-down')}
    size="2xl"
    bounce
  />
);
const LogoutIcon = (props: Props) => (
  <FontAwesomeIcon
    {...props}
    style={{ color: '#ffffff', marginLeft: '1rem', cursor: 'pointer' }}
    icon={solid('arrow-right-from-bracket')}
  />
);
const GhostIcon = (props: Props) => (
  <FontAwesomeIcon {...props} icon={solid('ghost')} size="2xl" />
);

export {
  StarIcon,
  AddIcon,
  CircleAddIcon,
  SearchIcon,
  ArrowLeftIcon,
  ArrowDownIcon,
  AddressIcon,
  TelIcon,
  TimerIcon,
  HomeIcon,
  CircleCheckIcon,
  HandPointDownIcon,
  LogoutIcon,
  GhostIcon,
};
