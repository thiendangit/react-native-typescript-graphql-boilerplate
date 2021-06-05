import isEqual from 'react-fast-compare';
import { useSelector as useReduxSelector } from 'react-redux';
import { RootState } from '@store/allReducers';
import { DeviceEventEmitter } from 'react-native';
import { EmitCode } from '@components/MyToast';

function useSelector<T>(
  selector: (state: RootState) => T,
  equalityFn = isEqual,
): T {
  const state = useReduxSelector<RootState, RootState>((x) => x, equalityFn);
  return selector(state);
}

const useToast = () => {
  return (msg?: string, duration?: number) =>
    DeviceEventEmitter.emit(EmitCode.Toast, msg, duration);
};

export { useSelector, useToast };
