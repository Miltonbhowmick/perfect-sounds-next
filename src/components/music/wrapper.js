"use Client";

import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentMusic, setPlaying } from "@/utils/modules/PlayerSlice";
import { useMediaElement } from "@/contexts/MediaElementContext";

import WaveSurfer from "wavesurfer.js";
import BottomPlayer from "./bottom-player";

import ButtonMediaPlay from "@/components/button/mediaPlay";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

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
      url: "/musics/2.mp3",
    },
    {
      id: 3,
      name: "se amar",
      url: "/musics/3.mp3",
    },
  ];

  const dispatch = useDispatch();
  var currentMusic = useSelector((state) => {
    return state.player.currentMusic;
  });
  var playing = useSelector((state) => {
    return state.player.playing;
  });
  const {
    mediaElement,
    setMediaElement,
    setMediaElementRef,
    setMediaElementCanvaRef,
    intactMediaElementRef,
    setIntactMediaElementRef,
  } = useMediaElement();

  const [durations, setDurations] = useState({});
  const waveformRefs = useRef([]);
  const wavesurferInstances = useRef([]);
  const audioRef = useRef();

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
          normalize: false,
          partialRender: true,
          media: new Audio(),
        });

        ws.load(music.url);

        ws.on("ready", () => {
          const duration = ws.getDuration();
          setDurations((prevDurations) => ({
            ...prevDurations,
            [music.id]: duration,
          }));
        });

        ws.on("play", () => {
          setMediaElement(ws.getMediaElement());
          setMediaElementRef(ws);
          setMediaElementCanvaRef(audioRef);

          setIntactMediaElementRef(music.url);

          dispatch(setCurrentMusic(music));
          dispatch(setPlaying(true));
        });
        ws.on("pause", () => {
          dispatch(setPlaying(false));
        });
        ws.on("finish", () => {
          // dispatch(setPlaying(false));
        });

        return ws;
      });
    }

    return () => {
      wavesurferInstances.current.forEach((ws) => {
        if (ws) {
          // ws.destroy();
        }
      });
    };
  }, [dispatch]);

  const handlePlayPause = (clickIndex) => {
    let wsClick = null;
    wavesurferInstances.current.forEach((ws, wsIndex) => {
      if (musicList[wsIndex].id === clickIndex) {
        wsClick = ws;
      } else {
        ws.stop();
      }
    });
    if (wsClick) {
      if (!wsClick.isPlaying()) {
        wsClick.play();
      } else {
        wsClick.pause();
      }
    }
  };

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="flex flex-col gap-4">
      <audio ref={audioRef}>
        <source src="/musics/1.mp3"></source>
      </audio>
      {musicList.map((music, index) => (
        <div
          className="flex gap-4 md:gap-8 lg:gap-16 justify-between items-center"
          key={"music_row" + music.id}
        >
          <div className="w-full flex gap-2 md:gap-8 justify-start md:justify-between items-center">
            <div className="basis-[10%] shrink grow">
              <ButtonMediaPlay
                className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] rounded-full cursor-pointer"
                playing={currentMusic?.id === music?.id && playing === true}
                gradient
                onClick={() => handlePlayPause(music.id)}
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
              <p>
                {durations[music.id]
                  ? formatDuration(durations[music.id])
                  : "00:00"}
              </p>
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

      {/* <BottomPlayer mediaElement={mediaElement}></BottomPlayer> */}
    </div>
  );
};

export default MusicWrapper;
