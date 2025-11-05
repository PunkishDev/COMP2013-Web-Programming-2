import {useState, useEffect} from "react";
import PostsContainer from "./PostsContainer";
import PostForm from "./PostForm";

export default function FakeApiApp() {
    const URL = "https://jsonplaceholder.typicode.com/posts"; //API URL
    const [posts, setPosts] = useState([]); //Total posts
    const [newPost, setNewPost] = useState({ //New post - Filled by form
        title: "",
        body: "",
    })
    const [isLoading, setIsLoading] = useState(true); //State to appear loading message when posts are laoding

    const grabPosts = async () => {
        const response = await fetch(URL); //Grabs data from the API URL
        const data = await response.json();

        setPosts(data.map((post) => {
            return {id: post.id, ...post}
        }));
        setIsLoading(false); //Disables loading icon
    }

    useEffect(() => grabPosts, []); //Runs the grab posts once on refresh

    //Handlers ------------------
    const handleOnFormChange = (e) => {
        setNewPost((prevNewPost) => {
            return {...prevNewPost, [e.target.name]: e.target.value};
        })
        return;
    }

    //Handles addition of new post
    const handleAddNewPost = (e) => {
        e.preventDefault();
        setPosts((prevPosts) => {
            return [newPost, ...prevPosts] //Inserts new post before spread of previous posts
        })
        setNewPost({ title: "", body: ""})
    }

    return <div>
        <h1>Forum App</h1>
        {isLoading && <h2>Loading...</h2> /* Shows the loading icon until posts load */}
        <PostForm newPost={newPost} 
            handleOnFormChange={handleOnFormChange}
            handleAddNewPost={handleAddNewPost}/>
        <p>Number of Posts: {posts.length}</p>
        <PostsContainer posts={posts}/>
    </div>
}