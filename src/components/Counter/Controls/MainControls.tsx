import { SettingsIcon, SunIcon } from "@chakra-ui/icons";
import { Flex, IconButton, StatArrow } from "@chakra-ui/react";
import React from "react";
import {
  CounterStatusType,
  ErrorStatusType,
  setCounterStatus,
} from "../../../store/counter-reducer";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

const MainControls = () => {
  const counterStatus = useAppSelector((state) => state.counterStatus);
  const errorStatus = useAppSelector((state) => state.errorStatus);
  const dispatch = useAppDispatch();
  const SettingsClickHandler = () => {
    counterStatus === CounterStatusType.count
      ? dispatch(setCounterStatus(CounterStatusType.setup))
      : dispatch(setCounterStatus(CounterStatusType.count));
  };
  return (
    <Flex h="50px" bg="azure" justify="space-between">
      <IconButton
        disabled={errorStatus !== ErrorStatusType.noError}
        onClick={SettingsClickHandler}
        size="lg"
        variant="ghost"
        aria-label="Settings toggle"
        icon={<SettingsIcon />}
      />
      <IconButton
        size="lg"
        variant="ghost"
        aria-label="Theme toggle"
        icon={<SunIcon />}
      />
    </Flex>
  );
};

export default MainControls;
