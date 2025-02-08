import AboutCard from "./About";
import Summary from "./Summary";
import ResumeCard from "./ResumeCard";

export default function PrimaryResume() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="inline-block col-span-2 p-8">
        <div className="flow-root">
          <AboutCard />
        </div>
        <div className="flow-root">
          <Summary />
        </div>
      </div>
      <div className="inline-block col-span-2 p-8">
        <ResumeCard />
      </div>
    </div>
  );
}
