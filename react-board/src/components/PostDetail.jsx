import './PostDetail.css'

function PostDetail({ post, onClose }) {
  if (!post) {
    return (
      <section className="post-detail post-detail--empty" aria-live="polite">
        <h2>글 상세</h2>
        <p>목록에서 제목을 선택하면 내용이 여기에 표시됩니다.</p>
      </section>
    )
  }

  return (
    <section className="post-detail" aria-labelledby="post-detail-title">
      <div className="post-detail__toolbar">
        <h2 id="post-detail-title">글 상세</h2>
        <button type="button" className="post-detail__close" onClick={onClose}>
          목록만 보기
        </button>
      </div>

      <article className="post-detail__body">
        <h3>{post.title}</h3>
        <p className="post-detail__meta">
          <span>{post.author}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.createdAt}>{post.createdAt}</time>
        </p>
        <p className="post-detail__content">{post.content}</p>
      </article>
    </section>
  )
}

export default PostDetail
