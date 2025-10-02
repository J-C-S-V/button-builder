import { IconGithub } from "../assets/Icons";

export const Footer = () => {
  return (
    <footer style={{ position: "absolute", bottom: "0", color: "var(--color-text-white)", fontSize: "1rem" }} className="footer">
      <p className="footer__text">
        © 2025 Free Button Builder. All rights reserved. Made with ❤ by Juan Sanchez.
        <a target="_blank" href="https://github.com/J-C-S-V">
          <span className="footer__tooltip">
            <IconGithub />
          </span>
        </a>
      </p>
    </footer>
  );
};
