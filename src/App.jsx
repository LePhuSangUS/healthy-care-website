
import React, { useEffect } from "react";
import AppRouter from "./appRoute"

//style
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import "./App.css"
import './themes/index.less';

import history from "./utils/history"
const mode = import.meta.env.MODE;
console.log(`%c${mode}`, "color: white; font-size: 40px ;background:green");
export default function App() {
  return (
    <div
      className="app"
    >
        <HistoryRouter history={history} >
          <AppRouter />
        </HistoryRouter>

    </div>
  );
}
