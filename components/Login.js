import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import { useState } from 'react';

export default function Login( {setStatus} ) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        try{
            const log = {
                username: username,
                password: password,
            }
            {username === 'Test@mail.ru' && password === 'Test123' ?
            setStatus(false)
            : setStatus(true)
            }
        } catch {
        }
    }
    

  return (
    <View style={styles.main}>
        <View style={styles.viewLogo}>
            <Image 
                source={require('../assets/smart-home.png')} 
                style={styles.logo}
            />
        </View>
        <View style={styles.viewInput}>
            <Image 
                source={require('../assets/Email.png')} 
                style={styles.iconEmail}
            />
            <TextInput 
                value={username}
                onChangeText={setUsername}
                placeholder='Email' 
                style={styles.input} 
                placeholderTextColor={'#D2D2D2'}
            />
            <Image 
                source={require('../assets/password.png')} 
                style={styles.iconPassword}
            />
            <TextInput 
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                placeholder='Password' 
                style={styles.input} 
                placeholderTextColor={'#D2D2D2'}
            />
        </View>
        <TouchableOpacity TouchableWithoutFeedback style={styles.viewButton} onPress={login}>
            <View style={styles.button}>
                <Text style={styles.buttonTitle}>Log in</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.viewRegistration}>
            <Text style={styles.textRegistration}>Don't have an account yet?</Text>
            <Text style={styles.pressRegistration}>Create an account</Text>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#FEACBA',
        height: 620,
        borderBottomLeftRadius: 48,
        borderBottomRightRadius: 48
    },

    viewLogo: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 270,
        width: 270,
        marginTop: 80,
        marginLeft: 68,
        marginBottom: 78,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 12,
    },

    viewInput: {
        alignItems: 'center',
    },

    input: {
        height: 48,
        width: 270,
        backgroundColor: 'white',
        marginBottom: 28,
        borderRadius: 12,
        paddingLeft: 20,
        fontSize: 18,
    },

    iconEmail: {
        zIndex: 1,
        marginBottom: -34,
        marginLeft: 212,
    },

    iconPassword: {
        zIndex: 1,
        marginBottom: -38,
        marginLeft: 212,
    },

    viewButton: {
        alignItems: 'center',
        marginTop: 28
    },

    button: {
        alignItems: 'center',
        height: 60,
        width: 200,
        backgroundColor: '#FF879B',
        borderRadius: 20,
        justifyContent: 'center'
    },

    buttonTitle: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },

    viewRegistration: {
        marginTop: 62
    },

    textRegistration: {
        fontSize: 20,
        marginLeft: 72,
        color: '#D2D2D2'
    },

    pressRegistration: {
        width: 166,
        fontSize: 20,
        marginLeft: 72,
        color: '#A4A4A4',
        borderBottomWidth: 1,
        borderColor: '#A4A4A4'
    },
});
