import React, { useRef, useState } from "react";
import Play from "/play.svg";
import Pause from "/pause.svg";

type Props = {
  src: string;
};

export const RecordedAudioFile: React.FC<Props> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex justify-end">
      <audio ref={audioRef} preload="auto" src={src}></audio>
      <div className="flex items-center gap-4 bg-slate-300 border border-black rounded-md p-2 h-16 w-3/4">
        <button className="bg-red-600 text-white rounded-full p-2 w-16">
          1x
        </button>
        <button
          onClick={handlePlayPause}
          className="text-white rounded-full h-10 w-10 flex items-center justify-center hover:bg-slate-50  transition-colors duration-300"
        >
          {isPlaying ? (
            <img src={Pause} alt="pause-icon" width="15" height="10" />
          ) : (
            <img src={Play} alt="play-icon" width="15" height="10" />
          )}
        </button>

        <div className="grow">progress</div>
      </div>
    </div>
  );
};
