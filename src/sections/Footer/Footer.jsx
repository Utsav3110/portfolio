import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
      {String.fromCodePoint(0x2764, 0xfe0f)} Utsav Gangani.
      </p>
    </section>
  );
}

export default Footer;
