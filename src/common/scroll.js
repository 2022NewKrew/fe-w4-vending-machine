import { useEffect, useContext } from "react";
import { ContextStore } from "../context/context";

export default function useScrollToBottom(ref) {
  const { messages } = useContext(ContextStore);
  const scrollToBottom = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, ref]);
}
