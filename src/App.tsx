import Mic from "/microphone.svg";
import Plus from "/plus.svg";
import { Input, RecordedAudioFile } from "./components";

function App() {
  return (
    <div className="h-screen w-screen p-3">
      <div className="flex flex-col gap-4 h-full w-full mx-auto lg:max-w-[700px] border border-slate-950 rounded-md px-3 py-1 overflow-y-scroll">
        <div className="flex flex-col gap-4 flex-grow justify-end">
          {[...Array(10)].map((_, index) => (
            <RecordedAudioFile key={index} />
          ))}
        </div>

        <div className="flex flex-nowrap items-center justify-center gap-4 bg-slate-100 rounded-md p-2 h-20 w-full">
          <button>
            <img src={Plus} alt="plus-icon" width="19" height="10" />
          </button>
          <div className="grow">
            <Input type="text" />
          </div>
          <button>
            <img src={Mic} alt="microphone-icon" width="19" height="10" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
