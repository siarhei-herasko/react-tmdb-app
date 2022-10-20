import {Filter} from 'types/filter';

export type PaginationProps = {
    total: number;
    active: Filter['page'];
    onClick: (value: Filter['page']) => void;
}
