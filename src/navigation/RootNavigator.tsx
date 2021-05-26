import React, {memo} from 'react';
import isEqual from "react-fast-compare";
import {Authentication} from "@navigation/authentication";
import {UnAuthentication} from "@navigation/unAuthentication";

export const RootNavigation = memo(({token}: { token: string }) => (
    token ? <Authentication/> : <UnAuthentication/>
), isEqual);
