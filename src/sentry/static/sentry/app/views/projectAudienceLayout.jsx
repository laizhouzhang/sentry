import React from 'react';

import DropdownLink from '../components/dropdownLink';
import ListLink from '../components/listLink';
import MenuItem from '../components/menuItem';

export default React.createClass({
  propTypes: {
    setProjectNavSection: React.PropTypes.func
  },

  componentWillMount() {
    this.props.setProjectNavSection('audience');
  },

  render() {
    let {orgId, projectId} = this.props.params;
    return (
      <div style={{
          margin: '-20px -30px 0',
          overflow: 'hidden',
      }}>
        <div style={{
          padding: '20px 30px 0',
          borderBottom: '1px solid #ddd',
        }}>
          <div style={{float: 'right'}}>
            <label>
              <span>Show me activity: </span>
              <DropdownLink>
                <MenuItem isActive={true} title="In the past month" />
              </DropdownLink>
            </label>
          </div>
          <h4 style={{float: 'left', paddingRight: 20, marginRight: 20, borderRight: '1px solid #ddd'}}>Audience</h4>
          <ul className="nav nav-tabs" style={{float: 'left'}}>
            <ListLink index={true} to={`/${orgId}/${projectId}/audience/`}>Overview</ListLink>
            <ListLink to={`/${orgId}/${projectId}/audience/users/`}>Users Affected</ListLink>
            <ListLink to={`/${orgId}/${projectId}/audience/feedback/`}>Feedback</ListLink>
          </ul>
          <div className="clearfix" />
        </div>
        <div style={{
          padding: '20px 30px 0',
        }}>
          {this.props.children}
        </div>
      </div>
    );
  },
});