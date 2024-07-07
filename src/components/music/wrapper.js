"use Client";

import ButtonMediaPlay from "@/components/button/mediaPlay";

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import { useState, useRef, useEffect } from "react";

import WaveSurfer from "wavesurfer.js";

const MusicWrapper = () => {
  const [playing, setPlaying] = useState();

  const waveformRef = useRef(null);
  const [wavesurfer, setWavesurfer] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);

  useEffect(() => {
    if (waveformRef.current && !wavesurfer) {
      const ws = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#828282",
        progressColor: "#FFFFFF",
        cursorColor: "#dc1b73",
        barWidth: 2,
        barRadius: 1,
        responsive: true,
        height: 50,
        width: "100%",
        url: "/musics/1.mp3",
        normalize: true,
        partialRender: true,
      });
      setWavesurfer(ws);

      return () => {
        if (wavesurfer) {
          wavesurfer.destroy();
        }
      };
    }
  }, [waveformRef, wavesurfer]);

  //   useEffect(() => {
  //     if (wavesurfer) {
  //       wavesurfer.load();
  //     }
  //   }, [audioUrl, wavesurfer]);

  const handlePlayPause = () => {
    console.log("++++++++++++=");
    if (wavesurfer) {
      wavesurfer.playPause();
      setPlaying(!playing);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex gap-16 justify-between items-center">
        <div className="w-full flex gap-2 justify-between items-center">
          <ButtonMediaPlay
            className="w-[80px] h-[80px] rounded-full cursor-pointer"
            playing={playing}
            gradient
            onClick={() => {
              handlePlayPause(), setAudioUrl("/musics/1.mp3");
            }}
          ></ButtonMediaPlay>
          <div className="basis-[60%]">
            <div ref={waveformRef}></div>
          </div>
          <p className="text-primaryText">Motocross motorcycle engine</p>
        </div>
        <div className="flex gap-6 justify-between items-center">
          <div className="text-primaryText flex gap-2 items-center">
            <QueryBuilderIcon fontSize="small" />
            <p>00:19</p>
          </div>
          <div className="px-4 py-2 rounded text-primaryText border border-primaryText cursor-pointer">
            <FavoriteBorderOutlinedIcon />
          </div>
          <a
            className="px-4 py-2 rounded text-primaryText border border-primaryText cursor-pointer"
            download
          >
            <FileDownloadOutlinedIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MusicWrapper;
