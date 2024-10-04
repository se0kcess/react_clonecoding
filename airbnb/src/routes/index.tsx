import { Navigate, useRoutes } from 'react-router-dom';
import { routes } from '../constants/routes';

import Header from '../components/header/Header';



export default function Router() {
  const elements = [
    {
      path: '/',
      element: <Header />,
      children: [
        {
          path: routes.home,
          // element: <HomePage />,
        },
        {
          path: '/',
          element: <Navigate replace to={routes.home} />,
        },
      ],
    },
  ];

  return useRoutes(elements);
}