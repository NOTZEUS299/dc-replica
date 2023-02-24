import { Discord } from "./pageone/Discord";
import { Download } from "./pagetwo/Download";
import { Nitro } from "./pagethree/Nitro";
import { Safety } from "./pagefour/Safety";
import { Support } from "./pagefive/Support";
import { Blog } from "./pagesix/Blog";
import { Careers } from "./pageseven/Careers";
import { Login } from "./pageeight/Login";
import { Job } from "./pagenine/Job";
import { Signup } from "./signUpPage/Signup";
import Trial from "./learning js/Trial";
import { LocalData } from "./signUpPage/LocalData";
import { Profile } from "./profile/Profile";
import Protected from "./Protected";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    localStorage.removeItem("User");
  }, []);
  return (
    <Switch>
      <Route exact path="/" component={Discord} />
      <Route exact path="/download" component={Download} />
      <Route exact path="/nitro" component={Nitro} />
      <Route exact path="/safety" component={Safety} />
      <Route exact path="/support" component={Support} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/careers" component={Careers} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/discord-recruitment-scams" component={Job} />
      <Route exact path="/sign-up" component={Signup} />
      <Route exact path="/javascript" component={Trial} />
      <Route exact path="/lsdata" component={LocalData} />
      <Protected exact path="/user-profile/:id" component={Profile} />
      <Route exact path="*/" component={Discord}/>
    </Switch>
  );
}

export default App;
