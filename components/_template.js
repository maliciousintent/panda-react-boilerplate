
import React, { PropTypes as Type } from 'react';
import { connect } from 'react-redux';

const Component = ({ children }) => {
  return (
    <div>
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
