import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post =useLoaderData();
    const navigate=useNavigate();
    const {postId}=useParams();
    const {id,title,body}=post;
    console.log(postId);
    const handleGoBack=()=>{
navigate(-1);
    }
    return (
        <div>
            <h3>Post details about:{id}</h3>
            <p>Title:{title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Goback</button>
        </div>
    );
};

export default PostDetails;