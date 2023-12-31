import Note from "./Note";

const NoteList = ({ notes }) => {
    if (!notes) return null;
    return (
        <ul className='flex flex-wrap gap-4 mt-8 justify-center bg-white p-4 rounded-lg'>
            {
                notes.map(note => (
                    <Note key={note.id} note={note} />
                ))
            }
        </ul>
    )
}

export default NoteList;
