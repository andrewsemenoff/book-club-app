import { useState } from "react";

const useModal = (initial: boolean): [isDisplayed: boolean, toggleIsDisplayed: ()=>void] => {
  const [isDisplayed, setIsDisplayed] = useState(initial);
  const toggleIsDisplayed = () => {
    setIsDisplayed(!isDisplayed);
  };
  return [isDisplayed, toggleIsDisplayed];
};
export default useModal;
