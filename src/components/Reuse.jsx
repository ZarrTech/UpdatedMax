import { useTypewriter, cursor } from "react-simple-typewriter";
export default function Reuse() {
  const [typeEffect] = useTypewriter({
    words: [
      "If your grandfather was a tenant, and your father was a tenant, it is an abomination for YOU to die a tenant -Dr. Augustine Onwumere",
      "The best investment on earth is earth -Louis Glickman",
      "I've been there, deep in the rat race, homeless, broke, and hungry in Lagos. Then, I found the game-changer: Real Estate."
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div className=" font-inter text-start pr-9">
      <span className="">{typeEffect}</span>
    </div>
  );
}
