import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Flex,
  IconButton,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import {
  INIT_MIN_VALUE,
  setCounter,
  setMaxValue,
  setMinValue,
} from "../../../../store/counter-reducer";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";

const SetupPanel = () => {
  const min = useAppSelector((state) => state.minValue);
  const max = useAppSelector((state) => state.maxValue);
  const dispatch = useAppDispatch();
  return (
    <Flex h="200px" direction="column" bg="facebook.500" justify="space-evenly">
      <Flex
        h="100px"
        w="100%"
        bg="facebook.100"
        justify="space-around"
        align="center"
      >
        <IconButton
          onClick={() => {
            dispatch(setMaxValue(max - 1));
          }}
          aria-label="Decrement max value"
          icon={<MinusIcon />}
          variant="ghost"
        />
        <NumberInput
          min={min + 1}
          value={max}
          variant="outline"
          onChange={(valueAsString) => {
            dispatch(setMaxValue(+valueAsString));
          }}
        >
          <NumberInputField />
        </NumberInput>

        <IconButton
          onClick={() => {
            dispatch(setMaxValue(max + 1));
          }}
          aria-label="Increment max value"
          icon={<AddIcon />}
          variant="ghost"
        />
      </Flex>
      <Flex
        h="100px"
        w="100%"
        bg="facebook.100"
        justify="space-around"
        align="center"
      >
        <IconButton
          onClick={() => {
            dispatch(setMinValue(min - 1));
            dispatch(setCounter(min - 1));
          }}
          aria-label="Decrement min value"
          icon={<MinusIcon />}
          variant="ghost"
        />
        <NumberInput
          max={max - 1}
          min={INIT_MIN_VALUE}
          value={min}
          variant="flushed"
          onChange={(valueAsString) => {
            dispatch(setMinValue(+valueAsString));
            dispatch(setCounter(+valueAsString));
          }}
        >
          <NumberInputField />
        </NumberInput>
        <IconButton
          onClick={() => {
            dispatch(setMinValue(min + 1));
            dispatch(setCounter(min + 1));
          }}
          aria-label="Increment min value"
          icon={<AddIcon />}
          variant="ghost"
        />
      </Flex>
    </Flex>
  );
};

export default SetupPanel;
