import React, { useState } from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse, ListItem } from '@mui/material';
import { Inbox, StarBorder, ExpandLess, ExpandMore } from '@mui/icons-material';
import { IssueReducerState } from '@/apps/redux';

interface JiraDynamicListProps {
    data: IssueReducerState[][]
}

const JiraDynamicList = (props: JiraDynamicListProps) => {
    const [open, setOpen] = useState(false);
    const { data } = props;
    const handleClick = () => {
        setOpen(!open);
    };

    const renderChilds = (childs: IssueReducerState[], tab: number) => {
        return (
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {childs.map((child, index) => {
                        if (tab === 1 || child.total !== 0) {
                            return (
                                <div>
                                    <ListItem key={index} sx={{ pl: 4 * tab }}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText primary={`${child.name} - ${child.total} tasks`} />
                                    </ListItem>
                                    {child.child ? renderChilds(child.child, tab + 1) : null}
                                </div>
                            )
                        }
                    })}
                </List>
            </Collapse>
        );
    };

    return (
        <List>
            {data.map((query, index) => (
                <div key={index}>
                    <ListItem onClick={handleClick}>
                        <ListItemIcon>
                            <Inbox />
                        </ListItemIcon>
                        <ListItemText primary={`Order by: ${query[0].queryType}`} />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    {renderChilds(query, 1)}
                </div>
            ))}
        </List>
    );
};

export default JiraDynamicList;
