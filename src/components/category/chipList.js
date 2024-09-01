import Chip from "../chip";
import Link from "next/link";

const CategoryChipList = ({ itemList }) => {
  return itemList?.map((obj, index) => {
    return (
      <Link
        href={{
          pathname: `/discover`,
          query: {
            category: obj?.slug,
          },
        }}
        scroll={false}
      >
        <Chip
          variant="outlined"
          color="bg-secondaryBg"
          className="px-[16px] md:px-[18px] lg:px-[20px] h-[40px] xl:h-[60px] text-primaryText"
          key={"cat_chip_" + index}
        >
          <h6>{obj?.name}</h6>
        </Chip>
      </Link>
    );
  });
};

export default CategoryChipList;
