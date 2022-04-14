import React from "react";
import { Text } from "@chakra-ui/react";
import { useAppSelector } from "../../../../store/hooks";
import { ErrorStatusType } from "../../../../store/counter-reducer";

const ErrorMessage = () => {
  const errorStatus = useAppSelector((state) => state.errorStatus);
  return (
    <Text color={'red.600'} align='center' fontWeight='bold'>
      {errorStatus === ErrorStatusType.errorMin
        ? "Starting value of counter should be higher then 0"
        : "Ending value of counter should be higher then starting value"}
    </Text>
  );
};

export default ErrorMessage;
