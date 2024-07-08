import './Post.css'
export default function Post({post}){
    // console.log(post);
    // distructuring

    const {title,body,id,userId} = post;
    return(
        <div className='post'>
            <h5>Tittle:{title}</h5>
            <p><small>userId:{userId} </small></p>
            <p><small>postId:{id}</small></p>
            <p><i>{body}</i></p>

        </div>
    )
}