import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export function ProtectedRoute({ component: Component, ...rest }) {
  const user = useSelector((state) => state.client.user);

  return (
    <Route
      {...rest}
      render={(props) =>
        user.token ? (
          <Component {...props} />
        ) : (
          <Redirect to={`/login?redirect=${props.location.pathname}`} />
        )
      }
    />
  );
}
