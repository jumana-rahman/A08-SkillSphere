import Banner from "@/components/home/Banner";
import LearningTips from "@/components/home/LearningTips";
import PopularCourses from "@/components/home/PopularCourses";

export default function Home() {
  return (
    <div>
      <Banner/>

      <PopularCourses/>

      <LearningTips/>
    </div>
  );
}
