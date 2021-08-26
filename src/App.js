import { BrowserRouter, Route } from "react-router-dom";
import app from "./App.module.css";
import Dialogs from "./componets/Dialogs/Dialogs";
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import Profile from "./componets/Profile/Profile";

function App(props) {
   console.log(props.state.profilePage);
   return (
      <BrowserRouter>
         <div className={app.App}>
            <Header />
            <div className={app.sidebar_content}>
               <Navbar />
               <Route
                  path="/profile"
                  render={() => (
                     <Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}
                     />
                  )}
               ></Route>
               <Route
                  path="/dialogs"
                  render={() => (
                     <Dialogs users={props.state.dialogsPage.users} />
                  )}
               ></Route>
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
