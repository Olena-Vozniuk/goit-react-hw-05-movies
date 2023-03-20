import styled from 'styled-components';

export const Wrapper = styled.div`
text-align: center;
img{ display: block};
padding: 18px;
width: 100%;
`;

export const Item = styled.li`
padding: 10px 5px 5px 5px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin: 5px;
width: 200px;
height: 300px;
background-color: whitesmoke;
border-radius: 2px;
box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.4);
`;

export const List = styled.ul`
display: flex;
flex-wrap: wrap;
align-items: center;
`;