import { useState } from 'react';
import { Collapse, Button, styled, Box } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { IssueReducerState } from '@/apps/redux';
import { TrParagraph } from '@/libs/ui';

interface ICollapseIsOpenState {
    id: number;
    isOpen: boolean;
}

interface JiraDynamicListProps {
    data: IssueReducerState[][]
}

const Bold = styled('span')({
    fontWeight: "bold"
});

const JiraDynamicList = (props: JiraDynamicListProps) => {
    const { data } = props;
    const [isOpenList, setIsOpenList] = useState(data.map((_query, index) => ({ id: index, isOpen: false }) as ICollapseIsOpenState));

    const handleClick = (id: number) => {
        const update = isOpenList.map(x => {
            if (x.id == id) {
                return {
                    ...x,
                    isOpen: !x.isOpen
                }
            } else {
                return x;
            }
        });

        setIsOpenList(update);
    };

    const renderChilds = (childs: IssueReducerState[], tab: number, index: number) => {
        return (
            <Collapse in={tab === 1 ? isOpenList.find(x => x.id === index)?.isOpen : true} timeout="auto" unmountOnExit>
                <ul>
                    {childs.map((child, index) => {
                        if (tab === 1 || child.total !== 0) {
                            return (
                                <Box key={index} sx={{ pl: 3 * tab }}>
                                    <li>
                                        <TrParagraph>
                                            {child.name} - {child.total} tasks
                                        </TrParagraph>
                                        {child.child ? renderChilds(child.child, tab + 1, index) : null}
                                    </li>
                                </Box>
                            )
                        }
                    })}
                </ul>
            </Collapse>
        );
    };

    return (
        <div>
            {data.map((query, index) => (
                <div key={index}>
                    <TrParagraph >
                        <Bold>Order by:</Bold> {query[0].queryType}
                        {
                            isOpenList.find(x => x.id === index)?.isOpen ?
                                <Button onClick={() => handleClick(index)}>
                                    <ExpandLess />
                                </Button>
                                :
                                <Button onClick={() => handleClick(index)}>
                                    <ExpandMore />
                                </Button>
                        }
                    </TrParagraph>
                    {renderChilds(query, 1, index)}
                </div>
            ))}
        </div>
    );
};

export default JiraDynamicList;
