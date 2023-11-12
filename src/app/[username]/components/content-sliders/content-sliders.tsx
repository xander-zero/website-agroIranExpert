import { ExpertContent } from "@/types/expert.interface";
import CardSlider from "../card-slider/card-slider";
import WrapperText from "../wrapper-text/wrapper-text";

type ContentSliderProps = {
  expertId: string;
};

async function getExpertContent(expertId: string): Promise<ExpertContent[]> {
  const res = await fetch(
    `https://stgapi.agroiranexpert.com/experts/${expertId}/contents`
  );
  const response = await res.json();
  const result = await response?.result?.data?.contents;
  return result;
}

const ContentSlider: React.FC<ContentSliderProps> = async ({
  expertId,
}: ContentSliderProps) => {
  const expertContent = await getExpertContent(expertId);

  return (
    <div>
      <WrapperText title="مقالات کارشناس">
        <CardSlider<ExpertContent[]>
          items={expertContent.filter((content) => content.type === "ARTICLE")}
        />
      </WrapperText>
      <WrapperText title="ویدیوهای کارشناس">
        <CardSlider<ExpertContent[]>
          items={expertContent.filter((content) => content.type === "VIDEO")}
        />
      </WrapperText>
    </div>
  );
};

export default ContentSlider;
