import dsc from "./Description.module.css";

const Description = () => {
   return (
      <div className={dsc.description}>
         <h1>Oleksii Muliar</h1>
         <h2>Frontend Developer</h2>
         <div>
            Дата рождения: <span>13.08.1993</span>
         </div>
         <div>Город: Винница</div>
         <div>Семейное положение: женат</div>
         <div>Контакты: mullexoll@gmail.com</div>
         <div>Номер телефона: +380675220420</div>
      </div>
   );
};

export default Description;
