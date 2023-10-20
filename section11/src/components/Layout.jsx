import style from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className="Layout">
      <header className={style.header}>
        <div>🌐 NARAS</div>
      </header>
      <main className={style.main}>{children}</main>
    </div>
  );
}
