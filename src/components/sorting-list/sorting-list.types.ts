import {Sorting} from 'types/sorting';
import {Filter} from 'types/filter';

export type SortingListProps = {
    list: Sorting[];
    active: Filter['sorting'];
    onClick: (value: Filter['sorting']) => void;
}
