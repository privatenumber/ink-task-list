import { FC, ReactNode, ReactElement } from 'react';

declare const TaskList: FC<{
    children: ReactNode | ReactNode[];
}>;

declare type State = 'pending' | 'loading' | 'success' | 'warning' | 'error';
declare const Task: FC<{
    label: string;
    state?: State;
    status?: string;
    output?: string;
    spinnerType?: string;
    isExpanded?: boolean;
    children?: ReactElement | ReactElement[];
}>;

export { Task, TaskList };
