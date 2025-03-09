import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "uppercasen inline-block rounded-full bg-yellow-400  font-semibold tracking-wide text-stone-800 transition-all duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed ";
  const styles = {
    primary: base + "px-4 py-3 sm:px-6 sm:py-4",
    round: base + "px-2.5 py-3 sm:px-3.5 sm:py-2 text-sm",
    small: base + "px-4 py-2 md:px-6 md:py-2.5 text-xs",
    secondary:
      "uppercasen inline-block rounded-full border-2 border-stone-300 font-semibold tracking-wide text-stone-400 transition-all duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed px-4 py-2.5 sm:px-6 sm:py-3.5 ",
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
