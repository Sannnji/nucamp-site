import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { CAMPSITES } from "../shared/campsites";
import Directory from "./DirectoryComponent";
import CampsiteInfo from "./CampsiteInfoComponent";

function Main() {
  const [campsites, setCampsite] = useState({
    campsites: CAMPSITES,
    selectedCampsite: null,
  });

  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">NuCamp</NavbarBrand>
        </div>
      </Navbar>
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
    </div>
  );
}

export default Main;
