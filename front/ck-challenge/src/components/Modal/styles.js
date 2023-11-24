import styled from 'styled-components';


export const Container = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

:hover {
        background-color: #fff;
    }

.close-button {
  display: flex;
  justify-content: flex-end;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: #333;
  margin: 0px;
  padding: 0px;
}

.custom-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
`
