
import Link from "next/link.js";
import Counter from "./Components/Counter/Counter.jsx";

const HomePage = () => {
  return (
    <div>
      <Counter></Counter>
      <Link href={`/about`}>
        <button className="btn btn-info">About</button>
      </Link>
      <Link href={`/news`}>
        <button className="btn btn-info">News</button>
      </Link>
    </div>
  );
};

export default HomePage;
