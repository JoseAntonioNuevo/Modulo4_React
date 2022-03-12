function Post({title, time, user, likes, comments}) {
  return (
                <div className="card-div">
                 <img className="img-grid" src="https://source.unsplash.com/random/800x800"></img>
                <div className="card-cont align-left">
                    <button className="like-btn"><i className="fa-solid fa-heart"></i> {likes}</button>
                    <p>{time} ago</p>
                    <p>@{user}</p> 
                    <p className="desc">{title}</p>
                    <p className="pointer"><i className="fa-regular fa-message"></i>Comments ({comments})</p>
                    <div className="comment-1 hide">
                    </div>
                </div>
            </div>
  );
}

export default Post;