import React from 'react';
import { CircularProgress } from '@material-ui/core';

const LoadingWrapper = ({ loading, children, ...otherProps }) => {
  return (
    <div {...otherProps}>
      {loading ? <CircularProgress /> : <>{children}</>}
    </div>
  );
};
export default LoadingWrapper;
