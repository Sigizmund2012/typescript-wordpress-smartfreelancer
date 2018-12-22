import * as React from "react";
import { dataRoute } from "../../constants";

export interface IBlogState {
  data: string[] | number[];
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
  public state = {
    data: []
  };

  public componentDidMount() {
    fetch(dataRoute, { method: "GET" })
      .then(res => res.json())
      .then((data) => {
        const normalizeData: INomalizeData = data.map(
          (element: IElementType) => {
            const { id, content, title } = element;
            return { id, content: content.rendered, title: title.rendered };
          }
        );
        // console.dir(normalizeData);
        this.setState({ data: normalizeData });
      });
  }

  public render() {
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

export default BlogData;
