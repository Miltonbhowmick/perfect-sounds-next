"use client";

import ClientWrapper from "@/components/music/client-wrapper";

import { fetchCategories, fetchSubCategories } from "@/services/common.service";
import { fetchTracks } from "@/services/music.service";
import Link from "next/link";
import { useSelector } from "react-redux";
import { getAuthToken } from "@/store/modules/user";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../loading";
import { buildParams } from "@/utils/utils";
import ButtonGradiend from "@/components/button/gradient";
import ButtonGradiendOutlined from "@/components/button/gradientOutlined";
import MusicWrapper from "@/components/music/wrapper";
import toast from "react-hot-toast";

const Discover = () => {
  var [loading, setLoading] = useState(false);
  const router = useRouter();
  const authToken = useSelector(getAuthToken);
  const searchParams = useSearchParams();
  var queryParams = Object.fromEntries(searchParams.entries());
  var pageQuery = parseInt(queryParams.page) || null;
  var categoryQuery = queryParams.category || null;
  var subCategoryQuery = queryParams.subcategory || null;
  var titleQuery = queryParams.title || null;
  var [categories, setCategories] = useState(null);
  var [subCategories, setSubCategories] = useState(null);
  var [musicTrackList, setMusicTrackList] = useState(null);
  var [musicTrackLimit, setMusicTrackLimit] = useState(1);
  var [musicTrackOffset, setMusicTrackOffset] = useState(0);
  var [currentMusicTrackPage, setCurrentMusicTrackPage] = useState(1);
  var [totalMusicTrackPage, setTotalMusicTrackPage] = useState(1);
  var [totalTrack, setTotalTrack] = useState(0);
  const [searchTitle, setSearchTitle] = useState(titleQuery);

  const handleFetchCategoriesApi = () => {
    fetchCategories().then((data) => {
      setCategories(data.results);
    });
  };
  const handleFetchSubcategoriesApi = () => {
    fetchSubCategories().then((data) => {
      setSubCategories(data.results);
    });
  };

  const handleSelectSubcategory = (e) => {
    queryParams["subcategory"] = e?.target?.value;
    router.push(`/discover${buildParams(queryParams)}`, { scroll: false });
  };
  const handleSelectCategory = (e) => {
    queryParams["category"] = e?.target?.value;
    router.push(`/discover${buildParams(queryParams)}`, { scroll: false });
  };

  const handleFetchTracksApi = () => {
    var params = {
      limit: musicTrackLimit,
    };
    console.log("page query!", pageQuery);
    if (pageQuery) {
      params["offset"] = musicTrackLimit * (pageQuery - 1);
      setCurrentMusicTrackPage(pageQuery);
    } else {
      params["offset"] = musicTrackOffset;
    }

    console.log(params);
    if (categoryQuery) {
      params["category__slug"] = categoryQuery;
    }
    if (subCategoryQuery) {
      params["subcategory__slug"] = subCategoryQuery;
    }
    if (titleQuery) {
      params["title"] = titleQuery;
    }

    setLoading(true);
    fetchTracks(params, authToken)
      .then((data) => {
        setMusicTrackList(data.results);
        setTotalTrack(data.count);
        setTotalMusicTrackPage(Math.ceil(data.count / musicTrackLimit));
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
      });
  };

  const handlePrevPage = () => {
    if (pageQuery - 1 < 1) {
      return;
    }
    // handleFetchTracksApi(currentMusicTrackPage - 1);
    queryParams["page"] = currentMusicTrackPage - 1;
    router.push(`/discover${buildParams(queryParams)}`);
  };

  const handleNextPage = () => {
    if (pageQuery + 1 > totalMusicTrackPage) {
      toast.error("No more music page!");
      return;
    }
    // handleFetchTracksApi(currentMusicTrackPage + 1);
    queryParams["page"] = currentMusicTrackPage + 1;
    router.push(`/discover${buildParams(queryParams)}`);
  };

  const handleSearchTitle = (event) => {
    if (event.key === "Enter") {
      console.log(searchTitle);
      if (searchTitle != null) {
        queryParams["title"] = searchTitle;
      }
      router.push(`/discover${buildParams(queryParams)}`);
    }
  };

  useEffect(() => {
    console.log("fetch all");
    const fetchAsyncData = async () => {
      setLoading(true);
      await Promise.all([
        handleFetchCategoriesApi(),
        handleFetchTracksApi(),
        handleFetchSubcategoriesApi(),
      ])
        .then((data) => {
          setLoading(false);
        })
        .catch((e) => {
          setLoading(false);
        });
    };
    fetchAsyncData();
  }, [searchParams]);

  useEffect(() => {
    setSearchTitle(titleQuery);
  }, [titleQuery]);

  if (loading === true) {
    return <Loading />;
  }

  return (
    <main className="min-h-screen mt-24">
      <div className="container py-10">
        <div className="p-4 rounded-lg bg-secondaryBg flex justify-between">
          <input
            onChange={(e) => setSearchTitle(e.target.value)}
            onKeyDown={handleSearchTitle}
            value={searchTitle ? searchTitle : ""}
            className="basis-[90%] grow shrink text-secondaryText bg-transparent outline-0"
            placeholder="Search for Sound effect"
          />
          <kbd className="max-w text-paragraph text-primaryText bg-primaryBgRGB px-3 py-2 rounded-lg">
            Press Enter
          </kbd>
        </div>
        <div className="mt-10 flex gap-5 justify-between lg:hidden">
          <div className="w-1/2">
            <h5 className="text-primaryText uppercase font-medium">
              categories
            </h5>
            <select
              onChange={handleSelectCategory}
              className="appearance-none w-full px-4 py-3 rounded-full text-paragraph md:text-paragraph-md text-primaryText border border-primaryText bg-transparent outline-transparent"
            >
              {categories &&
                categories?.map((element, index) => {
                  return (
                    <option
                      className="text-primaryBg"
                      key={"cat_" + index}
                      value={element?.slug}
                    >
                      {element?.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="w-1/2">
            <h5 className="text-primaryText uppercase font-medium">
              sub categories
            </h5>
            <select
              onChange={handleSelectSubcategory}
              className="appearance-none w-full px-4 py-3 rounded-full text-paragraph md:text-paragraph-md text-primaryText border border-primaryText bg-transparent outline-transparent"
            >
              {subCategories &&
                subCategories.map((element, index) => {
                  return (
                    <option
                      className="text-primaryBg"
                      key={"subcat_" + index}
                      value={element?.slug}
                    >
                      {element.name}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        <div className="mt-10 hidden lg:flex flex-col gap-3">
          <h5 className="text-primaryText uppercase font-medium">
            sub categories
          </h5>
          <ul className="flex gap-4">
            {subCategories &&
              subCategories.map((element, index) => {
                return (
                  <li
                    className={`${
                      element.slug === subCategoryQuery ? "bg-gradientLeft" : ""
                    } text-primaryText font-medium px-5 py-2 border border-tertiaryBg w-max rounded-lg`}
                    key={"sub_cat" + index}
                  >
                    <Link
                      href={{
                        pathname: "/discover",
                        query: {
                          ...queryParams,
                          subcategory: element?.slug,
                        },
                      }}
                      scroll={false}
                    >
                      {element.name}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <div className="mt-10 flex flex-col gap-3">
            <h5 className="text-primaryText uppercase font-medium">
              Blow sound effects
            </h5>
            <p className="text-primaryText">Showing results - {totalTrack}</p>
          </div>
          <div className="flex gap-2">
            <ButtonGradiendOutlined
              onClick={() => handlePrevPage()}
              className="w-[60px] h-[40px] lg:h-[55px] rounded-2xl"
            >
              <h6 className="bg-gradient-to-r from-gradientLeft to-gradientRight bg-clip-text text-transparent font-bold">
                {"<"}
              </h6>
            </ButtonGradiendOutlined>
            <ButtonGradiend
              className="px-5 w-[60px] h-[35px] md:h-[45px] lg:h-[55px] rounded-2xl"
              gradient
            >
              <h6 className="text-primaryText font-medium">
                {currentMusicTrackPage < 10
                  ? "0" + currentMusicTrackPage
                  : currentMusicTrackPage}
              </h6>
            </ButtonGradiend>
            <div className="flex items-center px-6 text-small text-primaryText">
              of {totalMusicTrackPage}
            </div>
            <ButtonGradiend
              onClick={() => handleNextPage()}
              className="px-5 w-[60px] h-[35px] md:h-[45px] lg:h-[55px] rounded-2xl"
              gradient
            >
              <h6 className="text-primaryText font-medium">{">"}</h6>
            </ButtonGradiend>
          </div>
        </div>
        <div className="mt-10 flex flex-col lg:flex-row gap-3">
          <div className="hidden lg:block bg-secondaryBg p-5 rounded-xl basis-[300px] shrink-0">
            <ul className="flex flex-col gap-4">
              <li className="px-[30px] py-[20px] text-primaryText font-bold rounded-xl bg-tertiaryBg">
                <h6>Categories</h6>
              </li>
              {categories &&
                categories.map((element, index) => {
                  return (
                    <li
                      className={`${
                        element.slug === categoryQuery
                          ? "bg-gradientLeft"
                          : "border-tertiaryBg"
                      } px-[30px] py-[20px] text-primaryText font-medium rounded-xl `}
                      key={"cat" + index}
                    >
                      <Link
                        href={{
                          pathname: "/discover",
                          query: {
                            ...queryParams,
                            category: element?.slug,
                          },
                        }}
                        scroll={false}
                      >
                        <h6>{element.name}</h6>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="bg-secondaryBg p-5 rounded-xl basis-auto grow shrink">
            {musicTrackList && (
              <MusicWrapper
                musicTrackList={musicTrackList}
                key={JSON.stringify(musicTrackList)}
              ></MusicWrapper>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Discover;
