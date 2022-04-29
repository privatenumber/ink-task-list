import { FC, ReactNode, ReactElement } from 'react';

declare const TaskList: FC<{
    children: ReactNode | ReactNode[];
}>;

declare type Spinner = {
    interval: number;
    frames: string[];
};

declare type StateLoading = 'loading';
declare type StateOthers = 'pending' | 'success' | 'warning' | 'error';
declare type BaseProps = {
    label: string;
    status?: string;
    output?: string;
    isExpanded?: boolean;
    children?: ReactElement | ReactElement[];
};
declare const Task: FC<BaseProps & ({
    state?: StateOthers;
    spinner?: Spinner;
} | {
    state: StateLoading;
    spinner: Spinner;
})>;

export { Task, TaskList };
