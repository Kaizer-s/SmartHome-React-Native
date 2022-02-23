import { StyleSheet, View, Image, Text } from 'react-native';

export default function Center( {centerElementLeft, centerElementRight} ) {

  return (
    <View style={styles.main}>

        <View>
            {centerElementLeft.map(( {id, name, devices, url} ) => (
                <View style={styles.viewMain} key={id}>
                    <View style={styles.viewComponent}>
                        <View style={styles.viewIcon}>
                            <Image source={url}/>
                        </View>
                        <View style={styles.viewLine}/>
                        <Text style={styles.viewTextName}>{name}</Text>
                        <Text style={styles.viewTextDevices}>{devices}</Text>       
                    </View>
                </View> 
            ))}
        </View>

        <View>
            {centerElementRight.map(({ id, name, devices, url }) => (
                <View style={styles.viewMain} key={id}>
                    <View style={styles.viewComponent}>
                        <View style={styles.viewIcon}>
                            <Image source={url}/>
                        </View>
                        <View style={styles.viewLine}/>
                        <Text style={styles.viewTextName}>{name}</Text>
                        <Text style={styles.viewTextDevices}>{devices}</Text>       
                    </View>
                </View> 
            ))}
        </View>

    </View>
    )
}

const styles = StyleSheet.create({ 
    main: {
        marginTop: 42,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    viewMain: {
        marginBottom: 38,
    },

    viewComponent: {
        height: 154,
        width: 144,
        borderRadius: 10,
        backgroundColor: '#FF879B',
        marginRight: 20,
        marginLeft: 20
    },

    viewIcon: {
        height: 82,
        alignItems: 'center',
        justifyContent: 'center'
    },

    viewLine: {
        height: 1,
        backgroundColor: 'white'
    },

    viewTextName: {
        color: 'white',
        fontSize: 16,
        marginTop: 13,
        marginLeft: 14,
    },

    viewTextDevices: {
        color: 'white',
        fontSize: 16,
        marginLeft: 14,
        marginTop: -2,
    },

})