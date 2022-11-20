import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Layout, Menu } from "antd";

// Actions
import { logout } from "../store/actions/userActions";

const { Header, Content, Footer } = Layout;

function Container() {
  const dispatch = useDispatch();
  const location = useLocation();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    dispatch(logout());
  };

  const menuItems = [
    { key: "/", label: <Link to="/">Map</Link> },
    { key: "/profile", label: <Link to="/profile">Profile</Link> },
    {
      key: "logout",
      label: (
        <Link to="/login" onClick={logoutHandler}>
          Logout
        </Link>
      ),
    },
  ];
  return (
    <Layout className="layout">
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[location.pathname]}
          items={menuItems}
        />
      </Header>
      <Content>
        <div className="site-layout-content">
          <Outlet />
        </div>
      </Content>
      <Footer> ©2022 Created by muratdem1r</Footer>
    </Layout>
  );
}

export default Container;
