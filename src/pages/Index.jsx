import React, { useState } from "react";
import { Box, Button, Input, VStack, Text } from "@chakra-ui/react";

const Index = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInput = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input)); // eval используется только для примера
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  return (
    <VStack spacing={4}>
      <Box p={5} shadow="md" borderWidth="1px">
        <Text mb={2}>Simple Calculator</Text>
        <Input value={input} readOnly placeholder="Enter calculation" />
        <Text fontSize="xl" color="green.500">
          {result}
        </Text>
      </Box>
      <Box>
        <Button onClick={() => handleInput("1")}>1</Button>
        <Button onClick={() => handleInput("2")}>2</Button>
        <Button onClick={() => handleInput("3")}>3</Button>
        <Button onClick={() => handleInput("+")}>+</Button>
      </Box>
      <Box>
        <Button onClick={() => handleInput("4")}>4</Button>
        <Button onClick={() => handleInput("5")}>5</Button>
        <Button onClick={() => handleInput("6")}>6</Button>
        <Button onClick={() => handleInput("-")}>-</Button>
      </Box>
      <Box>
        <Button onClick={() => handleInput("7")}>7</Button>
        <Button onClick={() => handleInput("8")}>8</Button>
        <Button onClick={() => handleInput("9")}>9</Button>
        <Button onClick={() => handleInput("*")}>*</Button>
      </Box>
      <Box>
        <Button onClick={() => handleInput("0")}>0</Button>
        <Button onClick={() => handleInput(".")}>.</Button>
        <Button onClick={calculateResult}>=</Button>
        <Button onClick={() => handleInput("/")}>/</Button>
      </Box>
      <Button colorScheme="red" onClick={clearInput}>
        Clear
      </Button>
    </VStack>
  );
};

export default Index;
