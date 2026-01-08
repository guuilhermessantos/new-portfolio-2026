import MobileLayout from "@/components/layouts/MobileLayout";
import DesktopLayout from "@/components/layouts/DesktopLayout";
import AbstractBackground from "@/components/ui/AbstractBackground";

export default function Home() {
  return (
    <>
      {/* Abstract Animated Background */}
      <AbstractBackground />
      
      {/* Mobile Layout - Visible only on mobile */}
      <div className="block lg:hidden">
        <MobileLayout />
      </div>
      
      {/* Desktop Layout - Visible on tablet and desktop */}
      <div className="hidden lg:block">
        <DesktopLayout />
      </div>
    </>
  );
}
