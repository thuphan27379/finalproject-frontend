import * as React from "react";
import { Routes, Route } from "react-router-dom";

import BlankLayout from "../layouts/BlankLayout";
import BlogPage from "../pages/BlogPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NotFoundPage from "../pages/NotFoundPage";
import AuthRequire from "./AuthRequire";
import AccountPage from "../pages/AccountPage";
import UserProfilePage from "../pages/UserProfilePage";
import HomeLayout from "../layouts/HomeLayout";

// INDEX OF ALL ROUTES = connect all layouts & pages together
function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthRequire>
            <HomeLayout />
          </AuthRequire>
        }
      >
        <Route index element={<BlogPage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="user/:userId" element={<UserProfilePage />} />
      </Route>

      {/*  */}
      <Route element={<BlankLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
