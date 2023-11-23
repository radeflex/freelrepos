import Creator from "../../components/creatorCard/creatorCard";
import fatty from "../../media/img/fatty.jpeg"
import "./About.css"

const About = () => {
  return (
    <div class="Main">
      <h1>О нас</h1>
      <div className="creatorPage">
      <Creator photo={fatty} rank="Фрилансер" name="Мразота с колледжа" age={20} bio="Люблю ебать Максиму и Никите мозги с сайтом."/>
      <Creator photo={fatty} rank="Фрилансер" name="Мразота с колледжа" age={20} bio="Люблю ебать Максиму и Никите мозги с сайтом."/>
      <Creator photo={fatty} rank="Фрилансер" name="Мразота с колледжа" age={20} bio="Люблю ебать Максиму и Никите мозги с сайтом."/>
      <Creator photo={fatty} rank="Пидор" name="Мразота с колледжа" age={20} bio="Люблю ебать Максиму и Никите мозги с сайтом."/>
        </div>
    </div>
  );
};

export default About;
