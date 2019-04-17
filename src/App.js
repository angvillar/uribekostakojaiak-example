import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Party from './Party';
import Adds from './Adds'

class App extends Component {
    render() {
        return (
            <Grid container spacing={24}>
                <Grid item xs={6}>
                    <Party></Party>
                </Grid>
                <Grid item xs={6}>
                    <Adds></Adds>
                </Grid>
            </Grid>

        );
    }
}

export default App;
