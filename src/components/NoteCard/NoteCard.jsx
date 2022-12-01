import { Link } from "react-router-dom"

export default function NoteCard({ savedName }) {
    return (
        <>
            <Link to={`/savedNames/${savedName._id}`} className="savedName-link">
                <div className="generatedName">
                    {savedName.name}
                </div>
            </Link>
        </>
    )
}