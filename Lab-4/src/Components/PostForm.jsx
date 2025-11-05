export default function PostForm({newPost, handleOnFormChange, handleAddNewPost}) {
    return <div className="postForm">
        <form action="">
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" value={newPost.title} placeholder="Whats your topic?" onChange={(e) => handleOnFormChange(e)} required/>
            <br />
            <label htmlFor="body">Body:</label>
            <input type="text" name="body" value={newPost.body} placeholder="What do you wanna say?" onChange={(e) => handleOnFormChange(e)} required/>
            <br />
            <button onClick={(e) => handleAddNewPost(e)} id="postButton">Post</button>
        </form>
    </div>
}