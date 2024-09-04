import ClientWrapper from "@/components/music/client-wrapper";

import { fetchCategories, fetchSubCategories } from "@/services/common.service";
import { fetchTracks } from "@/services/music.service";
import { Suspense } from "react";
import Link from "next/link";

const Discover = async (searchParams) => {
  const queryParams = searchParams.searchParams;
  var categoryQuery = queryParams.category || null;
  var subCategoryQuery = queryParams.subcategory || null;
  var categories = null;
  var subCategories = null;
  var musicTrackList = null;

  await fetchCategories().then((data) => {
    categories = data.results;
  });
  await fetchSubCategories().then((data) => {
    subCategories = data.results;
  });

  var params = {
    limit: 10,
    offset: 0,
  };
  if (categoryQuery) {
    params["category__slug"] = categoryQuery;
  }
  if (subCategoryQuery) {
    params["subcategory__slug"] = subCategoryQuery;
  }
  await fetchTracks(params).then((data) => {
    musicTrackList = data.results;
  });

  return (
    <main className="min-h-screen mt-24">
      <div className="container py-10">
        <div className="flex gap-5 justify-between lg:hidden">
          <div className="w-1/2">
            <h5 className="text-primaryText uppercase font-medium">
              categories
            </h5>
            <select className="appearance-none w-full px-4 py-3 rounded-full text-paragraph md:text-paragraph-md text-primaryText border border-primaryText bg-transparent outline-transparent">
              <Suspense>
                {categories?.map((element, index) => {
                  return (
                    <option className="text-primaryBg" key={"cat_" + index}>
                      {element?.name}
                    </option>
                  );
                })}
              </Suspense>
            </select>
          </div>
          <div className="w-1/2">
            <h5 className="text-primaryText uppercase font-medium">
              sub categories
            </h5>
            <select className="appearance-none w-full px-4 py-3 rounded-full text-paragraph md:text-paragraph-md text-primaryText border border-primaryText bg-transparent outline-transparent">
              {subCategories.map((element, index) => {
                return (
                  <option className="text-primaryBg" key={"subcat_" + index}>
                    {element.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="hidden lg:flex flex-col gap-3">
          <h5 className="text-primaryText uppercase font-medium">
            sub categories
          </h5>
          <ul className="flex gap-4">
            {subCategories.map((element, index) => {
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
        <div className="mt-10 flex flex-col gap-3">
          <h5 className="text-primaryText uppercase font-medium">
            Blow sound effects
          </h5>
          <p className="text-primaryText">Showing results - 1827</p>
        </div>
        <div className="mt-10 flex flex-col lg:flex-row gap-3">
          <div className="hidden lg:block bg-secondaryBg p-5 rounded-xl basis-[300px] shrink-0">
            <ul className="flex flex-col gap-4">
              <li className="px-[30px] py-[20px] text-primaryText font-bold rounded-xl bg-tertiaryBg">
                <h6>Categories</h6>
              </li>
              <Suspense>
                {categories.map((element, index) => {
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
              </Suspense>
            </ul>
          </div>
          <div className="bg-secondaryBg p-5 rounded-xl basis-auto grow shrink">
            <ClientWrapper musicTrackList={musicTrackList}></ClientWrapper>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Discover;
