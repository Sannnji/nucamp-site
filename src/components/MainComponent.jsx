import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { CAMPSITES } from "../shared/campsites";
import Directory from "./DirectoryComponent";
import CampsiteInfo from "./CampsiteInfoComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";

function Main() {
  const [campsites, setCampsite] = useState({
    campsites: CAMPSITES,
    selectedCampsite: null,
  });

  const HomePage = () => {
    return <Home />;
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route
          exact
          path="/directory"
          render={() => <Directory campsites={campsites.campsites} />}
        />
        <Redirect to="/home" />
        {/* <Directory
          campsites={campsites.campsites}
          onClick={(campsiteId) =>
            setCampsite({
              campsites: CAMPSITES,
              selectedCampsite: campsiteId,
            })
          }
        /> */}
        <CampsiteInfo
          campsite={
            campsites.campsites.filter(
              (campsite) => campsite.id === campsites.selectedCampsite
            )[0]
          }
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
