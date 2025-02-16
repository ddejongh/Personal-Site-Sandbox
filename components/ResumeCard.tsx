import experiences from "../exp.json";
import ResumeList from "./ResumeComponents";
import { ResumeEntries } from "./ResumeComponents";

// ResumeCard component now expects experiences of type ResumeEntries
const ResumeCard = ({ entry }: ResumeEntries) => {
    return (
        <div>
            <p className="mr-4 mb-4">A growing software engineer with a background in developing scalable solutions. Experienced in both backend and frontend technologies including Python, JavaScript, React, and Node.js. Notably improved system efficiencies on high volume applications and pipelines at Walmart Global Tech. Adept with cloud platforms like Azure and CI/CD processes, with a pro-activeness towards learning, testing, and documentation.</p>
            <ResumeList entry={entry} />  {/* Passing experiences prop to ResumeList */}
        </div>
    );
}

export default ResumeCard;
