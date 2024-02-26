import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 0;
`;

export const Main = styled.div`
  width: 280px;
  height: 100vh;
  overflow: auto;
  background: #162539;
  color: white;
  display: flex;
  flex-direction: column;
`;

export const Web = styled.div`
  display: flex;
  align-items: center;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  padding: 16px 24px;
  border-bottom: 1px solid rgb(37, 62, 95);
  color: var(--activeColor);
  z-index: 99999;
  text-transform: uppercase;
  height: 25px;
  color: #1890ff;
  cursor: pointer;
`;

export const Profil = styled.div`
  display: flex;
  align-items: center;
  padding: 23px 24px 20px;
`;

export const Analitika = styled.div`
  height: 10px;
  display: flex;
  min-height: 44px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  color: white;
  user-select: none;
  &:hover{
    background-color: #1890ff;
  }
`;

export const AnaMin = styled.div`
  display: flex;
  padding: 12px 24px;
  min-height: 44px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  color: white;
  user-select: none;
  &:hover{
    background-color: #1890ff;
  }
`;

export const BirXil = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  overflow: hidden;
`;

export const Asosiy = styled.div`
  display: flex;
  padding: 12px 24px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  color: white;
  user-select: none;
  &:hover{
    background-color: #1890ff;
  }
`;

export const Name = styled.div`
  color: rgb(248, 250, 252);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  width: 165px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Gmail = styled.div`
  color: rgb(146, 159, 175);
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  width: 165px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ChevronRight = styled.i`
  width: 1px;
  display: flex;
  margin-left: auto;
  transition: all 0.1s ease 0s;
`;

export const Ichki = styled.div`
  display: flex;
  padding: 12px 24px 12px 60px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  color: white;
  user-select: none;
  &:hover{
    background-color: #1890ff;
  }
`;

export const Img = styled.img`
  border-radius: 50%;
  width: 42px;
  height: 42px;
  border-radius: 21px;
  margin-right: 12px;
`;

export const Icon = styled.i`
  width: 20px;
  height: 20px;
  margin-right: 15px;
`;

export const Modal = styled.div`
  width: 497px;
  height: 284px;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: hsla(0, 0%, 40%, .6);
`;

export const MinContainer = styled.div`
  margin: 0 auto;
`;

export const MinModal = styled.div`
  width: 92%;
  height: 89%;
  display: grid;
  justify-content: space-between;
  row-gap: 0.5rem;
  font-family: "Roboto", sans-serif;
  padding: 20px 24px 20px 24px;
  border-radius: 0.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  background: #fff;
`;

export const CancelButton = styled.button`
  width: 70px;
  height: 30px;
  border-radius: 8px;
  overflow: hidden;
  border-color: red;
  color: red;
  margin-left: 300px;
`;

export const OkButton = styled.button`
  width: 70px;
  height: 30px;
  margin-left: 5px;
  border-radius: 8px;
  border-radius: #1890FF;
  background: #1890FF;
`;

export const Brand = styled.div`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #56595e;
`;

export const BrandName = styled.div`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 30px;
`;

