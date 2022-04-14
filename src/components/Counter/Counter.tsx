import { Flex } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import {
  LocalStorageItems,
  setCounter,
  setCounterStatus,
  setErrorStatus,
  setMaxValue,
  setMinValue,
} from "../../store/counter-reducer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Action from "./Action/Action";
import MainControls from "./Controls/MainControls";
import Status from "./Status/Status";

export const Counter: FC = () => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   const counterStr = localStorage.getItem(LocalStorageItems.counter);
  //   const minVStr = localStorage.getItem(LocalStorageItems.minValue);
  //   const maxVStr = localStorage.getItem(LocalStorageItems.maxValue);
  //   const counterStatusStr = localStorage.getItem(
  //     LocalStorageItems.counterStatus,
  //   );
  //   const countingStatusStr = localStorage.getItem(
  //     LocalStorageItems.countingStatus,
  //   );
  //   const errorStatusStr = localStorage.getItem(LocalStorageItems.errorStatus);

  //   if (counterStr) {
  //     dispatch(setCounter(JSON.parse(counterStr)));
  //   }
  //   if (minVStr) {
  //     dispatch(setMinValue(JSON.parse(minVStr)));
  //   }
  //   if (maxVStr) {
  //     dispatch(setMaxValue(JSON.parse(maxVStr)));
  //   }
  //   if (counterStatusStr) {
  //     dispatch(setCounterStatus(JSON.parse(counterStatusStr)));
  //   }
  //   if (errorStatusStr) {
  //     console.log(errorStatusStr);
      
  //     dispatch(setErrorStatus(JSON.parse(errorStatusStr)));
  //   }
  //   if (countingStatusStr) {
  //     dispatch(setErrorStatus(JSON.parse(countingStatusStr)));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(
  //     LocalStorageItems.counter,
  //     JSON.stringify(state.counter),
  //   );
  // }, [state.counter]);

  // useEffect(() => {
  //   localStorage.setItem(
  //     LocalStorageItems.counterStatus,
  //     JSON.stringify(state.counterStatus),
  //   );
  // }, [state.counterStatus]);
  // useEffect(() => {
  //   localStorage.setItem(
  //     LocalStorageItems.countingStatus,
  //     JSON.stringify(state.countingStatus),
  //   );
  // }, [state.countingStatus]);

  // useEffect(() => {
  //   localStorage.setItem(
  //     LocalStorageItems.errorStatus,
  //     JSON.stringify(state.errorStatus),
  //   );
  // }, [state.errorStatus]);

  // useEffect(() => {
  //   localStorage.setItem(
  //     LocalStorageItems.minValue,
  //     JSON.stringify(state.minValue),
  //   );
  // }, [state.minValue]);

  // useEffect(() => {
  //   localStorage.setItem(
  //     LocalStorageItems.maxValue,
  //     JSON.stringify(state.maxValue),
  //   );
  // }, [state.maxValue]);

  return (
    <Flex w="300px" h="300px" direction="column">
      <MainControls />
      <Action />
      <Status />
    </Flex>
  );
};
