import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';


export const styles = StyleSheet.create({
    Button:{
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 5,
        paddingVertical: 20,
        backgroundColor: colors.buttonNext
    },
    Text:{
        alignItems:'center',
        fontSize:1
    }
});

export default styles;