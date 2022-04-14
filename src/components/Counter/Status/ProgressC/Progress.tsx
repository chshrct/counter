import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Flex, Progress, Text } from "@chakra-ui/react";
import React from "react";
import { useAppSelector } from "../../../../store/hooks";

const ProgressC = () => {
  const min = useAppSelector((state) => state.minValue);
  const max = useAppSelector((state) => state.maxValue);
  const counter = useAppSelector((state) => state.counter);
  return (
    <Flex h="50px" bg="yellow" justify="space-around" align="center">
      <TriangleDownIcon color={min===counter?'red.500':'blackAlpha.900'}/>
      <Text fontSize="md">{min}</Text>
      <Progress hasStripe w="70%" value={counter} min={min} max={max} />
      <TriangleUpIcon color={max===counter?'red.500':'blackAlpha.900'} />
      <Text fontSize="md">{max}</Text>
    </Flex>
  );
};

export default ProgressC;
