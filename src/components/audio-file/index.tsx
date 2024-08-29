import Play from "/play.svg";

export const RecordedAudioFile: React.FC = () => {
  return (
    <div className="flex justify-end">
      <div className="flex items-center gap-4 bg-slate-300 border border-black rounded-md p-2 h-16 w-3/4">
        <button className="bg-red-600 text-white rounded-full p-2 w-16">
          1x
        </button>
        <button>
          <img src={Play} alt="play-icon" width="15" height="10" />
        </button>
        <div className="grow">nn</div>
      </div>
    </div>
  );
};
