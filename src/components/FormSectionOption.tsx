import * as React from "react";
import { InputHTMLAttributes } from "react";

interface Props {
  checked?: boolean,
  id?: string,
  label: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  testID?: string,
  type: InputHTMLAttributes<HTMLInputElement>["type"],
  value?: InputHTMLAttributes<HTMLInputElement>["value"]
}

export default class Form extends React.Component<Props> {

  render(): React.ReactNode {
    return (
      <div id={this.props.id} className='option'>
        <div className='label'>{this.props.label}</div>
        <div className='input'>
          <input
            data-testid={this.props.testID}
            type={this.props.type}
            onChange={this.props.onChange}
            {...(
              this.props.checked !== undefined && {checked: this.props.checked}
            )}
            {...(
              this.props.value !== undefined && {value: this.props.value}
            )}
          />
        </div> 
      </div> 
    );
  }
}