import React from "react";
import {styled} from "@mui/system";
import {TabPanelUnstyled, TabsListUnstyled, TabsUnstyled, TabUnstyled} from "@mui/base";
import {buttonUnstyledClasses} from "@mui/base";
import {tabUnstyledClasses} from "@mui/base";
import EventGallery from "./Events/EventGallery";

function TabPicker(props) {
    // This component draws influence from the MaterialUI page: https://mui.com/components/tabs/#customization

    const Tab = styled(TabUnstyled)`
        font: normal normal normal 17px/25px Roboto;
        color: #000000;
        cursor: pointer;
        background-color: transparent;
        width: 100%;
        padding: 12px 16px;
        margin: 6px 6px;
        border: none;
        border-radius: 7px;
        display: flex;
        justify-content: center;
        
        
        &:hover { 
            background-color: #CFD0D2;
        }
        
        &.${buttonUnstyledClasses.focusVisible} {
            color: #fff;
            outline: none;
            background-color: #80BFFF;
        }

        &.${tabUnstyledClasses.selected} {
            font: normal normal bold 17px/18px Roboto;
            background-color: #ffffff;
            color: #007AFF;
        }

        &.${buttonUnstyledClasses.disabled} {
            opacity: 0.5;
            cursor: not-allowed;
        }
    `;

    const TabPanel = styled(TabPanelUnstyled)`
        width: 100%;
        font: normal normal bold 17px/18px Roboto;
    `;

    const TabsList = styled(TabsListUnstyled)`
        min-width: 320px;
        background-color: #7676801F;
        border-radius: 9px;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: space-between;
    `;

    return (
        <TabsUnstyled defaultValue={0}>
            <TabsList sx={{ width: '66%' }}>
                <Tab>Events</Tab>
                <Tab>Buildings</Tab>
            </TabsList>
            <TabPanel value={0}>
                <EventGallery/>
            </TabPanel>
            <TabPanel value={1}>Second content</TabPanel>
        </TabsUnstyled>
    );
}

export default TabPicker;
