import {scale} from '@common';
import {Spacing} from '@models/generalTypes';

export const SpacingDefault: Spacing = {
  none: scale(0),
  tiny: scale(4),
  smaller: scale(8),
  small: scale(12),
  medium: scale(16),
  mediumPlush: scale(24),
  large: scale(32),
  huge: scale(48),
  massive: scale(64),
};
