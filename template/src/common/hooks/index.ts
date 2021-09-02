import isEqual from 'react-fast-compare';
import {useSelector as useReduxSelector} from 'react-redux';
import {RootState} from '@store/allReducers';
import {DeviceEventEmitter, StyleSheet} from 'react-native';
import {useEffect, useRef, useState} from 'react';
import {EmitCode} from '@lib/components/MyToast/MyToast';

function useSelector<T>(
  selector: (state: RootState) => T,
  equalityFn = isEqual,
): T {
  const state = useReduxSelector<RootState, RootState>((x) => x, equalityFn);
  return selector(state);
}

export const enhance = <T>(arrStyle: Array<T>) => {
  return StyleSheet.flatten<T>(arrStyle);
};

const useToast = () => {
  return (msg?: string, duration?: number) =>
    DeviceEventEmitter.emit(EmitCode.Toast, msg, duration);
};

function usePrevious<T = any>(value: T): T | undefined {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

function useMounted() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return isMounted;
}

export {useSelector, useToast, usePrevious, useMounted};
