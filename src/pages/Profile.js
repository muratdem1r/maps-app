import React from "react";
import { useSelector } from "react-redux";

import { Divider, Typography } from "antd";

// Components
import FeaturesTable from "../components/Features/FeaturesTable";

const { Title } = Typography;

function Profile() {
  const { user } = useSelector((state) => state.userReducer);

  return (
    <div>
      <Title style={{ marginTop: "2rem" }}>Welcome, {user?.sub}</Title>
      <Divider />
      <FeaturesTable />
    </div>
  );
}

export default Profile;
