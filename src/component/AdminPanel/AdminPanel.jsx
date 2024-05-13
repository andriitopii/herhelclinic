import { signOut, getAuth } from "firebase/auth";
import "./AdminPanel.scss";
import { Link, NavLink } from "react-router-dom";
import LogoBlackSvg from "../Icon/LogoBlackSvg";
import Logo from "../Logo/Logo";
import LogoWhiteSvg from "../Icon/LogoWhiteSvg";
import SettingsSvg from "../Icon/SettingsSvg";
import NewsPaperSvg from "../Icon/NewsPaperSvg";
import MedicalSvg from "../Icon/MedicalSvg";
import MailSvg from "../Icon/MailSvg";
import LogoutSvg from "../Icon/LogoutSvg";
import DragMenuSvg from "../Icon/DragMenuSvg";
import { useState } from "react";
const AdminPanel = ({ children }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const auth = getAuth();
  const showMobileMenuFn = () => {};
  const signOutAdmin = () => {
    signOut(auth);
  };

  const asActive = ({ isActive }) => (isActive ? "menu-active" : "");
  return (
    <section className="admin-panel">
      <div
        className="admin-panel__mobile-menu"
        style={{ left: showMobileMenu && 0 }}
      >
        <ul>
          <li>
            <NavLink
              onClick={() => setShowMobileMenu(false)}
              className={asActive}
              to={"."}
              end={true}
            >
              <SettingsSvg />
              <h3>Налаштування</h3>
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setShowMobileMenu(false)}
              className={asActive}
              to="media"
            >
              <NewsPaperSvg />
              <h3>Згадки в медіа</h3>
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setShowMobileMenu(false)}
              className={asActive}
              to="services-price"
            >
              <MedicalSvg />
              <h3>Прайс&Послуги</h3>
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setShowMobileMenu(false)}
              title="Повідомлення"
              className={asActive}
              to="message"
            >
              <MailSvg />
              <h3>Повідомлення</h3>
            </NavLink>
          </li>
          <li>
            <a
              type="button"
              title="Вийти"
              onClick={() => {
                setShowMobileMenu(false);
                signOutAdmin();
              }}
            >
              <LogoutSvg />
              <h3>Вийти</h3>
            </a>
          </li>
        </ul>
      </div>
      <div className="admin-panel__nav">
        <div className="admin-panel__container admin-panel__container--nav">
          <Link onClick={() => setShowMobileMenu(false)} className="admin-panel__nav_logo" to={"."}>
            <LogoWhiteSvg />
          </Link>
          <ul className="admin-panel__nav_menu">
            <li>
              <NavLink className={asActive} to={"."} end={true}>
                <SettingsSvg />
              </NavLink>
            </li>
            <li>
              <NavLink className={asActive} to="media">
                <NewsPaperSvg />
              </NavLink>
            </li>
            <li>
              <NavLink className={asActive} to="services-price">
                <MedicalSvg />
              </NavLink>
            </li>
            <li>
              <NavLink title="Повідомлення" className={asActive} to="message">
                <MailSvg />
              </NavLink>
            </li>
            <li>
              <a type="button" title="Вийти" onClick={() => signOutAdmin()}>
                <LogoutSvg />
              </a>
            </li>
          </ul>
          <button
            className="admin-panel__mobile-menu_btn"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <DragMenuSvg />
          </button>
        </div>
      </div>
      <div className="admin-panel__content">
        <div className="admin-panel__container">{children}</div>
      </div>
    </section>
  );
};

export default AdminPanel;
