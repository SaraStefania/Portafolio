import './footer.css';
import LogosFooter from './LogosFooter';

export default function Footer() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center footer">
      <p className="footerCD">sara.sierraramos@gmail.com</p>
      <div className="d-flex justify-content-center align-items-center">
        <LogosFooter href='https://github.com/SaraStefania' src="/assets/githubFooter.png" />
        <LogosFooter href='https://www.linkedin.com/in/sara-stefania-sierra-ramos/' src="/assets/linkedin.png" />
      </div>
      <p className="footerCD">© 2023 todos los derechos reservados</p>
    </div>
  );
}
