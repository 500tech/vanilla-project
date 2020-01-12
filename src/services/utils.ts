import { useCallback } from "react";
import { ActionCreator } from "redux";
import { useDispatch, useSelector as useOriginalSelector } from "react-redux";
import { State } from "data";

export function useAction(actionCreator: ActionCreator<unknown>) {
  const dispatch = useDispatch();
  return useCallback((...args) => dispatch(actionCreator(...args)), [
    dispatch,
    actionCreator
  ]);
}

export function useSelector<T>(selector: (state: State) => T): T {
  return useOriginalSelector(selector);
}
