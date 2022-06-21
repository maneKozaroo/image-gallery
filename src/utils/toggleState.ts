import { ref } from "vue";

export const useToggleState = () => {
  const state = ref(false);

  const turnTrue = () => {
    state.value = true;
  };

  const turnFalse = () => {
    state.value = false;
  };

  return { state, turnTrue, turnFalse };
};
