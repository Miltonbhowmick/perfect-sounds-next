"use Client";

import ButtonMediaPlay from "@/components/button/mediaPlay";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useState, useRef, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";

const MusicWrapper = () => {
  const musicList = [
    {
      id: 1,
      name: "amr ami",
      url: "/musics/1.mp3",
    },
    {
      id: 2,
      name: "ami kar",
      url: "/musics/1.mp3",
    },
    {
      id: 3,
      name: "se amar",
      url: "/musics/1.mp3",
    },
  ];

  const [playing, setPlaying] = useState(null);
  const [currentAudioUrl, setCurrentAudioUrl] = useState(null);
  const waveformRefs = useRef([]);
  const wavesurferInstances = useRef([]);

  useEffect(() => {
    if (waveformRefs.current.length === musicList.length) {
      wavesurferInstances.current = musicList.map((music, index) => {
        const ws = WaveSurfer.create({
          container: waveformRefs.current[index],
          waveColor: "#828282",
          progressColor: "#FFFFFF",
          cursorColor: "#dc1b73",
          barWidth: 3,
          barRadius: 1,
          responsive: true,
          height: 50,
          width: "100%",
          normalize: true,
          partialRender: true,
        });

        ws.load(music.url);
        ws.on("play", () => {
          setCurrentAudioUrl(music.id);
          setPlaying(true);
        });
        ws.on("pause", () => {
          setPlaying(false);
        });
        ws.on("finish", () => {
          setPlaying(false);
        });

        return ws;
      });
    }

    return () => {
      wavesurferInstances.current.forEach((ws) => {
        if (ws) {
          console.log(".asdasd");
          ws.destroy();
        }
      });
    };
  }, [musicList.length]);

  const handlePlayPause = (clickIndex) => {
    wavesurferInstances.current.forEach((ws, wsIndex) => {
      if (wsIndex === clickIndex) {
        if (!ws.isPlaying()) {
          ws.play();
        } else {
          ws.pause();
        }
      } else {
        ws.stop();
      }
    });
  };

  return (
    <div className="flex flex-col gap-4">
      {musicList.map((music, index) => (
        <div
          className="flex gap-4 md:gap-8 lg:gap-16 justify-between items-center"
          key={music.id}
        >
          <div className="w-full flex gap-2 md:gap-8 justify-start md:justify-between items-center">
            <div className="basis-[10%] shrink grow">
              <ButtonMediaPlay
                className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] rounded-full cursor-pointer"
                playing={currentAudioUrl === music.id && playing}
                gradient
                onClick={() => handlePlayPause(index)}
              />
            </div>
            <div className="basis-[70%] shrink grow">
              <div
                ref={(el) => {
                  waveformRefs.current[index] = el;
                }}
              ></div>
              <p className="block md:hidden text-primaryText">{music.name}</p>
            </div>
            <p className="hidden md:block basis-[10%] shrink grow w-max text-primaryText">
              {music.name}
            </p>
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
              href={music.url}
              className="px-4 py-2 rounded text-primaryText border border-primaryText cursor-pointer"
              download
            >
              <FileDownloadOutlinedIcon />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MusicWrapper;
