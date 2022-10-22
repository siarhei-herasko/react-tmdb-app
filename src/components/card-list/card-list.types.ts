import {Card} from 'types/card';

export type CardListProps = {
    list: Card[];
    loading: boolean;
    error: Error | null;
}
