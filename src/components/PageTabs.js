import React from 'react';

import '../css/PageTabs.css';

class PageTabs extends React.Component {

  isActiveTab(tabName) {
    return (tabName === this.props.currentView) ? 'nav-link active' : 'nav-link';
  }

  onTabClick(event, tabName) {
    event.preventDefault();
    this.props.onViewChange(tabName);
  }

  render () {
    return (
      <ul className='nav page-tabs'>
        <li className='nav-item'>
          <a className={this.isActiveTab('grid')}
             onClick={(e) => this.onTabClick(e, 'grid')}>
            Grid View
          </a>
        </li>
        <li className='nav-item'>
          <a className={this.isActiveTab('list')}
             onClick={(e) => this.onTabClick(e, 'list')}>
            List View
          </a>
        </li>
        <li className='nav-item'>
          <a className={this.isActiveTab('add')}
             onClick={(e) => this.onTabClick(e, 'add')}>
            Add Task
          </a>
        </li>
      </ul>
    )
  }

};

export default PageTabs;