import { useCallback } from "react";
import { useDispatch } from "react-redux";

export function useAction(actionCreator) {
  const dispatch = useDispatch();
  return useCallback((...args) => dispatch(actionCreator(...args)), [
    dispatch,
    actionCreator
  ]);
}
