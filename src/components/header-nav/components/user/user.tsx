import { Link } from 'react-router-dom';
import { AppRoute } from '../../../../const';
import Avatar from '../avatar/avatar';
import { useAppSelector } from '../../../../hooks';
import {selectUserInfo } from '../../../../store/user-process/user-process.selectors';
import { UserInfo } from '../../../../types/api';

function User():JSX.Element{
  const {email, avatarUrl} = useAppSelector(selectUserInfo) as UserInfo;

  return (
    <li className="header__nav-item user">
      <Link
        className="header__nav-link header__nav-link--profile"
        to={AppRoute.Favorites}
      >
        <Avatar avatar={avatarUrl}/>
        <span className="header__user-name user__name">
          {email}
        </span>
        <span className="header__favorite-count">3</span>
      </Link>
    </li>
  );
}

export default User;
