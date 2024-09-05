import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import themeColors from "./components/dummyData";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Contacts from "./pages/Contacts";
import HomePage from "./pages/Homepage";
import Media from "./pages/Media";
import Partners from "./pages/Partners";
import Solutions from "./pages/Solutions";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage themeColor={themeColors.homepage} />}
        />

        <Route
          path="/about/team"
          element={<About themeColor={themeColors.about} />}
        />
        <Route
          path="/about/mission"
          element={<About themeColor={themeColors.about} />}
        />
        <Route
          path="/about/vision"
          element={<About themeColor={themeColors.about} />}
        />
        <Route
          path="/about/unique"
          element={<About themeColor={themeColors.about} />}
        />
        <Route
          path="/about/founder"
          element={<About themeColor={themeColors.about} />}
        />

        <Route
          path="/solutions/hvac/commercial"
          element={<Solutions themeColor={themeColors.solutions} />}
        />
        <Route
          path="solutions/hvac/industrial"
          element={<Solutions themeColor={themeColors.solutions} />}
        />
        <Route path="/solutions/hvac/precision" element={<Solutions />} />
        <Route
          path="/solutions/hvac/food"
          element={<Solutions themeColor={themeColors.solutions} />}
        />

        <Route
          path="/solutions/cold/coldstorage"
          element={<Solutions themeColor={themeColors.solutions} />}
        />
        <Route
          path="/solutions/cold/ca"
          element={<Solutions themeColor={themeColors.solutions} />}
        />
        <Route
          path="/solutions/cold/walk"
          element={<Solutions themeColor={themeColors.solutions} />}
        />
        <Route
          path="/solutions/cold/move"
          element={<Solutions themeColor={themeColors.solutions} />}
        />

        <Route
          path="/solutions/dairy/ice"
          element={<Solutions themeColor={themeColors.solutions} />}
        />
        <Route
          path="/solutions/dairy/milk"
          element={<Solutions themeColor={themeColors.solutions} />}
        />
        <Route
          path="/solutions/dairy/condense"
          element={<Solutions themeColor={themeColors.solutions} />}
        />
        <Route
          path="/solutions/dairy/cheese"
          element={<Solutions themeColor={themeColors.solutions} />}
        />

        <Route
          path="/solutions/marine/fish"
          element={<Solutions themeColor={themeColors.solutions} />}
        />
        <Route
          path="/solutions/marine/ice"
          element={<Solutions themeColor={themeColors.solutions} />}
        />
        <Route
          path="/solutions/marine/plate"
          element={<Solutions themeColor={themeColors.solutions} />}
        />
        <Route
          path="/solutions/marine/fishproces"
          element={<Solutions themeColor={themeColors.solutions} />}
        />

        <Route
          path="/solutions/meat/meat"
          element={<Solutions themeColor={themeColors.solutions} />}
        />
        <Route
          path="/solutions/meat/slaught"
          element={<Solutions themeColor={themeColors.solutions} />}
        />
        <Route
          path="/solutions/meat/blast"
          element={<Solutions themeColor={themeColors.solutions} />}
        />
        <Route
          path="/solutions/meat/meatprocess"
          element={<Solutions themeColor={themeColors.solutions} />}
        />

        <Route
          path="//solutions/grain/silo"
          element={<Solutions themeColor={themeColors.solutions} />}
        />
        <Route
          path="/solutions/grain/handel"
          element={<Solutions themeColor={themeColors.solutions} />}
        />
        <Route
          path="/solutions/grain/milling"
          element={<Solutions themeColor={themeColors.solutions} />}
        />

        <Route
          path="/solutions/building/bms"
          element={<Solutions themeColor={themeColors.solutions} />}
        />
        <Route
          path="/solutions/building/fire"
          element={<Solutions themeColor={themeColors.solutions} />}
        />
        <Route
          path="/solutions/building/access"
          element={<Solutions themeColor={themeColors.solutions} />}
        />

        <Route
          path="/client/testimonials"
          element={<Clients themeColor={themeColors.clients} />}
        />
        <Route
          path="/client/case-studies"
          element={<Clients themeColor={themeColors.clients} />}
        />
        <Route
          path="/client/reviews"
          element={<Clients themeColor={themeColors.clients} />}
        />

        <Route
          path="/partners/tech"
          element={<Partners themeColor={themeColors.partners} />}
        />
        <Route
          path="/partners/business"
          element={<Partners themeColor={themeColors.partners} />}
        />
        <Route
          path="/partners/community"
          element={<Partners themeColor={themeColors.partners} />}
        />

        <Route
          path="/media/news"
          element={<Media themeColor={themeColors.media} />}
        />
        <Route
          path="/media/blog"
          element={<Media themeColor={themeColors.media} />}
        />
        <Route
          path="/media/videos"
          element={<Media themeColor={themeColors.media} />}
        />

        <Route
          path="/contact/email"
          element={<Contacts themeColor={themeColors.contacts} />}
        />
        <Route
          path="/contact/locations"
          element={<Contacts themeColor={themeColors.contacts} />}
        />
        <Route
          path="/contact/support"
          element={<Contacts themeColor={themeColors.contacts} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
