import React from 'react';
import { CircularProgress } from '@material-ui/core';

const LoadingWrapper = ({ loading, component, children, ...otherProps }) => {
  return (
    <component {...otherProps}>
      {loading ? <CircularProgress /> : <>{children}</>}
    </component>
  );
};
export default LoadingWrapper;
