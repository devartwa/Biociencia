import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
  logo: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 220,
    marginBottom: 40,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 22,
    paddingLeft: 40
  },
  recuperarsenha: {
    alignSelf: 'flex-end',
    color: "#33a765",
    marginTop: 10,
    marginBottom: 10,
    marginRight: 46
  },
  botao: {
    width:325,
    height:59,
    backgroundColor: "#33a765",
    borderRadius: 8,
    justifyContent:'center',
    alignSelf: 'center'
  },
  txtbotao:{
    color:"#fff",
    fontSize:18,
    textAlign:'center',
  },
  cadastro: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 10
  },
  cadastrese: {
    color: "#33a765"
  },
  password:{
    marginTop: 30
  },
  passwordImage :{
    marginHorizontal: 10
  }

})

export default styles