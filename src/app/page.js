import Banner from "@/components/home/Banner";
import LearningTips from "@/components/home/LearningTips";
import NewReleases from "@/components/home/NewReleases";
import PopularCourses from "@/components/home/PopularCourses";
import TopInstructors from "@/components/home/TopInstructors";

export default function Home() {
  return (
    <div>
      <Banner/>

      <PopularCourses/>

      <LearningTips/>

      <TopInstructors/>

      <NewReleases/>
    </div>
  );
}
