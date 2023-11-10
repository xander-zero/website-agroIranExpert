import React from "react";
import WrapperText from "../wrapper-text/wrapper-text";
import { ListItems, OptionsExperts } from "@/types/expert.interface";

type ListItemProps = {
  title: string;
  keys: OptionsExperts[];
  items: ListItems[];
};

const ListItem: React.FC<ListItemProps> = ({
  title,
  keys,
  items,
}: ListItemProps) => {
  return (
    <WrapperText title={title}>
      <div>
        {keys.map((key) => {
          const result = items.some((item) => {
            return item.categoryEN === key.key;
          });
          return (
            <div key={key.key}>
              {result && (
                <p className="font-semibold text-[14px]">
                  {key.label}:{" "}
                  {items
                    ?.filter((item) => item?.categoryEN === key.key)
                    .map((itm, index) => {
                      return (
                        <span
                          className="text-[13px] text-[#4D4D4D]"
                          key={itm.id}
                        >
                          {items?.filter((item) => item?.categoryEN === key.key)
                            .length -
                            1 ===
                          index
                            ? itm.name
                            : itm.name + ","}
                        </span>
                      );
                    })}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </WrapperText>
  );
};

export default ListItem;
