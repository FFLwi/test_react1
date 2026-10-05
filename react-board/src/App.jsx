import { useState } from 'react'
import './App.css'
import { posts } from './data/posts'
import PostList from './components/PostList'
import PostDetail from './components/PostDetail'

function App() {
  const [selectedPost, setSelectedPost] = useState(null)

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header__brand">
          <p className="app-header__name">Desk Board</p>
          <h1>팀 게시판</h1>
          <p className="app-header__desc">
            목록에서 글을 선택하면 아래에 상세 내용이 표시됩니다.
          </p>
        </div>
      </header>

      <main className="app-main">
        <PostList
          posts={posts}
          selectedId={selectedPost?.id ?? null}
          onSelectPost={setSelectedPost}
        />
        <PostDetail
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      </main>
    </div>
  )
}

export default App
