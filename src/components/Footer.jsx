/* eslint-disable react/prop-types */

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={darkMode ? "dark-card dark-font-color" : "light-font-color"}>
      <div className="container">
        <p>Copyright &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
