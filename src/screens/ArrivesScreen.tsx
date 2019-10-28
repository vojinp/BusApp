import * as React from 'react';
import { ScrollView, Button, Text, View, WebView } from 'react-native';
import axios, {AxiosResponse} from 'axios';

const cssString = `
	<style>
       * {
            background-color: #383838;
        }
        .tabela-polasci {
            color: white;
            font-size: 22px;
        }
        .table-title, .tabelapolascifooter {
            height:0px;
            color: #383838
        }
        b {
            font-size: 0px;
            color:wheat;
        }
        td > b {
            color: orange;
            font-size: 22px
        }
        span {
            color: white;
            font-size: 22px
        }
    </style>
`

interface Props {
    navigation
}

class ArrivesScreen extends React.Component<Props> {
    params = {
        rv: 'rvg',
        vaziod: '2018-12-01',
        dan: 'R',
        linija: ''
    }

    state = {
        html: ''
    }

    fetchArrivings = () => {
        const { rv, vaziod, dan, linija } = this.params
        
        return fetch(`http://www.gspns.co.rs/red-voznje/ispis-polazaka?rv=${rv}&vaziod=${vaziod}&dan=${dan}&linija%5B%5D=${linija}`)
            .then(function(response) {
                // console.log(response._bodyInit)
                return response._bodyInit
            })
    }

    componentDidMount() {
        const { navigation } = this.props
        const day = navigation.state.routeName
        
        this.params.dan = day === 'Weekday' ? 'R' : day === 'Saturday' ? 'S' : 'N';
        this.params.linija = navigation.getParam('linija')
        this.fetchArrivings().then(html => {
            this.setState({html: cssString + html})
        })
    }

    render() {
        const { html } = this.state

        return (
            <WebView
                originWhitelist={['*']}
                source={{ html }}
            />
        );
    }
}

export default ArrivesScreen;