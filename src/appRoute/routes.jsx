
import React from "react";
import { ROUTES_NAME } from "./routes-name";
import { Navigate, Outlet } from 'react-router-dom';

//layouts
import MainLayout from "@Layouts/MainLayout";
//Pages
import Home from "@Pages/Home";
import MyRecord from "@Pages/MyRecord";
import RecommendList from "@Pages/RecommendList";

const routes = (isLoggedIn) => [
  //Same Private Route
  {
    path: '/',
    element:  <MainLayout /> ,
    children: [
      {
        path: ROUTES_NAME.HOME,
        element: <Home />
      },
      {
        path: ROUTES_NAME.MY_RECORD,
        element: <MyRecord />
      },
      {
        path: ROUTES_NAME.RECOMMENDED_LIST,
        element: <RecommendList />
      },
      {
        path: "*",
        element: <Navigate to={ROUTES_NAME.HOME} />,
        
      }
    ]
  },
  
  {
    path: '*',
    element:  <Navigate to={ROUTES_NAME.HOME} />,

  },
];

export default routes;