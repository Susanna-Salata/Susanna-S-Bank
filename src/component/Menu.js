import styled from "styled-components";

export default function Menu({ config }) {
  return (
    <MenuBlock>
      {/* в config нам приходить список кнопок
        за допомогою .map() ми для кожної кнопки
        виводимо HTML верстку
      */}
      {config.map((menu) => (
        <ButtonSendBlock onClick={menu.onClick}>
          <ButtonSendIcon>
            {/* тут ми підгружаємо зображення, задаємо ширину та висоту */}
            <img src={menu.img} width="30px" height="30px" />
          </ButtonSendIcon>
          <ButtonSendText>{menu.name}</ButtonSendText>
        </ButtonSendBlock>
      ))}
    </MenuBlock>
  );
}

const ButtonSendBlock = styled.button`
  /* відступи між картинкою та текстом кнопках */
  gap: 20px;

  /* додаємо можливість робити 
  плавну анімацію на 0.7 секунд */
  transition: opacity 0.7s;

  /* при наведенні на блок, курсор буде виглядати
    як у клікабельних елементах
   */
  cursor: pointer;

  /* при наведенні на блок 
    він стає прозорим на 30% (1 - 0.7)
   */
  &:hover {
    opacity: 0.5;
  }

  /* === */

  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuBlock = styled.div`
  display: flex;
  padding: 0 40px;
  gap: 18px;
  justify-content: space-around;
  width: 100%;
`;

const ButtonSendIcon = styled.div`
  /* висота кнопки  */
  height: 100px;

  /* ширина кнопки */
  width: 100px;

  /* фон кнопки */
  background: #000000;

  /* закруглення країв кнопки */
  border-radius: 50px;

  /* ==== */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonSendText = styled.div`
  /* жирність тексту (400, 500, 600, 700) */
  font-weight: 600;

  /* розмір тексту */
  font-size: 20px;

  /* колір тексту */
  color: #ffffff;

  /* висота рядка тексту */
  line-height: 32px;

  /* ==== */

  text-align: center;
  width: 100%;
`;
