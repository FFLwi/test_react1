import './PostList.css'

function PostList({ posts }) {
  return (
    <section className="post-list" aria-labelledby="post-list-title">
      <div className="post-list__toolbar">
        <h2 id="post-list-title">전체 글</h2>
        <p className="post-list__count">{posts.length}건</p>
      </div>

      <div className="post-list__table" role="table" aria-label="게시글 목록">
        <div className="post-list__row post-list__row--head" role="row">
          <span role="columnheader">번호</span>
          <span role="columnheader">제목</span>
          <span role="columnheader">작성자</span>
          <span role="columnheader">작성일</span>
        </div>

        <ul className="post-list__body">
          {posts.map((post) => (
            <li key={post.id} className="post-list__row" role="row">
              <span className="post-list__id" role="cell">
                {post.id}
              </span>
              <span className="post-list__title" role="cell">
                {post.title}
              </span>
              <span className="post-list__author" role="cell">
                {post.author}
              </span>
              <span className="post-list__date" role="cell">
                {post.createdAt}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default PostList
