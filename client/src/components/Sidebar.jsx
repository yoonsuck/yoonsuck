import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';
import { AuthContext } from '../AuthContext';
import logo from '../assets/img/logo_background.svg'

function Sidebar() {
  const { user, isAuthenticated} = useContext(AuthContext);

  return (
    <aside>
      <div className="logo">
        <a href="/home"><img src={logo} alt="Yoonsuck" className="logo_img" /></a>
      </div>
      <nav className="side-nav">
      <NavLink
          to="/home"
          className={({ isActive }) => (isActive || window.location.pathname.startsWith('/home') ? 'active' : '')}
        >
          <i class="fa-solid fa-house fa-lg"></i> 홈
        </NavLink>
        <NavLink
          to="/vote"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <i className="fa-solid fa-square-poll-horizontal fa-xl"></i> 투표 조회
        </NavLink>
        <NavLink
          to="/message"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <i className="fa-solid fa-comments fa-lg"></i> 메세지 보내기
        </NavLink>
        <NavLink
          to="/notice"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <i className="fas fa-user-group fa-lg"></i> 공지사항
        </NavLink>
      </nav>
    <div className="quick-links">
          {isAuthenticated && <a href="/"><i class="fa-solid fa-user-large fa-lg"></i> {user.username}</a>}
    </div>
  </aside>
  );
}

export default Sidebar;
