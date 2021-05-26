import {useSelector as useReduxSelector} from "react-redux";
import {RootState} from "@src/store/allReducers";
import isEqual from "react-fast-compare";

function useSelector<T>(
    selector: (state: RootState) => T,
    equalityFn = isEqual,
): T {
    const state = useReduxSelector<RootState, RootState>(x => x, equalityFn);
    return selector(state);
}

export {
    useSelector
};
