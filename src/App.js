import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetups">
          <NewMeetupsPage />
        </Route>
        <Route path="/favourites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
