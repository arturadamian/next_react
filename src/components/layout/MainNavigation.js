import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <Link to="/new-meetups">New</Link>
          </li>
          <li>
            <Link to="/favourites">Fav</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
