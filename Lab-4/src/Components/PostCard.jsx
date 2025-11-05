export default function PostCard({title, body}) {
    return <div className="postCard">
        {/* Basic Post Outline, might modify in the future*/}
        <h3>{title}</h3>
        <p>{body}</p>
    </div>
}