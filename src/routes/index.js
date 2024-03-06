import * as React from "react";
import { Routes, Route } from "react-router-dom";

import BlogPage from "../pages/BlogPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NotFoundPage from "../pages/NotFoundPage";
import AuthRequire from "./AuthRequire";
import AccountPage from "../pages/AccountPage";
import UserProfilePage from "../pages/UserProfilePage";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";
import BlankLayout from "../layouts/BlankLayout";

// INDEX OF ALL ROUTES = connect all layouts & pages together
function Router() {
  return (
    <Routes>
      {/* public */}
      <Route path="/" element={<HomeLayout />}>
        <Route index path="/home" element={<HomePage />} />
        <Route index path="/aboutus" element={<HomePage />} />
        <Route index path="/projects" element={<HomePage />} />
        <Route index path="/domains" element={<HomePage />} />
        <Route index path="/startup" element={<HomePage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}

        {/* CODERCOMM */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/user/:userId" element={<UserProfilePage />} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> */}
        {/* FORGOT PW */}
      </Route>

      {/* login/signup MODAL POPUP OR BLANK LAYOUT */}
      <Route path="/" element={<BlankLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* login require */}
      <Route path="/" element={<HomeLayout />}>
        <Route
          path="/account"
          element={
            <AuthRequire>
              <AccountPage />
            </AuthRequire>
          }
        />
        <Route
          path="/admin"
          element={
            <AuthRequire>
              <AdminPage />
            </AuthRequire>
          }
        />
      </Route>
    </Routes>
  );
}

export default Router;
