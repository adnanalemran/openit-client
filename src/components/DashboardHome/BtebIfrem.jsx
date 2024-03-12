import React from 'react';

const BtebIframe = () => {
  return (
    <div>
      <iframe
        title="BTEB Website"
        src="https://bteb.gov.bd/"
        width="100%"
        height="600px"
        frameBorder="0"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />
    </div>
  );
};

export default BtebIframe;
