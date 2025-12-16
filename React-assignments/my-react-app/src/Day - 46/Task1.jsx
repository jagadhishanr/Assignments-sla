import { useEffect } from "react";

function RenderLogger() {
  useEffect(() => {
    console.log("Rendered!");
  });

  return <div>Check the console</div>;
}

export default RenderLogger;
