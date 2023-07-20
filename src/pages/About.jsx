import leonardoAside from "../img/leanardo-aside.gif";
import michalengeloAside from "../img/michalengelo-aside.gif";

const About = () => {
  return (
    <div className="d-flex justify-content-between p-3 bg-black ">
      <img src={leonardoAside} alt="" />
      <p className="p-2 text-center text-light">
        Teenage Mutant Ninja Turtles, sometimes abbreviated to TMNT, is an
        American media franchise created by the comic book artists Kevin Eastman
        and Peter Laird. It follows Leonardo, Michelangelo, Donatello and
        Raphael, four anthropomorphic turtle brothers trained in ninjutsu who
        fight evil in New York City. Supporting characters include the turtles'
        sensei, a rat called Splinter, their human friends April O'Neil and
        Casey Jones, and enemies such as Baxter Stockman, Krang, and their
        archenemy, the Shredder.
        <br />
        The action figures were promoted with an animated series, which
        premiered in 1987 and ran for almost a decade. Three live-action films
        were released; the first, released in 1990, became the highest-grossing
        independent film up to that point. Numerous video games have also been
        released, including several developed by Konami. In some European
        regions, the franchise was titled Teenage Mutant Hero Turtles, due to
        the violent connotations of the word "ninja".
      </p>
      <img src={michalengeloAside} alt="" />
    </div>
  );
};

export default About;
