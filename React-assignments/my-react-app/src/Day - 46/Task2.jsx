import { useEffect } from "react";

function ComponentLoaded() {
  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  return <div>Component Loaded – check the console</div>;
}

export default ComponentLoaded;
