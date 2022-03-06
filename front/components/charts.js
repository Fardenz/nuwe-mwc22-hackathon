import { 
    LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer 
  } from 'recharts';
 import styled from '@emotion/styled';
  
  const Container = styled.div`
    width: 100%;
    padding: 3%;
  `;
  
  const Title = styled.h3`
    text-align: center;
  `;
  
  function Chart(props) {
    return (
      <Container>
        <Title>{props.title}</Title>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={props.data}>
            <Line type="monotone" dataKey="value" stroke="#32CD32" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </Container>
    );
  }
  
  export default Chart;