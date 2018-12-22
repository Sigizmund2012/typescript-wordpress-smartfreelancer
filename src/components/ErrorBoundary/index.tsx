import * as React from "react";

interface IBoundaryState {
  hasError: boolean;
}

interface IBoundaryProps {
  children?: JSX.Element;
}

class ErrorBoundary extends React.Component<IBoundaryProps, IBoundaryState> {
  public state: IBoundaryState = { hasError: false };

  public componentDidCatch(error: Error) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.warn(error);
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Произошла ошибка.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
