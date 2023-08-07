import * as React from "react";

interface Props {
  children: React.ReactNode;
  id?: string;
  title: string;
}

export default class Form extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className="section" id={this.props.id}>
        <div className="title">{this.props.title}</div>
        <div className="options">{this.props.children}</div>
      </div>
    );
  }
}
