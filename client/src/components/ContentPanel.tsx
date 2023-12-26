import React from 'react';
import '../styles/general/ContentPanel.css';

interface ContentPanelProps {
  clear?: boolean;
  title?: string;
  sectionID?: string;
  children?: React.ReactNode;
  outerClasses?: string;
  headerObjects?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * ### Props:
 * - `clear?` - if true, remove background color and padding. Useful for nesting panels
 * - `title?` - the title of the panel (top-left justified)
 * - `sectionID?` - the DOM ID of the panel (used for url things like #sectionID)
 * - `children?` - the content of the panel **(best to wrap in a container first)**
 * - `outerClasses?` - any additional classes to add to the outermost <section> element
 * - `headerObjects?` - any additional objects to add to the header (right side)
 * - `style?` - any additional styles to add to the outermost <section> element
 */
const ContentPanel = (props: ContentPanelProps) => {

  if (props.clear) {
    return (
      <section className={`contentpanel-clear ${props.outerClasses}`} id={props.sectionID} style={props.style}>
        {props.title &&
          <div className='contentpanel-header'>
            <h2 className='contentpanel-title'>
              {props.title}
            </h2>
            {props.headerObjects}
          </div>
        }
        {props.children}
      </section>
    );
  }

  return (
    <section className={`contentpanel ${props.outerClasses}`} id={props.sectionID} style={props.style}>
      {props.title && 
        <div className='contentpanel-header'>
          <h2 className='contentpanel-title'>
            {props.title}
          </h2>
          {props.headerObjects}
        </div>
      }
      {props.children}
    </section>
  );
};

export default ContentPanel;