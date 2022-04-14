import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import {
  decrementCounter,
  incrementCounter,
} from "../../../../store/counter-reducer";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";

const CountPanel = () => {
  const counter = useAppSelector((state) => state.counter);
  const min = useAppSelector((state) => state.minValue);
  const max = useAppSelector((state) => state.maxValue);
  const dispatch = useAppDispatch();
  return (
    <Flex h="200px" bg="facebook.500" justify="space-around" align="center">
      <IconButton
        disabled={counter === min}
        onClick={() => dispatch(decrementCounter())}
        aria-label="Decrement counter"
        icon={<MinusIcon />}
        variant="ghost"
      />
      <Text fontSize="7xl">{counter}</Text>
      <IconButton
        disabled={counter === max}
        onClick={() => dispatch(incrementCounter())}
        aria-label="Increment counter"
        icon={<AddIcon />}
        variant="ghost"
      />
    </Flex>
  );
};

export default CountPanel;
