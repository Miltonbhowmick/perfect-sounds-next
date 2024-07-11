"use client";

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlaying } from "@/utils/modules/PlayerSlice";
import ButtonMediaPlay from "@/components/button/mediaPlay";
import WaveSurfer from "wavesurfer.js";

const BottomPlayer = ({ mediaElement }) => {
  const dispatch = useDispatch();
  const currentMusic = useSelector((state) => {
    return state.player.currentMusic;
  });
  const playing = useSelector((state) => {
    return state.player.playing;
  });
  const bottomWaveformRef = useRef(null);
  const wavesurferInstance = useRef(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (bottomWaveformRef.current && currentMusic && mediaElement) {
      wavesurferInstance.current = WaveSurfer.create({
        container: bottomWaveformRef.current,
        waveColor: "#828282",
        progressColor: "#FFFFFF",
        cursorColor: "#dc1b73",
        barWidth: 2,
        barRadius: 1,
        responsive: true,
        height: 50,
        width: "100%",
        normalize: true,
        partialRender: true,
        media: mediaElement,
      });

      // wavesurferInstance.current.load(currentMusic?.url);

      wavesurferInstance.current.on("ready", () => {
        setDuration(wavesurferInstance.current.getDuration());
      });

      wavesurferInstance.current.on("play", () => dispatch(setPlaying(true)));
      wavesurferInstance.current.on("pause", () => dispatch(setPlaying(false)));
      wavesurferInstance.current.on("finish", () =>
        dispatch(setPlaying(false))
      );
      return () => {
        console.log("bottom destory before", playing);

        if (wavesurferInstance.current) {
          console.log("bottom destory");
          wavesurferInstance.current.destroy();
        }
      };
    }
  }, [currentMusic, dispatch, mediaElement]);

  const handlePlayPause = () => {
    if (wavesurferInstance.current) {
      if (!wavesurferInstance.current.isPlaying()) {
        wavesurferInstance.current.play();
      } else {
        wavesurferInstance.current.pause();
      }
    }
  };

  useEffect(() => {
    if (wavesurferInstance.current) {
      if (playing) {
        wavesurferInstance.current.play();
      } else {
        wavesurferInstance.current.pause();
      }
    }
  }, [playing]);

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="fixed z-[99] bottom-0 left-0 right-0 bg-gray-800 p-4">
      {currentMusic && (
        <div className="flex justify-between items-center">
          <ButtonMediaPlay
            className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] rounded-full cursor-pointer"
            playing={playing}
            gradient
            onClick={handlePlayPause}
          />
          <div className="w-full">
            <div ref={bottomWaveformRef}></div>
          </div>
          <p className="text-primaryText">{currentMusic.name}</p>
          <p className="text-primaryText">{formatDuration(duration)}</p>
        </div>
      )}
    </div>
  );
};

export default BottomPlayer;
