import { useState } from "react";
import ShimmerButton from "./components/Button";

const App = () => {
  const [count, setCount] = useState<number>(0);

  function IncreaseCounter(random: number) {
    setCount(random + 1);
  }

  function DecreaseCounter(random: number) {
    setCount(random - 1);
  }
  return (
    <div className="h-screen w-full bg-slate-700 flex flex-col items-center justify-center ">
      <span className="text-white text-2xl mb-4">{count.toString()}</span>
      <div className="flex gap-2 mx-auto">
        <ShimmerButton
          onClick={() => {
            IncreaseCounter(count);
          }}
        >
          Increase Counter
        </ShimmerButton>
        <ShimmerButton
          onClick={() => {
            DecreaseCounter(count);
          }}
        >
          Decrease Counter
        </ShimmerButton>
      </div>
    </div>
  );
};

export default App;
