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
            <CourseCard type="main" img={lame} head="Курс" header="Основной" text="дшбльортпиамвсычфяблготпмавпрлбоьртпаароьлртш7онгрепкавв" dur="3 месяца"/>
            <CourseCard img={negr} head="Курс" header="Углубленный" text="o,kgumyjffdvzscaxcghnjk,mhgfdvscfgtyhjuhgbfvdcsxadfgbhn" dur="8 месяцев"/>
            
        </div>
    </div>
}

export default Courses;