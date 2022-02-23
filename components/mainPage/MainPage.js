import { StyleSheet, View} from 'react-native';
import Top from '../mainPage/Top';
import Center from '../mainPage/Center';
import Bottom from '../mainPage/Bottom';

export default function MainPage( {setStatus} ) {

  const centerElementLeft = [
    {
      id: 1,
      name: 'Kitchen',
      devices: '2 devices',
      url: require('../../assets/kitchen.png')
    },
    {
      id: 3,
      name: 'Diving room',
      devices: '3 devices',
      url: require('../../assets/diving-room.png')
    },
    {
      id: 5,
      name: 'Bed room',
      devices: '5 devices',
      url: require('../../assets/bed-room.png')
    },
  ]

  const centerElementRight = [
    {
      id: 2,
      name: 'Bath room',
      devices: '1 device',
      url: require('../../assets/bath-room.png')
    },
    {
      id: 4,
      name: 'Living room',
      devices: '2 devices',
      url: require('../../assets/living-room.png')
    },
    {
      id: 6,
      name: 'Child room',
      devices: '1 device',
      url: require('../../assets/child-room.png')

    },
  ]

  const footerIcon = [
    {
      id: 1,
      url: require('../../assets/home.png'),
    },
    {
      id: 2,
      url: require('../../assets/time.png')
    },
    {
      id: 3,
      url: require('../../assets/add.png')
    },
    {
      id: 4,
      url: require('../../assets/push.png')
    },
    {
      id: 5,
      url: require('../../assets/settings.png')
    },
  ]

  return (
      <View>
        <View style={styles.main}>
            <Top 
              setStatus={setStatus}
            />
            <Center 
              centerElementLeft={centerElementLeft} 
              centerElementRight={centerElementRight}
            />
        </View> 
        <Bottom footerIcon={footerIcon}/>  
      </View> 
  );
}

const styles = StyleSheet.create({
    main: {
        marginTop: 80,
        marginLeft: '10%',
        marginRight: '10%',
    }, 
})
