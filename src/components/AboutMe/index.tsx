import { aboutMePageRoute } from "../../constants";
import * as React from "react";
import "./index.css";

export interface IAboutMeState {
  data: string;
  error?: boolean;
  errorMessage?: string;
}

interface IPageData {
  content: IPageRendered;
}

interface IPageRendered {
  rendered: string;
}

class AboutMe extends React.Component<IAboutMeState> {
  public state: IAboutMeState = {
    data: ""
  };

  public componentDidMount() {
    fetch(aboutMePageRoute, { method: "GET" })
      .then((res: Response) => res.json())
      .then((data: IPageData) => {
        this.setState({ data: data.content.rendered });
      })
      .catch((error: Error) => {
        this.setState({ error: true, errorMessage: error.message });
        console.warn(error);
      });
  }

  public render() {
    if (this.state.error && this.state.errorMessage) {
      return <h2>Произошла ошибка: "{this.state.errorMessage}"</h2>;
    } else {
      return (
        <div>
          <div dangerouslySetInnerHTML={{ __html: this.state.data }} />
        </div>
      );
    }
  }
}

export default AboutMe;
