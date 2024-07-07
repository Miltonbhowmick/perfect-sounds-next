"use Client";

import ButtonMediaPlay from "@/components/button/mediaPlay";

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import { useState } from "react";

const MusicWrapper = () => {
  const [playing, setPlaying] = useState();
  return (
    <div className="flex flex-col">
      <div className="flex gap-3 justify-between items-center">
        <div className="flex gap-2 justify-between items-center">
          <ButtonMediaPlay
            className="w-[80px] h-[80px] rounded-full cursor-pointer"
            playing={playing}
            gradient
            onClick={() => {
              setPlaying(!playing);
            }}
          ></ButtonMediaPlay>
          <div>{/* Wave */}</div>
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
