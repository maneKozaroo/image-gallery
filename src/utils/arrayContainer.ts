import { reactive } from "vue";

interface ArrayContainer {
  array: string[];
}

export const useArrayContainer = () => {
  const arrayContainer = reactive<ArrayContainer>({
    array: [],
  });

  const handleElementAdd = (element: string) => {
    arrayContainer.array.push(element);
  };

  const handleElementRemoval = (element: string) => {
    arrayContainer.array = arrayContainer.array.filter(
      (existingElement) => existingElement !== element
    );
  };

  return [arrayContainer, handleElementAdd, handleElementRemoval];
};
