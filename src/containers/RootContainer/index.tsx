import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PortfolioData from "../../components/PortfolioData";
import BlogData from "../../components/BlogData";

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
        </ul>
      </nav>

      <Route path="/" exact component={PortfolioData} />
      <Route path="/blog/" component={BlogData} />
    </div>
  </Router>
);

export default AppRouter;
