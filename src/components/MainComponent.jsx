import React, { useState } from "react";

import { CAMPSITES } from "../shared/campsites";
import Directory from "./DirectoryComponent";
import CampsiteInfo from "./CampsiteInfoComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

function Main() {
  const [campsites, setCampsite] = useState({
    campsites: CAMPSITES,
    selectedCampsite: null,
  });

  return (
    <div className="App">
      <Header />
      <Directory
        campsites={campsites.campsites}
        onClick={(campsiteId) =>
          setCampsite({
            campsites: CAMPSITES,
            selectedCampsite: campsiteId,
          })
        }
      />
      <CampsiteInfo
        campsite={
          campsites.campsites.filter(
            (campsite) => campsite.id === campsites.selectedCampsite
          )[0]
        }
      />
      <Footer />
    </div>
  );
}

export default Main;
