import NameCard from "./NameCard";
import Summary from "./Summary";
import ResumeCard from "./ResumeCard";
import Socials from "./Socials";
import experiences from "../exp.json";

const HomePage = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex-col inline-block col-span-1 p-8">
        <div className="flow-root flex-col pb-5">
          <NameCard />
        </div>
        <div className="flow-root">
          <Summary />
        </div>
        <div className="flex">
          <Socials />
        </div>
      </div>
      <div className="inline-block col-span-1 p-8">
        <ResumeCard entry={experiences}/>
      </div>
    </div>
  );
}

export default HomePage;