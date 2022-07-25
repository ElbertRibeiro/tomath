import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';


export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    logo: {
        marginTop: '4%',
        display: 'flex',
        alignSelf: 'center',
        marginBottom: 50,
    },
    email: {
        width: 350,
        height: 50,
        borderRadius: 10,
        marginTop: 8,
        marginBottom: 20,
        backgroundColor: colors.gray
    },
    senha: {
        width: 350,
        height: 50,
        borderRadius: 10,
        marginTop: 8,
        marginBottom: 60,
        backgroundColor: colors.gray
    },
    butaoLogin: {
        width: 277,
        height: 50,
        borderRadius: 10,
        marginTop: 8,
        backgroundColor: colors.blue
    },
    info: {
        alignItems: 'center',
        fontweight: 600,
        fontSize: 12,
        top: 40
    },
});

export default styles;