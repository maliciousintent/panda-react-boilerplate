
import React, { PropTypes as Type } from 'react';
import { connect } from 'react-redux';

const Component = ({ children }) => {
  return (
    <div>
      <h2>This is App</h2>
      {children}
    </div>
  );
};

Component.propTypes = {
  children: Type.element,
};

const mapStateToProps = state => state;
const mapDispatchToProps = false;
export default connect(mapStateToProps, mapDispatchToProps)(Component);
