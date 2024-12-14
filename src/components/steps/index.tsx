import { View, Text } from 'react-native'
import { s } from './styles'
import { Step } from '../step'
import { IconMapPin, IconQrcode, IconTicket } from '../step'
import { Step } from '../step'
import { Step } from '../step'

export function Steps () {
    return (
        <View style={s.container}>
            <Text style={s.title}>Veja como funciona:</Text>
            <Step title="Encontre estabelecimentos"/>
        </View>
    )
}