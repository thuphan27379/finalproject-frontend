import * as React from "react";
import { Routes, Route } from "react-router-dom";

// import BlankLayout from "../layouts/BlankLayout"; // bo
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

// INDEX OF ALL ROUTES = connect all layouts & pages together
// sua lai: chi account page & admin page moi can authRequire
function Router() {
  return (
    <Routes>
      {/* login require */}
      <Route
        path="/"
        element={
          <AuthRequire>
            <HomeLayout />
          </AuthRequire>
        }
      >
        <Route path="/account" element={<AccountPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Route>

      {/* public, index: landing page */}
      {/* lam them nhung slug cua /home OR route rieng?!?! */}
      <Route path="/" element={<HomeLayout />}>
        <Route index path="/home" element={<HomePage />} />
        <Route index path="/aboutus" element={<HomePage />} />
        <Route index path="/projects" element={<HomePage />} />
        <Route index path="/domains" element={<HomePage />} />
        <Route index path="/startup" element={<HomePage />} />
        {/*  */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/user/:userId" element={<UserProfilePage />} />
      </Route>

      {/* login/signup */}
      <Route element={<HomeLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
