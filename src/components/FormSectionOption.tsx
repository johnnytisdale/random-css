import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import * as React from "react";

interface Props {
  children: React.ReactNode,
  expandedContent?: React.ReactNode,
  id?: string,
  label: string,
}

const FormSectionOption = ({
  children,
  id,
  label,
  expandedContent
}: Props): React.ReactNode => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <>
      <div id={id} className={`option${expanded ? ' expanded' : ''}`}>
        <div
          className='label'
          onClick={
            expandedContent !== undefined
              ? () => setExpanded(!expanded)
              : null
            }
        >
          {
            expandedContent !== undefined && (
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
          {children}
        </div>
      </div>
      {
        expanded && expandedContent !== undefined && (
          <div className="expanded-content">
            {expandedContent}
          </div>
        )
      }
    </>
  );
}

export default FormSectionOption;