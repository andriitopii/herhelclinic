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
const AdminPanel = ({ children }) => {
  const auth = getAuth();
  const signOutAdmin = () => {
    signOut(auth);
  };
  const asActive = ({ isActive }) => (isActive ? "menu-active" : "");
  return (
    <section className="admin-panel">
      <div className="admin-panel__nav">
        <div className="admin-panel__container admin-panel__container--nav">
          <Link className="admin-panel__nav_logo" to={"."}>
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
              <a type="button" title="Вийти"
                onClick={() => signOutAdmin()}
              >
                <LogoutSvg />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="admin-panel__content"><div className="admin-panel__container">{children}</div></div>
    </section>
  );
};

export default AdminPanel;
