import { StyleSheet, Text, View, Image } from 'react-native';

export default function Top( {setStatus} ) {

    const back = () => {
        setStatus(true)
    }

  return (
    <View style={styles.main}>
        <View style={styles.viewLeft}>
            <Text style={styles.textWelcome} onPress={back}>
                Hi, Robert!
            </Text>
            <Text style={styles.textWelcome}>
                Welcome to home
            </Text>
        </View>

        <View style={styles.viewRight}>
            <Image 
                source={require('../../assets/energy.png')} 
                style={styles.iconEnergy}
            />
            <Image 
                source={require('../../assets/profile.png')} 
                style={styles.iconProfile}
            />
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row'
    },

    viewLeft: {
        width: '50%'
    },

    viewRight: {
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
    },

    iconEnergy: {
        marginLeft: 65,
        marginRight: 0
    },

    iconProfile: {
        marginLeft: 'auto',
        marginRight: 0
    },

    textWelcome: {
        color: '#FF879B',
        fontSize: 16,
    },
})