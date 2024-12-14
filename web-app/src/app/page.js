import HeroContent from "@/components/HeroContent";
import NavHeader from "@/components/NavHeader";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="pt-5 bg-gradient-to-br from-customGradientStart to-customGradientEnd h-screen">
      <NavHeader />
      <HeroContent />
    </div>
  );
}
