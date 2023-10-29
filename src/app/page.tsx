import { Experts } from "@/types/expert.interface";
import FilterSection from "./_components/filter-section/filter-section";
import HomeHeroSection from "./_components/home-hero-section/home-hero-section";
import ExpertsList from "./_components/experts-list/expert-list";

async function getExperts(): Promise<Experts> {
  const res = await fetch(`https://stgapi.agroiranexpert.com/experts`, {
    next: {
      revalidate: 24 * 60 * 60,
    },
  });
  const response = await res.json();
  const result = await response?.result?.data?.experts;
  return result;
}

export default async function Home() {
  const experts = await getExperts();

  return (
    <>
      <HomeHeroSection />
      <div className="h-[100vh] grid grid-cols-12">
        <div className="col-span-3">
          <FilterSection />
        </div>
        <div className="flex flex-col col-span-9 w-full p-4">
          <div>
            <div>Experts Symbol</div>
            <div>Sort Base on</div>
          </div>
          <div>
            <ExpertsList experts={experts} />
          </div>
        </div>
      </div>
    </>
  );
}
