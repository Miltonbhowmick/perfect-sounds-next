import ClientWrapper from "@/components/music/client-wrapper";

import { fetchCategories, fetchSubCategories } from "@/services/common.service";
import { Suspense } from "react";
import Link from "next/link";

const Discover = async (searchParams) => {
  // const subCategoryList = [
  //   {
  //     name: "Blow",
  //   },
  //   {
  //     name: "Gitch",
  //   },
  // ];

  // const categoryList = [
  //   {
  //     name: "Transition",
  //     active: false,
  //   },
  //   {
  //     name: "Nature",
  //     active: true,
  //   },
  //   {
  //     name: "Technology",
  //     active: false,
  //   },
  //   {
  //     name: "Funny",
  //     active: false,
  //   },
  // ];

  // const queryParams = useSearchParams();
  // const category = queryParams.get("category");
  // const subcategory = queryParams.get("subcategory");

  const queryParams = searchParams.searchParams;
  var categoryQuery = queryParams.category;
  var subCategoryQuery = queryParams.subcategory;

  var categories = null;
  var subCategories = null;
  await fetchCategories().then((data) => {
    categories = data.results;
  });
  await fetchSubCategories().then((data) => {
    subCategories = data.results;
  });

  return (
    <main>
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
                  className="text-primaryText font-medium px-5 py-2 border border-tertiaryBg w-max rounded-lg"
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
                        element.active ? "bg-gradientLeft" : "border-tertiaryBg"
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
            <ClientWrapper></ClientWrapper>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Discover;
