import { Link } from "react-router-dom"

export default function NoteCard({ note }) {
    return (
        <>
            <Link to={`/notes/${note._id}`} className="notes-link">
                <div className="generatedName">
                    {note.name}
                </div>
            </Link>
        </>
    )
}