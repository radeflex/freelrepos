import "./Courses.css"
import CourseCard from "../../components/CourseCard/CourseCard"
import negr from "../../media/img/negr.png"
import lame from "../../media/img/lame.png"
import primary from "../../media/img/primary.png"


const Courses = () => {
    return <div className="coursesPage">
    {/* <h1>Наши курсы</h1> */}
        <div class="courses">
            <CourseCard type="primary" img={primary} head="Интенсив" header="Вводные занятия" text="Пробный вебинар покажет ваши сильные и слабые стороны а также познакомит вас с нашей командой." dur="1 неделя"/>
            <CourseCard type="main" img={lame} head="Курс" header="Основной" text='"Основной" введет вас в курс дела, даст вам новые цели, прикладные знания, а также опыт работы с заказчиком.

В Основной курс входит:

1 месяц - Базовые знания.

2 месяц - Подготовка к первым заданиям,тесты и пробные практические занятия.

3 месяц - Сдача практики и основные "фишки" вашей работы.' dur="3 месяца"/>
            <CourseCard img={negr} head="Курс" header="Углубленный" text='"Углубленный" даст индивидуальные знания для каждого обущаюшегося и их профессии.

В "Углубленный" курс входит:

С 1-5 месяц - Получение дополнительных знаний фриланса, "фишек" общения с заказчиком,работы и поиска клиента.

C 6-8 месяц - Фриланс: 
Работа напрямую с заказчиком.' dur="8 месяцев"/>
            
        </div>
    </div>
}

export default Courses;