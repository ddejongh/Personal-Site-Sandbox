import NameCard from "./NameCard";
import Summary from "./Summary";
import ResumeCard from "./ResumeCard";
import experiences from "../exp.json";

const HomePage = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="inline-block col-span-2 p-8">
        <div className="flow-root">
          <NameCard />
        </div>
        <div className="flow-root">
          <Summary />
        </div>
        <div>
          Add some icons here
        </div>
      </div>
      <div className="inline-block col-span-2 p-8">
        <ResumeCard entry={experiences}/>
      </div>
    </div>
  );
}

export default HomePage;