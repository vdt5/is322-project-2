import React from 'react';

import '../css/ListItem.css';

const ListItem = props => {
  return (
    <li className="list-group-item list-item">
      <div className="list-item__column--title">
        {props.title}
      </div>
      <div className="list-item__column--columnName">
        {props.column}
      </div>
      <div className="list-item__column--type">
        {props.type}
      </div>
    </li>
  );
}

export default ListItem;