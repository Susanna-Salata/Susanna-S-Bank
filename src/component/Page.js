import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  /* робимо фон градієнтом */
  background: linear-gradient(62.93deg, #0000cd 19.68%, #87cefa 89.55%);

  /* робимо фон на всю ширину */
  width: 100%;
`;
