import Logo from "../logo";
import Navigation from "./Navigation";
export default function Header() {
  return (
    <header className="Header">
      {<Logo />}
      <Navigation></Navigation>
    </header>
  );
}
