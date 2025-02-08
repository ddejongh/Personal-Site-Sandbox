import ResumeBullet from "./ResumeBullet";

export default function ResumeCard() {
    return (
        <div>
            <p className='mr-4 mb-4'>This is a summary of my experience</p>
            <ul>
                <li><ResumeBullet /></li>
                <li><ResumeBullet /></li>
                <li><ResumeBullet /></li>
                <li><ResumeBullet /></li>
            </ul>
        </div>
    )
}