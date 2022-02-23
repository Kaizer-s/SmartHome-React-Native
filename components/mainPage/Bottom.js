import { StyleSheet, View, Image } from 'react-native';

export default function Bottom( {footerIcon} ) {

  return (
    <View style={styles.footer}>
        {footerIcon.map(( {id, url} ) => (
            <View style={styles.footerIcons} key={id}>
                <Image source={url}/>
            </View>
        ))}
    </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        height: 64,
        width: '100%',
        flexDirection: 'row',
        marginTop: 16,
        backgroundColor: '#FF879B',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    footerIcons: {
        width: '20%',
        alignItems: 'center',
    },
})