import styled from 'styled-components';
import useStats from '../utils/useStats';
import moment from 'moment';

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;
const StatGrid2 = styled.div`
  grid-column: 2 / -1;
  background: #f2f2f2;
  border-radius: 2rem;
  margin-bottom: 0.8rem;
`;
const StatBlock = styled.div`
  background: #f2f2f2;
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
`;
export function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);

  console.log(stats, loading, error);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  const getUpdatedTime = moment.utc(stats.uodated).format('DD-MM-YYYY HH:mm:ss');
  console.log('formatNumber(num)--', formatNumber(1234))
  return (
      <div>
    <StatGrid2>
      <StatBlock>
  <h3>Last update: {getUpdatedTime}</h3>
        <img src={stats.countryInfo.flag} width='200'/>
      </StatBlock>
    </StatGrid2>
    <StatGrid>
      <StatBlock>
        <h3>Cases:</h3>
        <span>{formatNumber(stats.cases)}</span>
      </StatBlock>
      <StatBlock>
        <h3>Today Cases:</h3>
        <span>{formatNumber(stats.todayCases)}</span>
      </StatBlock>
      <StatBlock>
        <h3>Deaths:</h3>
        <span>{formatNumber(stats.deaths)}</span>
      </StatBlock>
      <StatBlock>
        <h3>Today Deaths:</h3>
        <span>{formatNumber(stats.todayDeaths)}</span>
      </StatBlock>
      <StatBlock>
        <h3>Recovered:</h3>
        <span>{formatNumber(stats.recovered)}</span>
      </StatBlock>
      <StatBlock>
        <h3>Active:</h3>
        <span>{formatNumber(stats.active)}</span>
      </StatBlock>
      <StatBlock>
        <h3>Critical:</h3>
        <span>{formatNumber(stats.critical)}</span>
      </StatBlock>
      <StatBlock>
        <h3>Cases Per One Million:</h3>
        <span>{formatNumber(stats.casesPerOneMillion)}</span>
      </StatBlock>
      <StatBlock>
        <h3>Deaths Per One Million:</h3>
        <span>{formatNumber(stats.deathsPerOneMillion)}</span>
      </StatBlock>
    </StatGrid>
    </div>
  );
}