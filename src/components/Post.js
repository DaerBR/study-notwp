// import React, {Component} from 'react';
// import { fetchPost } from "../actions";
// import _ from 'lodash';
//
// class Post extends Component {
//     componentDidMount() {
//         this.props.fetchPost(this.props.match.params.id);
//     }
//
//     render() {
//         if (_.size(this.props.post) === 0) {
//             return <div>Loading...</div>
//         }
//         const { post } = this.props;
//         return (
//             <React.Fragment>
//                 <div className="page-title-block">
//                     <h1 className="page-title">{_.capitalize(post.title)}</h1>
//                 </div>
//                 <div className="post-meta">
//                     <div className="post-author">Author: <Link to={`/user/${post.userId}`}>{post.userId}</Link></div>
//                 </div>
//                 <div className="post-content">
//                     {post.body}
//                 </div>
//                 <div className="comments-block">
//                     <div className="comments-title">Post comments:</div>
//                 </div>
//
//             </React.Fragment>
//         );
//     }
// }
//
// const mapStateToProps = (state) => {
//     return { post: state.post };
// };
//
// export default connect(mapStateToProps, { fetchPost })(Post);