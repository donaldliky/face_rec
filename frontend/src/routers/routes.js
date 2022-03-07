import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing all the pages
import ThemeOne from "../pages/theme-one";
import ExploreThree from "../pages/explore-three";
import Auctions from "../pages/auctions";
import ItemDetails from "../pages/item-details";
import Activity from "../pages/activity";
import Blog from "../pages/blog";
import BlogSingle from "../pages/blog-single";
import HelpCenter from "../pages/help-center";
import Authors from "../pages/authors";
import Author from "../pages/author";
import WalletConnect from "../pages/wallet-connect";
import CreateNFT from "../pages/create-nft";
import FaceRecognition from "../pages/face-recognition";
import VoiceIdentification from "../pages/voice-identification";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Contact from "../pages/contact";

class MyRouts extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={ThemeOne} />
            <Route exact path="/explore" component={ExploreThree} />
            <Route exact path="/auctions" component={Auctions} />
            <Route exact path="/item-details" component={ItemDetails} />
            <Route exact path="/activity" component={Activity} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog-single" component={BlogSingle} />
            <Route exact path="/help-center" component={HelpCenter} />
            <Route exact path="/authors" component={Authors} />
            <Route exact path="/author" component={Author} />
            <Route exact path="/wallet-connect" component={WalletConnect} />
            <Route exact path="/face-recognition" component={FaceRecognition} />
            <Route exact path="/voice-identification" component={VoiceIdentification} />
            <Route exact path="/create-nft" component={CreateNFT} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default MyRouts;