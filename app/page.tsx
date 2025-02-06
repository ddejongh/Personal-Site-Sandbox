import About from "@/components/About";
import Summary from "@/components/Summary";
import ResumeCard from "@/components/ResumeCard";

export default function Home() {
  return (
    <div className="bg-[#2C514C] h-screen">
      <div>
        <div className="inline-block">
          <div className="flow-root">
            <About />
          </div>
          <div className="flow-root">
            <Summary />
          </div>
        </div>
        <div className="inline-block">
          <ResumeCard />
        </div>
      </div>
    </div>
  );
}
