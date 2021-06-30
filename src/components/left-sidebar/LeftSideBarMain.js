import React from 'react';
import styled from 'styled-components';

import ShortCut from './ShortCut';

const LeftSideBarMain = () => {
    return <LeftSidebar className="sidebar left-sidebar">
        <ShortCut />
    </LeftSidebar>;
}
const LeftSidebar = styled.div`
  text-align: left;
`;
export default LeftSideBarMain
