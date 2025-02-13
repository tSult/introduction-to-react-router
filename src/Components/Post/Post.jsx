import {Link,useNavigate} from "react-router-dom"


const Post = ({post}) => {
    const {id,title}=post;
    const navigate=useNavigate();
    const postStyle={
        border:'2px solid yellow',
        padding:'5px',
        borderRadious:'20px'
    }

   const handleShowDetail=()=>{
        navigate(`/post/${id}`);
   }
    return (
        <div>
            <div className={postStyle}>
                <h4>Post of id:{id}</h4>
                <p>{title}</p>
                <Link to={`/post/${id}`}>Post Detail</Link>
                <Link to={`/post/${id}`}><button>Show details</button></Link>
                <button>Click to see</button>
            </div>
        </div>
    );
};

export default Post;