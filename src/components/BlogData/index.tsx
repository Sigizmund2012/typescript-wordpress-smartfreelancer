import { blogRoute } from "../../constants";
import * as React from "react";
import ReactTable from "react-table";
import { ReactTableDefaults } from "react-table";
import "react-table/react-table.css";
import "./index.css";

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
  fimg_url: string;
}

interface ICeilProps {
  value: string;
}

const columns = [
  {
    Header: "Изображение",
    accessor: "image",
    maxWidth: 150,
    className: "portfolio-image",
    Cell: (props: ICeilProps) => {
      return (
        <img
          className="portfolio-image__image"
          src={props.value}
          alt="Миниатюра портфолио"
        />
      );
    }
  },
  {
    Header: "Заголовок",
    accessor: "title",
    style: { whiteSpace: "unset" },
    maxWidth: 200,
    className: "portfolio-heading"
  },
  {
    Header: "Описание",
    accessor: "content",
    style: { whiteSpace: "unset" },
    Cell: (props: ICeilProps) => {
      return <div dangerouslySetInnerHTML={{ __html: props.value }} />;
    }
  }
];

Object.assign(ReactTableDefaults, {
  defaultPageSize: 10,
  columns: columns,
  previousText: "Предыдущая",
  nextText: "Следующая",
  loadingText: "Загрузка...",
  noDataText: "Строки не найдены",
  pageText: "Страница",
  ofText: "из",
  rowsText: "строк",

  // Accessibility Labels
  pageJumpText: "переход на страницу",
  rowsSelectorText: "строк на странице"
});

class BlogData extends React.Component<IBlogState> {
  public state: IBlogState = {
    data: []
  };

  public componentDidMount() {
    fetch(blogRoute, { method: "GET" })
      .then((res: Response) => res.json())
      .then((data: object[]) => {
        const normalizeData: object[] = data.map((element: IElementType) => {
          const { id, content, title, fimg_url } = element;
          const image = fimg_url;
          return {
            id,
            content: content.rendered,
            title: title.rendered,
            image
          };
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
      return <ReactTable data={this.state.data} />;
    }
  }
}

export default BlogData;
