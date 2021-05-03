import React from 'react';

export const Accordion = ({ items }) => {
  const onTitleClick = index => {
    console.log('Title clicked', index);
  };

  return (
    <div className="ui styled accordion">
      {items.map((item, index) => (
        <React.Fragment key={item.title}>
          <div
            className="title active"
            onClick={() => onTitleClick(index)}
          >
            <i className="dropdown icon"></i>
            {item.title}
          </div>
          <div className="content active">
            <p>{item.content}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
