import AboutCard from "./About";
import Summary from "./Summary";
import ResumeCard from "./ResumeCard";
import experiences from "../exp.json";

const HomePage = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="inline-block col-span-2 p-8">
        <div className="flow-root">
          <AboutCard />
        </div>
        <div className="flow-root">
          <Summary />
        </div>
        <div>
          Add some images here
        </div>
      </div>
      <div className="inline-block col-span-2 p-8">
        <ResumeCard entry={experiences}/>
      </div>
    </div>
  );
}

export default HomePage;