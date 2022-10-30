import LNB from '../LNB';

export default function Layout({ children }) {
  return (
    <>
      <LNB />
      <main>{children}</main>
    </>
  );
}
