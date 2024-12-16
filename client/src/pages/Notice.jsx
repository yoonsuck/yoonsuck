import React, { useContext } from 'react';
import '../styles/Notice.css';
import { AuthContext } from '../AuthContext';

function MainContent() {
  const { user, isAuthenticated} = useContext(AuthContext);

  return (
    <section className="content">
      <div className="home-header">
        {isAuthenticated === true ? <h1 id="username">{user.username} 어서오고</h1> : <h1>어케 뚫었는진 모르겠고 로그인 하고 오세용~</h1>}
      </div>

      <div className="notice-section">
        <div className="section-header">
          <h2>공지사항</h2>
        </div>
        <div className="item-grid">
          <div className="item-card">
            <h3>윤썩 사이트 오픈 안내</h3>
            <p>2024-12-07 개발</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainContent;