import './App.css'
import { posts } from './data/posts'
import PostList from './components/PostList'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header__brand">
          <p className="app-header__name">Desk Board</p>
          <h1>팀 게시판</h1>
          <p className="app-header__desc">
            목록부터 차근차근 만드는 학습용 게시판입니다.
          </p>
        </div>
      </header>

      <main className="app-main">
        <PostList posts={posts} />
      </main>
    </div>
  )
}

export default App
