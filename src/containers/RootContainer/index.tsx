import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PortfolioData from "../../components/PortfolioData";
import BlogData from "../../components/BlogData";
import AboutMe from "../../components/AboutMe";
import Contacts from "../../components/Contacts";

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Портфолио</Link>
          </li>
          <li>
            <Link to="/blog/">Блог</Link>
          </li>
          <li>
            <Link to="/about-me/">Обо мне</Link>
          </li>
          <li>
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
