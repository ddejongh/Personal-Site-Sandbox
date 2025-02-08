interface ExperienceEntry {
  years: string;
  description: string;
  skills?: string[];
}

export interface ResumeEntries {
  entry: ExperienceEntry[]; // The 'entry' array holds multiple ExperienceEntry objects
}

// ResumeComponent will display a single entry (years and description)
const ResumeComponent = ({ years, description }: ExperienceEntry) => {
  return (
    <div>
      <div className="grid grid-cols-5 gap-4 my-5">
        <div className="col-span-1">
          <p>{years}</p>
        </div>
        <div className="col-span-4">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

// ResumeList will loop through the entries and render each ResumeComponent
const ResumeList = ({ entry }: ResumeEntries) => {
  return (
    <ul>
      {entry.map((entry, index) => (
        <li key={index}>
          {" "}
          {/* Added a key for each list item */}
          <ResumeComponent
            years={entry.years}
            description={entry.description}
          />
        </li>
      ))}
    </ul>
  );
};

export default ResumeList;
