import React from "react";
import { CounterStatusType } from "../../../store/counter-reducer";
import { useAppSelector } from "../../../store/hooks";
import CountPanel from "./CountPanel/CountPanel";
import SetupPanel from "./SetupPanel/SetupPanel";

const Action = () => {
    const counterStatus = useAppSelector(state=>state.counterStatus)
  return (
    <>
      {counterStatus === CounterStatusType.count ? (
        <CountPanel />
      ) : (
        <SetupPanel />
      )}
    </>
  );
};

export default Action;
