import {
    observer
} from "mobx-react-lite";

import {
    Stack,
} from "@mui/material";

import * as React from "react";

import {
    CollapseWithHeader
} from 'src/common/CollapseWithHeader';

import {
    anchorText
} from 'src/common/GeneratedAnchor';

import {
    CourseInformationDueDate,
} from 'src/components/CourseInformation';

import {
    CourseInformationStore
} from "src/stores/CourseInformationStore";

//
// Properties
//
interface CollapseProjectMilestoneProps extends React.PropsWithChildren<{}> {
    heading: string,
    dueDateName: keyof CourseInformationStore,
}

/**
 */
export const CollapseProjectMilestone: React.FunctionComponent<CollapseProjectMilestoneProps> = observer((props: CollapseProjectMilestoneProps) => {
    // const store = useAppStore();

    return <CollapseWithHeader header={
        <Stack>
            <h3 id={anchorText(props.heading)}>{props.heading}</h3>
            <p><CourseInformationDueDate dueDateName={props.dueDateName} /></p>
        </Stack>
    }>
        {props.children}
    </CollapseWithHeader>
});

export default CollapseProjectMilestone;
