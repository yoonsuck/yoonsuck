import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <aside>
      <nav className="side-nav">
      <NavLink
          to="/home"
          className={({ isActive }) => (isActive || window.location.pathname.startsWith('/home') ? 'active' : '')}
        >
          <i className="fas fa-home"></i> 홈
        </NavLink>
        <NavLink
          to="/vote"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <i className="fa-solid fa-square-poll-horizontal fa-lg"></i> 투표 조회
        </NavLink>
        <NavLink
          to="/message"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <i className="fa-solid fa-comments"></i> 메세지 보내기
        </NavLink>
        <NavLink
          to="/notice"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <i className="fas fa-user-group"></i> 공지사항
        </NavLink>
      </nav>
    <div className="quick-links">
      <a href="/"><i className="fas fa-code"></i> v2.1.0 알파버전</a>
    </div>
  </aside>
  );
}

export default Sidebar;
