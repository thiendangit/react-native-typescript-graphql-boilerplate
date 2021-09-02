import * as React from 'react';
import {
  NavigationAction,
  NavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const navigationRef: React.RefObject<NavigationContainerRef> =
  React.createRef();

type paramType<T> = T | object | any

function navigate<T>(name: string, params?: paramType<T>): void {
  navigationRef.current?.navigate(name, params);
}

function dispatch(action: NavigationAction): void {
  navigationRef.current?.dispatch(action);
}

function replace<T>(name: string, params?: paramType<T>): void {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

function push<T>(name: string, params?: paramType<T>): void {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}

function pop(count: number): void {
  navigationRef.current?.dispatch(StackActions.pop(count));
}

function goBack(): void {
  navigationRef.current?.goBack();
}

function reset(routes?: any): void {
  navigationRef.current?.reset({
    routes: [{name: routes}],
  });
}

export const NavigationService = {
  navigate,
  dispatch,
  replace,
  push,
  goBack,
  reset,
  pop,
};
