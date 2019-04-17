import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const adds = []
for (let i = 0; i < 12; i ++) {
    adds.push({ url: 'https://www.labaleine.fr/sites/baleine/files/image-not-found.jpg' })
}

function Adds() {

  return (
      <GridList cellHeight={160} cols={3}>
        {adds.map(add => (
          <GridListTile cols={1}>
            <img src={add.url} alt='no alt' />
          </GridListTile>
        ))}
      </GridList>
  );
}


export default Adds;