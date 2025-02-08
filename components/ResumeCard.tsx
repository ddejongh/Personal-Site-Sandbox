import experiences from "../exp.json";
import ResumeList from "./ResumeComponents";
import { ResumeEntries } from "./ResumeComponents";

// ResumeCard component now expects experiences of type ResumeEntries
const ResumeCard = ({ entry }: ResumeEntries) => {
    return (
        <div>
            <p className="mr-4 mb-4">This is a summary of my experience</p>
            <ResumeList entry={entry} />  {/* Passing experiences prop to ResumeList */}
        </div>
    );
}

export default ResumeCard;
