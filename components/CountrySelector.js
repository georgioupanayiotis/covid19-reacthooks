import { useState } from 'react';
import useStats from '../utils/useStats';
import Stats from './Stats';
import styled from 'styled-components';
const GridBlock= styled.div`
  display: grid;
  grid-column: 2 / -1;
  // grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;
`;
const StyledLink = styled.h2`
  //color: palevioletred;
  font-weight: bold;
  text-align: center;
`;
export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    'https://corona.lmao.ninja/countries/'
  );
  const styleObj = {
    fontSize: 20,
    //color: "#4a54f1",
    textAlign: "center",
    paddingTop: "10px",
    width: '300px',
    height: '2rem',
    margin: '0 auto',
}
  const [selectedCountry, setSelectedCountry] = useState('World');
  if (loading) return <p>Loading...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  console.log('Countries-', countries)
  console.log('selectedCountry+++++++', selectedCountry)

  return (
    <GridBlock>
      <StyledLink>Currently Showing {selectedCountry}</StyledLink>
      <select
      style={styleObj}
        onChange={e => {
          setSelectedCountry(e.target.value);
        }}
      >
        {Object.entries(countries).map((country, code) => {

          return <option
            selected={selectedCountry === country[1].countryInfo.iso3}
            key={country[1].countryInfo._id}
            value={country[1].country}
          >
            {country[1].country}
          </option>
        })}
      </select>
      <Stats
        url={`https://corona.lmao.ninja/countries/${selectedCountry}`}
      ></Stats>
    </GridBlock>
  );
}