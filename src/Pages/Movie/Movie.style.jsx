import styled from 'styled-components';
export const FilmWrap = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  width: 1280px;
  gap: 20px;
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const InputContainer = styled.div`
  position: relative;
`;
export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  width: 300px;
`;
export const Button = styled.button`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
`;
