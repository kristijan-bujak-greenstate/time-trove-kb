import { Text } from '../../text/Text';
import { StyledDots } from '../pagination.styles';

export const Dots = () => {
  return (
    <StyledDots>
      <Text fontWeight={'bold'} fontSize={'extraSmall'} lineHeight={'extraSmall'} palette={'neutrals'} color={'hue900'}>
        ...
      </Text>
    </StyledDots>
  );
};
