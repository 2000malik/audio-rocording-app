import Mic from "/microphone.svg";
import Plus from "/plus.svg";
import { Input } from "./components";

function App() {
  return (
    <div className="h-screen w-screen p-3">
      <div className="flex  mx-auto lg:max-w-[700px] border border-slate-950 rounded-md h-full w-full px-3 py-1">
        {/* justify-between  */}
        <div className="flex  flex-nowrap items-center justify-center gap-4  mt-auto bg-slate-100 rounded-md p-2 h-20 w-full">
          {/* <form> */}
          <button>
            <img src={Plus} alt="plus-icon" width="19" height="10" />
          </button>
          <div className="grow">
            <Input />
            {/* <h1 className="text-3xl font-bold underline text-red-500 text-center">
              Hello world!mklmlkmklmklmklmkl
            </h1> */}
          </div>

          <button>
            <img src={Mic} alt="microphone-icon" width="19" height="10" />
          </button>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}

export default App;
