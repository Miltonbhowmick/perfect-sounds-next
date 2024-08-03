import ClientWrapper from "@/components/music/client-wrapper";

const Discover = () => {
  const subCategoryList = [
    {
      name: "Blow",
    },
    {
      name: "Gitch",
    },
  ];

  const categoryList = [
    {
      name: "Transition",
      active: false,
    },
    {
      name: "Nature",
      active: true,
    },
    {
      name: "Technology",
      active: false,
    },
    {
      name: "Funny",
      active: false,
    },
  ];

  return (
    <main>
      <div className="container py-10">
        <div className="flex gap-5 justify-between lg:hidden">
          <div className="w-1/2">
            <h5 className="text-primaryText uppercase font-medium">
              categories
            </h5>
            <select className="appearance-none w-full px-4 py-3 rounded-full text-paragraph md:text-paragraph-md text-primaryText border border-primaryText bg-transparent outline-transparent">
              {categoryList.map((element, index) => {
                return (
                  <option className="text-primaryBg" key={"cat_" + index}>
                    {element.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="w-1/2">
            <h5 className="text-primaryText uppercase font-medium">
              sub categories
            </h5>
            <select className="appearance-none w-full px-4 py-3 rounded-full text-paragraph md:text-paragraph-md text-primaryText border border-primaryText bg-transparent outline-transparent">
              {subCategoryList.map((element, index) => {
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
            {subCategoryList.map((element, index) => {
              return (
                <li
                  className="text-primaryText font-medium px-5 py-2 border border-tertiaryBg w-max rounded-lg"
                  key={"sub_cat" + index}
                >
                  {element.name}
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
              {categoryList.map((element, index) => {
                return (
                  <li
                    className={`${
                      element.active ? "bg-gradientLeft" : "border-tertiaryBg"
                    } px-[30px] py-[20px] text-primaryText font-medium rounded-xl `}
                    key={"cat" + index}
                  >
                    <h6>{element.name}</h6>
                  </li>
                );
              })}
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
