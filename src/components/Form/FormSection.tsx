import BorderStyleKeyword from "../../enums/BorderStyleKeyword";
import { RandomDiv } from "../RandomElements";

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
      <RandomDiv
        className="section"
        id={this.props.id}
        style={{
          borderColor: { enabled: true },
          borderStyle: {
            enabled: true,
            borderStyles: [
              BorderStyleKeyword.DASHED,
              BorderStyleKeyword.DOTTED,
              BorderStyleKeyword.DOUBLE,
              BorderStyleKeyword.GROOVE,
              BorderStyleKeyword.SOLID,
            ],
          },
        }}
      >
        <div className="title">{this.props.title}</div>
        <div className="options">{this.props.children}</div>
      </RandomDiv>
    );
  }
}
