import { dataRoute } from "../../constants";
import * as React from "react";

export interface IBlogState {
  data: object[];
  error?: boolean;
  errorMessage?: string;
}

interface IContent {
  rendered: string;
}
interface ITitle {
  rendered: string;
}
interface IElementType {
  id: string;
  content: IContent;
  title: ITitle;
}

interface INomalizeData {
  id: string;
  content: string;
  title: string;
}

class BlogData extends React.Component<IBlogState> {
  public state: IBlogState = {
    data: []
  };

  public componentDidMount() {
    fetch(dataRoute, { method: "GET" })
      .then((res: Response) => res.json())
      .then((data: object[]) => {
        const normalizeData: object[] = data.map((element: IElementType) => {
          const { id, content, title } = element;
          return { id, content: content.rendered, title: title.rendered };
        });
        this.setState({ data: normalizeData });
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
        <table>
          <tbody>
            <tr>
              <th>Заголовок</th>
              <th>Текст</th>
            </tr>
            {this.state.data.map((element: INomalizeData) => {
              return (
                <tr key={element.id}>
                  <td>{element.title}</td>
                  <td dangerouslySetInnerHTML={{ __html: element.content }} />
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
  }
}

export default BlogData;
