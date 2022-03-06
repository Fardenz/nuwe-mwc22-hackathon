import Chart from "../components/charts";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 40px;
  width: 80%;
  
  padding: 20px;
`;

const MonthlyDataContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 50px;
`;

const ChartContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;


const Graficas = () => {

    const chartData = [
        {name: 'january', value: 400},
        {name: 'february', value: 600},
        {name: 'march', value: 200}
      ];   
    return ( 
        <Container>
        
        <ChartContainer>
          <Chart title="Requested Money" data={chartData} />
          <Chart title="Total Users" data={chartData} />
        </ChartContainer>
      </Container>
     );
}
 
export default Graficas;