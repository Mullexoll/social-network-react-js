import { BrowserRouter, Route } from "react-router-dom";
import app from "./App.module.css";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import ProfileContainer from "./componets/Profile/ProfileContainer";
import UsersContainer from "./componets/Users/UsersContainer";

function App(props) {
   return (
      <BrowserRouter>
         <div className={app.App}>
            <Header />
            <div className={app.sidebar_content}>
               <Navbar />
               <Route
                  path="/profile"
                  render={() => <ProfileContainer />}
               ></Route>
               <Route
                  path="/dialogs"
                  render={() => <DialogsContainer />}
               ></Route>
               <Route path="/users" render={() => <UsersContainer />}></Route>
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
