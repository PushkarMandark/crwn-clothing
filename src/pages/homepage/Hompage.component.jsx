import React from "react";
import DirectoryMenu from "../../components/directoryMenuCompoent/DirectoryMenu.component";

import "./homepage.styles.scss";

const HomePage = ({ history }) => (
  <div className="homepage">
    <h1>Welcome to my Homepage</h1>
    <DirectoryMenu />
  </div>
);

export default HomePage;
