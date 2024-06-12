import React from 'react';
import './Header.css'; // CSSファイルのインポート

const Header = () => {
  return (
    <header className="header">
      <h1 className="heading">スキルブログ</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="/" className="nav-link">ホーム</a></li>
          <li className="nav-item"><a href="/about" className="nav-link">自己紹介</a></li>
          <li className="nav-item"><a href="/contact" className="nav-link">お問い合わせ</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
