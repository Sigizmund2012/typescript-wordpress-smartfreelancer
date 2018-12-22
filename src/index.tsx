import * as React from "react";
import * as ReactDOM from "react-dom";
import BlogData from "./components/BlogData";

ReactDOM.render(<BlogData data={[]} />, document.getElementById(
  "root"
) as HTMLElement);
