import React, {memo} from 'react';
import {Authentication} from '@navigation/authentication';
import {UnAuthentication} from '@navigation/unAuthentication';

export const RootNavigation = memo(({token}: { token: string }) =>
  token ? <Authentication /> : <UnAuthentication />,
);
