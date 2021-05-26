import {useSelector as useReduxSelector} from "react-redux";
import isEqual from "react-fast-compare";
import {RootState} from "@store/allReducers";

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
