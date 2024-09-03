"use Client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentMusic, setPlaying } from "@/store/modules/music";
import { useMediaElement } from "@/contexts/MediaElementContext";
import WaveSurfer from "wavesurfer.js";
import BottomPlayer from "./bottom-player";

import ButtonMediaPlay from "@/components/button/mediaPlay";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const MusicFavouriteWrapper = ({ musicTrackList }) => {
  // const musicList = [
  //   {
  //     id: 1,
  //     name: "amr ami",
  //     url: "/musics/1.mp3",
  //   },
  //   {
  //     id: 2,
  //     name: "ami kar",
  //     url: "/musics/2.mp3",
  //   },
  //   {
  //     id: 3,
  //     name: "se amar",
  //     url: "/musics/3.mp3",
  //   },
  // ];

  const dispatch = useDispatch();
  var currentMusic = useSelector((state) => {
    return state.music.currentMusic;
  });
  var playing = useSelector((state) => {
    return state.music.playing;
  });
  const { setMediaElement } = useMediaElement();

  const [durations, setDurations] = useState({});
  const [currentTimes, setCurrentTimes] = useState({});
  const waveformRefs = useRef([]);
  const wavesurferInstances = useRef([]);
  const audioRef = useRef();

  useEffect(() => {
    if (waveformRefs.current.length === musicTrackList.length) {
      console.log("musicTrackList.length", musicTrackList.length);
      wavesurferInstances.current = musicTrackList.map((music, index) => {
        const ws = WaveSurfer.create({
          container: waveformRefs.current[index],
          waveColor: "#828282",
          progressColor: "#FFFFFF",
          cursorColor: "#dc1b73",
          barHeight: 100,
          barWidth: 3,
          barRadius: 1,
          responsive: true,
          height: 50,
          width: "100%",
          // normalize: false,
          // partialRender: true,
          url: music.track.audio_file,
          media: new Audio(),
          peaks: music.track.beats,
          dragToSeek: true,
          interact: true,
          duration: music.track.duration_seconds,
        });

        // ws.load(music.url);
        ws.on("seeking", (currentTime) => {
          console.log("======seeker", currentTime);
        });

        ws.on("ready", () => {
          // Here actual duration is pre-calculated when page first time rendered
          const duration = ws.getDuration();
          setDurations((prevDurations) => ({
            ...prevDurations,
            [music.track.id]: duration,
          }));
        });

        ws.on("audioprocess", () => {
          // Here duration is re-calculating because audio is playing.
          // So, on playing audio duration reducing calculating
          const duration = ws.getCurrentTime();
          setCurrentTimes((prevDurations) => ({
            ...prevDurations,
            [music.track.id]: duration,
          }));
        });

        ws.on("play", () => {
          setMediaElement(ws.getMediaElement());

          dispatch(setCurrentMusic(music.track));
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
  }, [musicTrackList]);

  const handlePlayPause = (clickIndex) => {
    let wsClick = null;
    wavesurferInstances.current.forEach((ws, wsIndex) => {
      if (musicTrackList[wsIndex].id === clickIndex) {
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
      {musicTrackList.map((music, index) => (
        <div
          className="flex gap-4 md:gap-8 lg:gap-16 justify-between items-center"
          key={"music_row" + music.track.id}
        >
          <div className="w-full flex gap-2 md:gap-8 justify-start md:justify-between items-center">
            <div className="basis-[10%] shrink grow">
              <ButtonMediaPlay
                className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] rounded-full cursor-pointer"
                playing={
                  currentMusic?.id === music.track?.id && playing === true
                }
                gradient
                onClick={() => handlePlayPause(music.track.id)}
              />
            </div>
            <div className="basis-[70%] shrink grow">
              <div
                ref={(el) => {
                  waveformRefs.current[index] = el;
                }}
              ></div>
              <p className="block md:hidden text-primaryText">
                {music.track.name}
              </p>
            </div>
            <p className="hidden md:block basis-[10%] shrink grow w-max text-primaryText">
              {music.track.name}
            </p>
          </div>
          <div className="flex gap-3 justify-between items-center">
            <div className="text-primaryText flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 19 18"
                fill="none"
                className="w-[18px] h-[18px]"
              >
                <path
                  d="M9.82324 16.4531C13.9395 16.4531 17.2764 13.1162 17.2764 9C17.2764 4.88375 13.9395 1.54688 9.82324 1.54688C5.70699 1.54688 2.37012 4.88375 2.37012 9C2.37012 13.1162 5.70699 16.4531 9.82324 16.4531Z"
                  stroke="white"
                  strokeWidth="1.11797"
                />
                <path
                  d="M9.82915 7.88802C9.21173 7.88802 8.71118 8.38857 8.71118 9.00599C8.71118 9.6234 9.21173 10.124 9.82915 10.124C10.4466 10.124 10.9471 9.6234 10.9471 9.00599C10.9471 8.38857 10.4466 7.88802 9.82915 7.88802ZM9.82915 7.88802V5.27258M12.0702 11.2506L10.6179 9.79825"
                  stroke="white"
                  strokeWidth="1.11797"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>
                {durations[music.track.id]
                  ? formatDuration(
                      durations[music.track.id] -
                        (currentTimes[music.track.id] || 0)
                    )
                  : "00:00"}
              </p>
            </div>
            <div className="px-2 py-2 rounded text-primaryText border border-primaryText cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                className="w-[12px] h-[12px] md:w-[22px] md:h-[22px]"
              >
                <g id="heart-add">
                  <path
                    id="Vector"
                    d="M11.1077 18.8259C9.94145 18.8259 9.26923 18.3283 7.92477 17.3332C0.866083 12.1087 1.55853 5.9159 4.61874 4.03876C6.95051 2.60845 8.98568 3.18485 10.2082 4.10299C10.7096 4.47945 10.9602 4.66768 11.1077 4.66768C11.2551 4.66768 11.5057 4.47945 12.0071 4.10299C13.2297 3.18485 15.2648 2.60845 17.5966 4.03876C19.091 4.95545 20.0208 6.90133 19.759 9.26104"
                    stroke="white"
                    strokeWidth="1.3043"
                    strokeLinecap="round"
                  />
                  <path
                    id="Vector_2"
                    d="M12.8467 15.3478H19.8029M16.3248 11.8696V18.8259"
                    stroke="white"
                    strokeWidth="1.3043"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
            <a className="px-2 py-2 rounded text-primaryText border border-primaryText cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 22"
                fill="none"
                className="w-[12px] h-[12px] md:w-[22px] md:h-[22px]"
              >
                <path
                  d="M18.7085 7.54947L17.1894 6.23033C16.095 5.27986 15.666 4.76857 15.0733 4.94932C14.3343 5.1747 14.5776 6.59682 14.5776 7.07693C13.4286 7.07693 12.2341 6.98856 11.1015 7.17269C7.36271 7.78054 6.1936 10.4406 6.1936 13.3065C7.2518 12.6578 8.30895 11.9344 9.58078 11.6339C11.1684 11.2586 12.9414 11.4376 14.5776 11.4376C14.5776 11.9178 14.3343 13.3399 15.0733 13.5653C15.7449 13.77 16.095 13.2347 17.1894 12.2843L18.7085 10.9651C19.6402 10.156 20.1061 9.7514 20.1061 9.25728C20.1061 8.76318 19.6402 8.35861 18.7085 7.54947Z"
                  stroke="white"
                  strokeWidth="1.3043"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.1651 3.17432C6.80852 3.18035 5.05084 3.26259 3.92755 4.3836C2.71533 5.59337 2.71533 7.54045 2.71533 11.4346C2.71533 15.3288 2.71533 17.2759 3.92755 18.4856C5.13977 19.6954 7.0908 19.6954 10.9928 19.6954C14.8949 19.6954 16.846 19.6954 18.0582 18.4856C18.9022 17.6433 19.1585 16.4436 19.2364 14.4782"
                  stroke="white"
                  strokeWidth="1.3043"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href={music.track.audio_file}
              className="px-2 py-2 rounded text-primaryText border border-primaryText cursor-pointer"
              download
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 22"
                fill="none"
                className="w-[12px] h-[12px] md:w-[22px] md:h-[22px]"
              >
                <path
                  d="M2.88794 12.7393L3.09127 13.3154C3.88268 15.5577 4.27839 16.6788 5.18126 17.3177C6.08413 17.9564 7.27307 17.9564 9.65098 17.9564H11.7765C14.1544 17.9564 15.3433 17.9564 16.2462 17.3177C17.149 16.6788 17.5448 15.5577 18.3362 13.3154L18.5395 12.7393"
                  stroke="white"
                  strokeWidth="1.3043"
                  strokeLinecap="round"
                />
                <path
                  d="M10.7136 12.7391V4.04382M10.7136 12.7391C10.1048 12.7391 8.9672 11.005 8.53979 10.5653M10.7136 12.7391C11.3225 12.7391 12.4601 11.005 12.8875 10.5653"
                  stroke="white"
                  strokeWidth="1.3043"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}

      {/* <BottomPlayer mediaElement={mediaElement}></BottomPlayer> */}
    </div>
  );
};

export default MusicFavouriteWrapper;
