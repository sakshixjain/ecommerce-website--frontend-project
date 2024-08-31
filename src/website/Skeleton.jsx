import React from 'react';
// import './skeleton.css';

const Skeleton = ({ width, height, borderRadius }) => {
  const style = {
    width: width || '100%',
    height: height || '100%',
    borderRadius: borderRadius || '4px',
  };

  return <div className="skeleton" style={style}></div>;
};

export default Skeleton;
