import PostCard from "./PostCard";

export default function PostsContainer({posts}) {
    return <div className="postsContainer">
        {posts.map((post, index) => <PostCard key={index} {...post}/>)}
    </div>
}