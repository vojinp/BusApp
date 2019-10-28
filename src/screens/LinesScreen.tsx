import * as React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Text, View } from 'react-native';

interface Props {
}

class LinesScreen extends React.Component<Props> {
    state = {
        lines: [
            {
                key: '1*',
                value: '1 KLISA-CENTAR-LIMAN I'
            },
            {
                key: '2.',
                value: '2 CENTAR - NOVO NASELJE'
            },
            {
                key: '3.',
                value: '3 PETROVARADIN-CENTAR-DETELINARA'
            },
            {
                key: '3A.',
                value: '3A ZEL.STANICA - POBEDA'
            },
            {
                key: '4*',
                value: '4 LIMAN IV - CENTAR - Z.STANICA'
            },
            {
                key: '5',
                value: '5 TEMERINSKI PUT-CENTAR-AVIJATIČAR.NASELJE'
            },
            {
                key: '6',
                value: '6 PODBARA-CENTAR-ADICE'
            },
            {
                key: '6A',
                value: '6A ADICE - VETERNIK (O.S.MARIJA TRANDAFIL)'
            },
            {
                key: '7A.',
                value: '7A N.NASELJE-Z.STAN-F.PIJA-LIMAN4-N.NASELJE'
            },
            {
                key: '7B.',
                value: '7B N.NASELJE-LIMAN4-F.PIJA-Z.STAN-N.NASELJE'
            },
            {
                key: '8',
                value: '8 NOVO NASELJE-CENTAR-LIMAN I'
            },
            {
                key: '9.',
                value: '9 NOVO NASELJE - LIMAN - PETROVARADIN'
            },
            {
                key: '10',
                value: '10 CENTAR-INDUST.ZONA JUG'
            },
            {
                key: '11A.',
                value: '11A Z.STANICA-BOLNICA-LIMAN-Z.STANICA'
            },
            {
                key: '11B.',
                value: '11B Z.STANICA-LIMAN-BOLNICA-Z.STANICA'
            },
            {
                key: '12.',
                value: '12 CENTAR-TELEP'
            },
            {
                key: '13',
                value: '13 DETELINARA - GRBAVICA - UNIVERZITET'
            },
            {
                key: '14',
                value: '14 CENTAR - SAJLOVO'
            },
            {
                key: '15',
                value: '15 CENTAR-INDUSTR.ZONA SEVER'
            },
            {
                key: '16.',
                value: '16 ZELE.STANICA-PRISTANISNA ZONA'
            },
            {
                key: '17*',
                value: '17 BIG TC - CENTAR'
            },
            {
                key: '18A',
                value: '18A N.NASELJE-DETELINARA-CENTAR-LIMAN-N.NASELJE'
            },
            {
                key: '18B',
                value: '18B N.NASELJE-LIMAN-CENTAR-DETELINARA-N.NASELJE'
            }
        ]
    }

    componentDidMount() {
    }

    render() {
        const { lines } = this.state
        const { navigation } = this.props
        
        return (
            <View style={styles.container}>
                <FlatList
                    data={lines}
                    renderItem={({item}) => (
                            <TouchableOpacity
                                onPress={() => 
                                    navigation.
                                    navigate('Arrives', {
                                        linija: item.key,
                                        title: item.value
                                })} 
                            >
                            <Text 
                                
                                style={styles.item}
                            > {item.value}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     //paddingTop: 22,
     backgroundColor: '#383838'
    },
    item: {
      padding: 10,
      fontSize: 22,
      height: 44,
      color: 'white'
    },
})

export default LinesScreen;