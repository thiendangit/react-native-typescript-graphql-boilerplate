import React, {memo} from 'react';
import {UnAuthentication} from "@src/navigation/unAuthentication";
import {Authentication} from "@src/navigation/authentication";
import isEqual from "react-fast-compare";

export const RootNavigation = memo(({token}: { token: string }) => (
    token ? <Authentication/> : <UnAuthentication/>
), isEqual);
