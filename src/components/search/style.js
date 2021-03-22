import styled from 'styled-components';

export const SearchElements = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  background: #42597f;
`;

export const Input = styled.input`
  width: 200px;
  height: 40px;
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: #e6d5b8;
  font-size: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Button = styled.button`
  cursor: pointer;
  height: 40px;
  color: #e6d5b8;
  background: #1f6f8b;
  border: 1px solid #99a8b2;
  border-radius: 5px;
`;

export const ProductsList = styled.ul`
  margin: 30px auto 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  max-width: 950px;
  justify-content: center;
  border: ${({ children }) =>
    children.length !== 0 ? '3px solid #99a8b2' : 'none'};
`;

export const Product = styled.li`
  width: 30%;
  margin: 5px;
  text-align: center;
  border: 1px solid #99a8b2;
`;

export const SearchSuggestions = styled.div`
  margin: 0 auto;

  h2 {
    text-align: center;
  }
`;

export const SuggestionsList = styled.ul`
  /* list-style: lower-greek; */
`;

export const Suggestion = styled.li`
  cursor: pointer;
  width: fit-content;
`;
