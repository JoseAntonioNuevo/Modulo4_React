import Post from "./post";

function PostList() {
  return (
    <div className="row align-center">
        <div className="col-sm-6 col-lg-4 col-xl-3">
            <Post title="Titulo" time="33 min" user="Juan" likes="50k" comments="20" />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
            <Post title="Titulo 2" time="4 hours" user="Pepe" likes="200k" comments="5" />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
            <Post title="Titulo 3" time="2 hours" user="Paco" likes="256k" comments="2" />
        </div>
    </div>
  );
}

export default PostList;