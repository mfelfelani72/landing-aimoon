import React from 'react';
import Drawer from '../../features/core/components/Drawer.jsx';




const CleanSplineChart = () => {
  const drawerLocation = "bottom";

  return (

    <Drawer
      id="drawer-card"
      overlayId="clickableOverlay"
      location={drawerLocation}
    >
      <div className=' bg-lime-500'>
        sdfsdf
      </div>
    </Drawer>

  );
};

export default CleanSplineChart;
