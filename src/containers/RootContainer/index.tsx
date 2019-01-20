import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PortfolioData from "../../components/PortfolioData";
import BlogData from "../../components/BlogData";
import AboutMe from "../../components/AboutMe";
import Contacts from "../../components/Contacts";
import "./index.css";

const AppRouter = () => (
  <Router>
    <div>
      <nav className="top-navigation">
        <ul>
          <li className="top-navigation__item">
            <Link to="/">Портфолио</Link>
          </li>
          <li className="top-navigation__item">
            <Link to="/blog/">Блог</Link>
          </li>
          <li className="top-navigation__item">
            <Link to="/about-me/">Обо мне</Link>
          </li>
          <li className="top-navigation__item">
            <Link to="/contacts/">Контакты</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={PortfolioData} />
      <Route path="/blog/" component={BlogData} />
      <Route path="/about-me/" component={AboutMe} />
      <Route path="/contacts/" component={Contacts} />
    </div>
  </Router>
);

export default AppRouter;
