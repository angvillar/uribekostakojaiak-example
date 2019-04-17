import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PartyHeader from './PartyHeader';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

const days = [
    {
        title: '15 de Junio, Viernes',
        events: [
            {
                time: '',
                text: 'I. Mercado Marinero de Barrika.'
            },
            {
                time: '17:00',
                text: 'Campeonato de sokatira. (Pesaje a las 14:30h.)'
            }
        ]
    },
    {
        title: '16 de Junio, Sabado',
        events: [
            {
                time: '',
                text: 'I. Mercado Marinero de Barrika.'
            },
            {
                time: '08:30 - 15:00',
                text: 'IV Rally fotografico. Bases disponibles: www.barrika.net Inscripción gratuita en el AULA DE CULTURA MUNICIPAL*.'
            },
            {
                time: '09:00 - 12:30',
                text: 'VI Marcha popular. Ibilaldi luzea (13 km). Irteera 9:00etan Plaza Txintxilandia. Ibilaldi laburra (3.5 km). Irteera 11:00tan. Plaza Txintxilandia. INSCRIPCIONES GRATUITAS EN EL AULA DE CULTURA hasta el 17 de Junio o el mismo día a partir de las 8:00h.'
            }
        ]
    },
    {
        title: '21 de Junio, Jueves',
        events: [
            {
                time: '18:00 - 22:00',
                text: 'Diskofesta familiar con DISKO ARIMA EROA.'
            },
            {
                time: '19:00',
                text: 'Chupinazo y pregón.'
            }
        ]
    }
]

function Party(props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <PartyHeader></PartyHeader>
            {days.map(day => (
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography className={classes.heading}>{day.title}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <List component="nav">
                        {day.events.map(event => (
                             <ListItem>
                                <ListItemText primary={event.time} secondary={event.text}/>
                            </ListItem>
                        ))}
                        </List>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            ))}
        </div>
    );
}

Party.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Party);