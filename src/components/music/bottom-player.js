"use client";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentVolume,
  setIsMuted,
  setPlaying,
  setCurrentMusicFavourite,
  getCurrentMusic,
  getPlaying,
  getCurrentVolume,
  getIsMuted,
  getIsFavourite,
} from "@/store/modules/music";
import ButtonMediaPlay from "@/components/button/mediaPlay";
import WaveSurfer from "wavesurfer.js";
import { useMediaElement } from "@/contexts/MediaElementContext";

import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  addSingleFavourite,
  deleteSingleFavourite,
} from "@/services/common.service";
import { getAuthToken } from "@/store/modules/user";
import toast from "react-hot-toast";

const BottomPlayer = () => {
  const authToken = useSelector(getAuthToken);
  const dispatch = useDispatch();
  var currentMusic = useSelector(getCurrentMusic);
  var playing = useSelector(getPlaying);
  var currentVolume = useSelector(getCurrentVolume);
  var isMuted = useSelector(getIsMuted);
  var isFavourite = useSelector(getIsFavourite);

  const { mediaElement } = useMediaElement();

  const bottomWaveformRef = useRef(null);
  const wavesurferInstance = useRef(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [playingSliderValue, setPlayingSliderValue] = useState(0);
  const [isSeekingPlayingSlider, setIsSeekingPlayingSlider] = useState(false);

  useEffect(() => {
    if (bottomWaveformRef.current && currentMusic) {
      setCurrentTime(0);
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
        media: mediaElement,
        dragToSeek: true,
      });

      wavesurferInstance.current.on("ready", () => {
        setDuration(wavesurferInstance.current.getDuration());
      });

      wavesurferInstance.current.on("audioprocess", () => {
        const currentTime = wavesurferInstance.current.getCurrentTime();
        if (currentTime >= 0) {
          setCurrentTime(currentTime);
        }
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
  }, [currentMusic, dispatch]);

  const handlePlayPause = () => {
    if (wavesurferInstance.current) {
      if (!wavesurferInstance.current.isPlaying()) {
        wavesurferInstance.current.play();
      } else {
        wavesurferInstance.current.pause();
      }
    }
  };

  const handleCurrentVolume = (e) => {
    const volumeValue = parseFloat(e.target.value);
    wavesurferInstance.current.setVolume(volumeValue);
    dispatch(setCurrentVolume(volumeValue));
  };

  const toggleMute = () => {
    if (!isMuted) {
      wavesurferInstance.current.setVolume(0);
    } else {
      wavesurferInstance.current.setVolume(currentVolume);
    }
    dispatch(setIsMuted(!isMuted));
  };

  // Handle user changing the slider position
  const handleSliderChange = (e) => {
    setPlayingSliderValue(e.target.value); // Update slider position as user moves it
  };
  // When user starts seeking
  const handleSeekStart = () => {
    setIsSeekingPlayingSlider(true); // Set seeking state to true
  };
  // When user stops seeking
  const handleSeekEnd = (e) => {
    setIsSeekingPlayingSlider(false);
    handleCurrentPlayingTime(e); // Call onSeek to update the currentTime in the audio
  };

  useEffect(() => {
    if (!isSeekingPlayingSlider) {
      setPlayingSliderValue(currentTime);
    }
  }, [currentTime, isSeekingPlayingSlider]);

  const handleCurrentPlayingTime = (e) => {
    setCurrentTime(e.target.value);
    wavesurferInstance.current.seekTo(e.target.value / duration);
  };

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const getShortTitle = (title) => {
    if (title.length > 30) {
      return title.substring(0, 30) + "..";
    }
    return title;
  };

  const handleAddTrackFavorite = (track) => {
    let payload = {
      track: track.id,
    };
    addSingleFavourite(payload, authToken)
      .then((data) => {
        dispatch(setCurrentMusicFavourite(data.id));
        toast.success("Successfully added track to favorite!");
      })
      .catch((e) => {
        toast.error("Adding track to favorite failed!");
      });
  };

  const handleRemoveSingleFavouriteTrack = (favouriteId) => {
    let payload = {
      id: favouriteId,
    };
    deleteSingleFavourite(payload, authToken)
      .then((data) => {
        dispatch(setCurrentMusicFavourite(null));
        toast.success("Favourite track deletion done!");
      })
      .catch((e) => {
        toast.error("Favourite track deletion failed!");
      });
  };

  return (
    <div
      className="fixed z-[45] bottom-0 left-0 right-0 bg-[#000000] bg-opacity-70 overflow-hidden"
      style={{
        boxShadow:
          "52.433px -52.433px 52.433px 0px rgba(0, 0, 0, 0.20) inset, -52.433px 52.433px 52.433px 0px rgba(255, 255, 255, 0.20) inset",
        backdropFilter: "blur(5.243333339691162px)",
      }}
    >
      {currentMusic && (
        <div className="flex flex-col lg:flex-row gap-3 justify-between items-center py-2 lg:py-4 px-6">
          <div className="flex lg:hidden w-full gap-5">
            <input
              type="range"
              min="0"
              max={duration}
              step="1"
              value={playingSliderValue}
              onChange={handleSliderChange}
              onMouseDown={handleSeekStart}
              onMouseUp={handleSeekEnd}
              onTouchStart={handleSeekStart}
              onTouchEnd={handleSeekEnd}
              className="accent-gradientRight w-full bg-[#F47B23]"
            />
            <p className="text-primaryText">
              {duration
                ? formatDuration(duration - (currentTime || 0))
                : "00:00"}
            </p>
          </div>

          <div className="w-full basis-auto lg:basis-[65%] shrink flex gap-2 md:gap-8 justify-start items-center">
            <div className="w-full flex gap-1 justify-between items-center">
              <div className="flex basis-[40%] shrink lg:hidden gap-2">
                <div>
                  {isMuted ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 28 24"
                      fill="none"
                      className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]"
                      onClick={toggleMute}
                    >
                      <path
                        d="M14.4102 0.890625C14.2812 0.960938 12.5586 2.22656 10.5898 3.69141L7.00391 6.375H4.96484C2.67969 6.375 2.31641 6.46875 1.61328 7.20703C0.898438 7.96875 0.875 8.10938 0.875 12.0234C0.875 15.9844 0.898438 16.125 1.70703 16.8867C2.41016 17.543 2.75 17.625 4.98828 17.625H7.00391L10.5898 20.3086C12.5586 21.7852 14.293 23.0508 14.4336 23.1211C14.5742 23.1914 15.0195 23.25 15.418 23.25C16.3438 23.25 17.0234 22.8867 17.457 22.1484L17.75 21.6445V12V2.35547L17.457 1.85156C17.0234 1.11328 16.3438 0.75 15.3945 0.75C14.9844 0.75 14.5391 0.820312 14.4102 0.890625Z"
                        fill="white"
                      />
                      <path
                        d="M19.9414 8.39056C19.6367 8.62494 19.4961 9.14056 19.6367 9.50384C19.6953 9.69134 20.2344 10.3242 20.832 10.9101L21.9101 11.9999L20.832 13.0781C20.2344 13.6757 19.6953 14.3085 19.6367 14.4843C19.3555 15.246 20.1172 16.0312 20.8789 15.7382C21.0547 15.6796 21.6992 15.1406 22.2969 14.5429L23.375 13.4648L24.4648 14.5429C25.0508 15.1406 25.6953 15.6796 25.8711 15.7382C26.6328 16.0312 27.3945 15.246 27.1133 14.4843C27.0547 14.3085 26.5156 13.6757 25.918 13.0781L24.8398 11.9999L25.918 10.9101C27.1133 9.71478 27.3008 9.38666 27.1133 8.83587C26.9609 8.40228 26.6914 8.24994 26.1172 8.24994C25.7305 8.24994 25.5664 8.36712 24.5351 9.38666L23.375 10.5234L22.2148 9.38666C21.1484 8.33197 21.0312 8.24994 20.5976 8.24994C20.3515 8.24994 20.0469 8.32025 19.9414 8.39056Z"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 22 24"
                      fill="none"
                      className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]"
                      onClick={toggleMute}
                    >
                      <path
                        d="M11.7032 0.937378C11.4688 1.04285 10.2383 2.15613 8.77349 3.62097C5.87895 6.50378 5.60942 6.67957 3.87505 6.84363C2.36333 6.98425 1.70708 7.33582 1.19145 8.2616C1.00395 8.61316 0.980517 9.0116 0.94536 11.7303C0.921923 13.7343 0.957079 14.9647 1.03911 15.2811C1.20317 15.8788 1.97661 16.746 2.48052 16.91C2.69145 16.9686 3.28911 17.0741 3.82817 17.1444C5.53911 17.3671 5.71489 17.4843 8.5977 20.3319C10.0157 21.7264 11.3399 22.9569 11.5508 23.0624C12.0665 23.3202 13.0157 23.2968 13.5547 23.0272C14.4571 22.5702 14.6797 22.0897 14.9727 19.9569C15.7813 14.1796 15.8633 9.78504 15.2657 4.91003C14.9141 2.06238 14.6094 1.27722 13.7422 0.91394C13.2383 0.703003 12.2188 0.714722 11.7032 0.937378Z"
                        fill="white"
                      />
                      <path
                        d="M18.0664 4.67557C17.6446 4.96854 17.6094 5.57792 17.9492 6.46854C18.6758 8.3201 18.9102 10.0779 18.8164 12.7498C18.7344 14.742 18.5821 15.6912 18.0781 17.074C17.9141 17.5428 17.75 18.1404 17.7149 18.4099C17.668 18.8435 17.7031 18.949 17.9727 19.2068C18.4414 19.6404 19.086 19.617 19.4727 19.1482C20.4336 18.0115 21.2071 14.0154 21.0313 11.0974C20.8672 8.35526 20.0586 5.28495 19.3438 4.72245C18.9922 4.45292 18.418 4.42948 18.0664 4.67557Z"
                        fill="white"
                      />
                    </svg>
                  )}
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  value={currentVolume}
                  step=".005"
                  className="w-full accent-gradientRight outline-none"
                  onChange={(e) => handleCurrentVolume(e)}
                />
              </div>
              <div className="flex basis-[30%] gap-1 justify-between items-center">
                <SkipPreviousIcon className="w-[24px] h-[24px] md:w-[60px] md:h-[60px] text-primaryText" />
                <ButtonMediaPlay
                  className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full cursor-pointer"
                  iconColor="primaryText"
                  playing={playing}
                  gradient
                  onClick={handlePlayPause}
                />
                <SkipNextIcon className="w-[24px] h-[24px] md:w-[60px] md:h-[60px] text-primaryText" />
              </div>
              <button className="w-max px-2 md:px-4 h-[30px] md:h-[45px] flex gap-1 items-center rounded-full border border-primaryText">
                <PlayArrowIcon className="text-primaryText text-small-xs md:text-small" />
                <p className="text-primaryText text-small">Play All</p>
              </button>
              <div className="hidden lg:flex gap-2">
                <div>
                  {isMuted ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 28 24"
                      fill="none"
                      className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]"
                      onClick={toggleMute}
                    >
                      <path
                        d="M14.4102 0.890625C14.2812 0.960938 12.5586 2.22656 10.5898 3.69141L7.00391 6.375H4.96484C2.67969 6.375 2.31641 6.46875 1.61328 7.20703C0.898438 7.96875 0.875 8.10938 0.875 12.0234C0.875 15.9844 0.898438 16.125 1.70703 16.8867C2.41016 17.543 2.75 17.625 4.98828 17.625H7.00391L10.5898 20.3086C12.5586 21.7852 14.293 23.0508 14.4336 23.1211C14.5742 23.1914 15.0195 23.25 15.418 23.25C16.3438 23.25 17.0234 22.8867 17.457 22.1484L17.75 21.6445V12V2.35547L17.457 1.85156C17.0234 1.11328 16.3438 0.75 15.3945 0.75C14.9844 0.75 14.5391 0.820312 14.4102 0.890625Z"
                        fill="white"
                      />
                      <path
                        d="M19.9414 8.39056C19.6367 8.62494 19.4961 9.14056 19.6367 9.50384C19.6953 9.69134 20.2344 10.3242 20.832 10.9101L21.9101 11.9999L20.832 13.0781C20.2344 13.6757 19.6953 14.3085 19.6367 14.4843C19.3555 15.246 20.1172 16.0312 20.8789 15.7382C21.0547 15.6796 21.6992 15.1406 22.2969 14.5429L23.375 13.4648L24.4648 14.5429C25.0508 15.1406 25.6953 15.6796 25.8711 15.7382C26.6328 16.0312 27.3945 15.246 27.1133 14.4843C27.0547 14.3085 26.5156 13.6757 25.918 13.0781L24.8398 11.9999L25.918 10.9101C27.1133 9.71478 27.3008 9.38666 27.1133 8.83587C26.9609 8.40228 26.6914 8.24994 26.1172 8.24994C25.7305 8.24994 25.5664 8.36712 24.5351 9.38666L23.375 10.5234L22.2148 9.38666C21.1484 8.33197 21.0312 8.24994 20.5976 8.24994C20.3515 8.24994 20.0469 8.32025 19.9414 8.39056Z"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 22 24"
                      fill="none"
                      className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]"
                      onClick={toggleMute}
                    >
                      <path
                        d="M11.7032 0.937378C11.4688 1.04285 10.2383 2.15613 8.77349 3.62097C5.87895 6.50378 5.60942 6.67957 3.87505 6.84363C2.36333 6.98425 1.70708 7.33582 1.19145 8.2616C1.00395 8.61316 0.980517 9.0116 0.94536 11.7303C0.921923 13.7343 0.957079 14.9647 1.03911 15.2811C1.20317 15.8788 1.97661 16.746 2.48052 16.91C2.69145 16.9686 3.28911 17.0741 3.82817 17.1444C5.53911 17.3671 5.71489 17.4843 8.5977 20.3319C10.0157 21.7264 11.3399 22.9569 11.5508 23.0624C12.0665 23.3202 13.0157 23.2968 13.5547 23.0272C14.4571 22.5702 14.6797 22.0897 14.9727 19.9569C15.7813 14.1796 15.8633 9.78504 15.2657 4.91003C14.9141 2.06238 14.6094 1.27722 13.7422 0.91394C13.2383 0.703003 12.2188 0.714722 11.7032 0.937378Z"
                        fill="white"
                      />
                      <path
                        d="M18.0664 4.67557C17.6446 4.96854 17.6094 5.57792 17.9492 6.46854C18.6758 8.3201 18.9102 10.0779 18.8164 12.7498C18.7344 14.742 18.5821 15.6912 18.0781 17.074C17.9141 17.5428 17.75 18.1404 17.7149 18.4099C17.668 18.8435 17.7031 18.949 17.9727 19.2068C18.4414 19.6404 19.086 19.617 19.4727 19.1482C20.4336 18.0115 21.2071 14.0154 21.0313 11.0974C20.8672 8.35526 20.0586 5.28495 19.3438 4.72245C18.9922 4.45292 18.418 4.42948 18.0664 4.67557Z"
                        fill="white"
                      />
                    </svg>
                  )}
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  value={currentVolume}
                  step=".005"
                  className="accent-gradientRight outline-none"
                  onChange={(e) => handleCurrentVolume(e)}
                />
              </div>
            </div>
            {/* <div className="hidden">
              <div ref={bottomWaveformRef}></div>
            </div>
            <div className="hidden lg:flex w-full gap-5">
              <input
                type="range"
                min="0"
                max={duration}
                step="1"
                onChange={(e) => {
                  handleCurrentPlayingTime(e);
                }}
                value={currentTime}
                className="accent-gradientRight w-full bg-[#F47B23]"
              />
            </div> */}

            <div className="hidden lg:block w-full">
              <div ref={bottomWaveformRef}></div>
            </div>
          </div>
          <div className="border-t border-[#4F4F4F] lg:border-none w-full basis-auto lg:basis-[33%] pt-2 lg:py-auto flex gap-3 justify-between items-center">
            <div className="flex flex-col ga-1">
              <p className="text-[10px] sm:text-[16px] uppercase text-primaryText">
                Now playing:
              </p>
              <p className="text-primaryText">
                {getShortTitle(currentMusic?.title)}
              </p>
            </div>
            <div className="flex gap-3 justify-between items-center">
              <div className="hidden lg:block text-primaryText flex gap-2 items-center">
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
                  {duration
                    ? formatDuration(duration - (currentTime || 0))
                    : "00:00"}
                </p>
              </div>
              {isFavourite === null ? (
                <div
                  onClick={() => handleAddTrackFavorite(currentMusic)}
                  className="px-2 py-2 rounded-lg bg-[#FFFFFF] bg-opacity-10 text-primaryText cursor-pointer"
                >
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
              ) : (
                <div
                  onClick={() => handleRemoveSingleFavouriteTrack(isFavourite)}
                  className="px-2 py-2 rounded-lg bg-[#FFFFFF] bg-opacity-10 text-primaryText cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M11.0332 14.4782L12.3375 12.3044L10.5984 10.5653L13.207 8.3915L11.0332 4.91338C11.0332 4.91338 11.4313 4.47945 11.9326 4.10299C13.1552 3.18485 15.1903 2.60845 17.5222 4.03876C20.5823 5.9159 21.2748 12.1087 14.2161 17.3332C12.8717 18.3283 12.1994 18.8259 11.0332 18.8259C9.86699 18.8259 9.19477 18.3283 7.85031 17.3332C0.79162 12.1087 1.48407 5.9159 4.54427 4.03876C6.19121 3.02853 7.69018 3.01938 8.85937 3.42464"
                      stroke="white"
                      strokeWidth="1.3043"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
              <a className="px-2 py-2 rounded-lg bg-[#FFFFFF] bg-opacity-10 text-primaryText cursor-pointer">
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
                href={`/api/download-audio?url=${encodeURIComponent(
                  currentMusic.audio_file
                )}`}
                className="px-2 py-2 rounded-lg bg-[#FFFFFF] bg-opacity-10 text-primaryText cursor-pointer"
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
        </div>
      )}
    </div>
  );
};

export default BottomPlayer;
