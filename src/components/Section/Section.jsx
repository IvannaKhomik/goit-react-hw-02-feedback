import { Title, Desc } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      <Desc>{children}</Desc>
    </>
  );
};
