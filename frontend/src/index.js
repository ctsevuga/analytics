import React from "react";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ForgotScreen from "./screens/ForgotScreen";
import ProfileScreen from "./screens/ProfileScreen";

import store from "./store";
import { Provider } from "react-redux";

import SubjectsScreen from "./screens/SubjectsScreen";
import QuestionsScreen from "./screens/QuestionsScreen";
import PracticeScreen from "./screens/PracticeScreen";
import ResultScreen from "./screens/ResultScreen";

import UserListScreen from "./screens/admin/UserListScreen";
import ResultListScreen from "./screens/admin/ResultListScreen";
import UserEditScreen from "./screens/admin/UserEditScreen";
import { HelmetProvider } from "react-helmet-async";

import { GlobalProvider } from "./context/GlobalState";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<LoginScreen />} />
      <Route path="/login" element={<LoginScreen />} />

      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/forgot" element={<ForgotScreen />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="/home" element={<HomeScreen />} />

        <Route path="/subjects/:subject_no" element={<SubjectsScreen />} />

        <Route path="/questions/:testNo" element={<QuestionsScreen />} />
        <Route path="/practice/:examNo" element={<PracticeScreen />} />
        <Route path="/result" element={<ResultScreen />} />
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Route>
      {/* Admin users */}
      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/userlist" element={<UserListScreen />} />

        <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
        <Route path="/admin/resultList" element={<ResultListScreen />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalProvider>
    <React.StrictMode>
      <HelmetProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </HelmetProvider>
    </React.StrictMode>
  </GlobalProvider>
);

reportWebVitals();
