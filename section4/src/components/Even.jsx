import { useEffect } from "react";

export default function Even() {
  useEffect(() => {
    return () => {
      console.log("unmounted");
    };
  }, []);

  return <div>number is even</div>;
}
