import * as React from "react";

interface Props {
  children: React.ReactNode,
  id?: string,
  label: string,
}

const FormSectionOption = ({children, id, label}: Props): React.ReactNode => (
  <div id={id} className='option'>
    <div className='label'>{label}</div>
    <div className='input'>
      {children}
    </div> 
  </div> 
);

export default FormSectionOption;