import { BrowserRouter, Route } from "react-router-dom";
import app from "./App.module.css";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import Profile from "./componets/Profile/Profile";
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
                  render={() => <Profile store={props.store} />}
               ></Route>
               <Route
                  path="/dialogs"
                  render={() => <DialogsContainer store={props.store} />}
               ></Route>
               <Route path="/users" render={() => <UsersContainer />}></Route>
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
