import { useRoutes } from 'react-router-dom';

import { Home } from '@/features/home'
import { NotFound } from '@/features/misc/routes';
import { Navigate, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const App = () => {
  return(
    <Suspense
      fallback={
        <div className="h-full w-full flex items-center justify-center">
          うんち
        </div>
      }
    >
      <Outlet />
    </ Suspense>
  )
}

export const AppRoutes = () => {
    const routes = [
        {
            path: '',
            element: <App />,
            children: [
                { path: '/', element: <Home />},
            ]
        }
    ]
    const commonRoutes = [{ path: '*', element: <NotFound /> }];

    const element = useRoutes([...routes, ...commonRoutes]);
    return <>{element}</>
}