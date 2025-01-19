import { AuthorizationStatus, AppRoute } from '../../const';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { selectAuthorizationStatus } from '../../store/user-process/user-process.selectors';

type PrivateRouteProps = {
  children: JSX.Element;
  isLogin?: boolean;
}

function PrivateRoute({children, isLogin = false}:PrivateRouteProps):JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  if (isLogin) {
    return (
      authorizationStatus === AuthorizationStatus.Auth
        ? <Navigate to={AppRoute.Index}/>
        : children
    );
  }

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login}/>
  );
}

export default PrivateRoute;
