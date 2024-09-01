import { useRef, useState, useCallback } from "react";

interface Recording {
  url: string;
  chunks: Blob[];
}

export const useRecording = () => {
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [recordings, setRecordings] = useState<Recording[]>([]);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const checkIsMediaSupported = useCallback((): boolean => {
    return (
      !!navigator.mediaDevices &&
      typeof navigator.mediaDevices.getUserMedia === "function"
    );
  }, []);

  const handleRecording = () => {
    const isSupported = checkIsMediaSupported();
    if (isSupported) {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          const mediaRecorder = new MediaRecorder(stream);
          mediaRecorderRef.current = mediaRecorder;
          const chunks: Blob[] = [];

          mediaRecorder.ondataavailable = (event: BlobEvent) => {
            if (event.data.size > 0) {
              chunks.push(event.data);
            }
          };

          mediaRecorder.onstop = () => {
            const blob = new Blob(chunks, { type: "audio/wav" });
            const url = URL.createObjectURL(blob);
            setRecordings((prev) => [...prev, { url, chunks }]);
            setIsRecording(false);
            setIsPaused(false);
          };

          mediaRecorder.start();
          setIsRecording(true);
          setIsPaused(false);
        })
        .catch((err) => {
          window.alert(`The following getUserMedia error occurred: ${err}`);
        });
    } else {
      window.alert("getUserMedia not supported on your browser!");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
  };

  const pauseRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      mediaRecorderRef.current.pause();
      setIsPaused(true);
    }
  };

  const resumeRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "paused"
    ) {
      mediaRecorderRef.current.resume();
      setIsPaused(false);
    }
  };

  const deleteCurrentRecording = () => {
    setIsRecording(false);
  };

  return {
    recordings,
    isRecording,
    isPaused,
    handleRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    deleteCurrentRecording,
  };
};
