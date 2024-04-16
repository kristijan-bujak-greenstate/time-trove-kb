import { PxSize, RemSize } from '../../shared/theme/types';

import { StyledFlatList } from './flatList.styles';

export type FlatListProps<T> = {
  data?: T[];
  renderItem: (item: T) => JSX.Element;
  keyExtractor: (item: T) => string;
  numColumns?: number | 'auto-fill';
  gap: PxSize | RemSize;
  itemMinWidth?: RemSize;
};

export const FlatList = <T,>({
  data,
  renderItem,
  keyExtractor,
  numColumns = 'auto-fill',
  gap,
  itemMinWidth = '30rem',
}: FlatListProps<T>) => {
  return (
    <StyledFlatList $numColumns={numColumns} $gap={gap} $itemMinWidth={itemMinWidth}>
      {data && data.map((item) => <div key={keyExtractor(item)}>{renderItem(item)}</div>)}
    </StyledFlatList>
  );
};
