import React, { memo } from 'react'
import isEqual from 'react-fast-compare'
import { Launches } from '@containers/launches'

const LaunchesComponent = () => {
    return <Launches/>
}

export const LaunchesScreen = memo(LaunchesComponent, isEqual)
