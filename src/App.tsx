import Mic from "/microphone.svg";
import Plus from "/plus.svg";
import Pause from "/pause.svg";
import Plane from "/paper-plane.svg";
import Trash from "/trash.svg";
import { Input, RecordedAudioFile, useRecording } from "./components";

function App() {
  const {
    recordings,
    isRecording,
    isPaused,
    handleRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    deleteCurrentRecording,
  } = useRecording();

  return (
    <div className="h-screen w-screen p-3">
      <div className="flex flex-col gap-4 h-full w-full mx-auto lg:max-w-[700px] border border-slate-950 rounded-md px-3 py-1 overflow-y-scroll">
        <div className="flex flex-col gap-4 flex-grow justify-end">
          {recordings.map((recording, index) => (
            <RecordedAudioFile key={index} src={recording.url} />
          ))}
        </div>

        <div className="flex flex-nowrap items-center justify-center gap-4 bg-slate-100 rounded-md p-2 h-20 w-full">
          {!isRecording ? (
            <button>
              <img src={Plus} alt="plus-icon" width="19" height="10" />
            </button>
          ) : (
            <button onClick={deleteCurrentRecording}>
              <img src={Trash} alt="delete-icon" width="19" height="10" />
            </button>
          )}

          <div className="grow">
            {!isRecording ? (
              <Input type="text" />
            ) : (
              <>
                <div className="bg-red-500 h-3 w-3 inline-block rounded-full animate-ping mr-1" />
                <span>{isPaused ? "paused" : "recording"}</span>
              </>
            )}
          </div>

          {!isRecording ? (
            <button onClick={handleRecording}>
              <img src={Mic} alt="microphone-icon" width="19" height="10" />
            </button>
          ) : (
            <>
              {!isPaused ? (
                <button onClick={pauseRecording} disabled={isPaused}>
                  <img src={Pause} alt="pause-icon" width="19" height="10" />
                </button>
              ) : (
                <button onClick={resumeRecording}>
                  <img src={Mic} alt="microphone-icon" width="19" height="10" />
                </button>
              )}

              <button onClick={stopRecording}>
                <img
                  src={Plane}
                  alt="paper-plane-icon"
                  width="19"
                  height="10"
                />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
