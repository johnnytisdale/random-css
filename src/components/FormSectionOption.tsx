import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import * as React from "react";

interface Props {
  children?: React.ReactNode,
  id?: string,
  // input: React.ReactNode,
  input: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  label: string,
}

const FormSectionOption = ({
  children,
  id,
  input,
  label,
}: Props): React.ReactNode => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <>
      <div id={id} className={`option${expanded ? ' expanded' : ''}`}>
        <div
          className='label'
          onClick={
            children !== undefined
              ? () => setExpanded(!expanded)
              : null
            }
        >
          {
            children !== undefined && (
              <span className="chevron">
                <FontAwesomeIcon
                  icon={expanded ? faCaretDown : faCaretRight}
                  size='sm'
                />
              </span>
            )
          }
          <div className="text">
            {label}
          </div>
        </div>
        <div className='input'>
          {/* { input } */}
          <input
            {...input}
          />
        </div>
      </div>
      {
        expanded && children !== undefined && (
          <div className="expanded-content">
            {children}
          </div>
        )
      }
    </>
  );
}

export default FormSectionOption;