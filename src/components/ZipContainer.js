import React from 'react';

const ZipContainer = (props) => {

  let zipContent;
  if (props.zip) {
    zipContent = props.zip;
  } else {
    zipContent = "No zip code added";
  }

  return <div className="zip-box"><ion-icon name="location-sharp"></ion-icon>{zipContent}</div>;
};

export default ZipContainer;