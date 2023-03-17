import routes from './routes';
import { useRoutes } from 'react-router-dom';
import React, { Fragment } from 'react';
function AppRoute() {
  const routing = useRoutes(routes());
  return (
    <Fragment>
      {routing}
    </Fragment>
  );
}
export default AppRoute