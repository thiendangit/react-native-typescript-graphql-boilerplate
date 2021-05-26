import React, {memo} from 'react'
import {Launches} from "@src/containers";
import isEqual from "react-fast-compare";

const LaunchesComponent = () => {
    return <Launches/>
};

export const LaunchesScreen = memo(LaunchesComponent, isEqual);
