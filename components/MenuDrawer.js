import * as React from 'react';
import { Platform, Dimensions, StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, Picker, Linking } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const WIDTH = Dimensions.get('window').width
const HIEGHT = Dimensions.get('window').height

import { List, Drawer, Colors } from 'react-native-paper';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#018244',
    accent: '#025c2b',
    text: '#383838',
  }
};


export default class MenuDrawer extends React.Component {
  state = {
    expanded: true
  }

  state = {
    active: 'first',
  };

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded
    });

navLink(nav, icon, text, stateA) {
     const { active } = this.state;
  return(
        <Drawer.Item
          label={text}
          active={active === stateA}
          icon={icon}
          theme={theme}
          onPress={() => { 
            this.setState({ active: stateA });
            this.props.navigation.navigate(nav) }}
        />
  )
}

  _handleOpenWithLinking = () => {
    Linking.openURL('http://izumrudnoe.ru/pages/politika-konfidencialnosti/');
  }

navLinknoI(nav, text, stateA) {
  const { active } = this.state;
  return(
        <Drawer.Item
          label={text}
          active={active === stateA}

          theme={theme}
          onPress={() => { 
            this.setState({ active: stateA });
            this.props.navigation.navigate(nav) }}
        />
  )
}


render() {
    return(
  <SafeAreaView style={{ flex: 1, height: 130, backgroundColor: 'litegray',}}>
  <ScrollView>
    <View style={{height: 150, backgroundColor: 'green'}}>
        <Image source={require ('../assets/headerbg.jpg')} style={{resizeMode: 'repeat', width: '100%', height: '100%'}} />
        <Image source={require ('../assets/logo-small.png')} style={{resizeMode: 'contain', position: 'absolute', width: '100%', height: '100%'}} />
   </View>
        <View style={styles.botomLinks}>
            <Drawer.Section >
            {this.navLink ('Home', 'home', 'Главная', 'first')}
            {this.navLink ('Feed', 'event-note', 'Новости', 'second')}
            {this.navLink ('Info', 'info', 'О нас', 'third')}
            {this.navLink ('Hotel', 'hotel', 'Номера', 'fourth')}
            {this.navLink ('Restouran', 'local-dining', 'Рестораны', 'fifth')}
            
            <Collapse>
              <CollapseHeader>
                <View style={styles.collapse}>
                  <MaterialIcons name="favorite" size={24} color="gray" />
                  <Text style={{  marginLeft: '-28%', color: "gray", fontWeight: '500', fontSize: 14,}}>Здоровье</Text>
                  <MaterialIcons name="expand-more" size={24} color="#383838"  />
                </View>
              </CollapseHeader>
              <CollapseBody style={{marginLeft: 12,}}>
                {this.navLinknoI ('Bani','Банный комплекс ', 'sixth')}
                {this.navLinknoI ('SPA',  'SPA салон и массаж', 'seventh')}
                {this.navLinknoI ('JIM',  'Тренажерный зал', 'eighth')}
                {this.navLinknoI ('FOK',  'ФОК и бассейн', 'ninth')}
                {this.navLinknoI ('OK',  'Оздоровительный комплекс', 'tenth')}
              </CollapseBody>
          </Collapse>


            <Collapse>
              <CollapseHeader >
                <View style={styles.collapse}>
                  <MaterialIcons name="mood" size={24} color="gray" />
                  <Text style={{  marginLeft: '-19%', color: "gray", fontWeight: '500', fontSize: 14,}}>Развлечения</Text>
                  <MaterialIcons name="expand-more" size={24} color="#383838"  />
                </View>
              </CollapseHeader>
              <CollapseBody style={{marginLeft: 12,}}>
                  {this.navLinknoI ('Prokat',  'Прокат', 'eleventh')}
                  {this.navLinknoI ('Pool',  'Боулинг и бильярд', 'twelfth')}
                  {this.navLinknoI ('BBQ',  'Барбекю', 'thirteenth')}
                  {this.navLinknoI ('Child',  'Детям', 'fourteenth')}
              </CollapseBody>
          </Collapse>
          
            {this.navLink ('Contact', 'phone', 'Контакты', 'fifteenth')}
            </Drawer.Section>

        </View>
        
        <View style={styles.footer}>
          <Text style={styles.description}>Изумрудное</Text>
          <Text style={styles.version}>v1.0</Text>
        </View>
        <TouchableOpacity style={{height: 20, marginLeft: 20, marginBottom: 10,}} onPress={this._handleOpenWithLinking}>
          <Text style={{  fontSize: 14, color: '#5f5f5f'}} >Политика конфиденциальности</Text>
        </TouchableOpacity>

    </ScrollView>
  </SafeAreaView>
    )
  }


  

}

const styles = StyleSheet.create({

  botomLinks: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 8,
    paddingBotom: 450,
  },

  collapse: {
  height: 48,
  flexDirection: 'row',
  alignItems: 'center',
  marginLeft: 19,
  marginRight: 16,
  justifyContent: 'space-between', },

  
  footer: {
  height: 40,
  marginTop: -4,
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: 'white',
  },
  
  version: {
  flex: 1,
  textAlign: 'right',
  paddingRight: 20,
  color: '#5f5f5f'
 },
   
  description: {
  flex: 1,
  textAlign: 'left',
  paddingLeft: 20,
  fontSize: 16,
  color: '#5f5f5f'
   },
  });