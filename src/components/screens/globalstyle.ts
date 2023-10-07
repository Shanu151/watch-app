import { StyleSheet} from 'react-native';


export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop:20,  
        // position:'relative'
      },
      margin:{
        marginTop:35
      },
      underline:{
        textDecorationLine:'underline'
      },
      screennametext: {
        textAlign: "center",
        fontSize: 16,
        fontFamily: "Lora-Medium",
        fontStyle: "normal",
        color: "#222",
      },
      backscreentext:{
        fontSize: 14,
        fontFamily: "Lora-Medium",
        fontStyle: "normal",
        color: "#9E9E9E",
        
      },
      backbutton: {
        paddingVertical:10,
        paddingHorizontal:10,
        // backgroundColor: "red",
      },
      createBannerimages: {
        width: "100%",
      },
      headingtext: {
       
        fontSize: 32,
        fontFamily: "Lora-Medium",
        fontStyle: "normal",
      },
      logoW: {
        textAlign: "center",
        fontFamily: "Lora-Bold",
        fontSize: 24,
        textTransform: "uppercase",
        alignItems: "center",
        verticalAlign: "middle",
        backgroundColor: "#E99282",
        paddingVertical:3,
        color: "#fff",
        borderRadius: 8,
        width:50,
        marginBottom:16
      },
      input:{
        paddingVertical:16,
        paddingHorizontal:5,
        marginVertical:10,
        fontSize: 16,
        fontFamily: "Lora-Medium",
        fontStyle: "normal",
        color: "#000",
        
      },
      alradytext: {
        fontFamily: "Lora-Regular",
        color: "#222",
      },
      account: {
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
      },
      buttontext: {
        fontFamily: "Lora-Bold",
        textAlign: "center",
        fontSize: 18,
        padding: 10,
        color: "#fff",
        textTransform: "uppercase",
        borderRadius: 32,
        backgroundColor: "#222",
        
      },
      logintext: {
        fontFamily: "Lora-Bold",
        color: "#222222",
      },
      textbody: {
        textAlign: "center",
        fontSize: 16,
        fontFamily: "Lora-Regular",
        fontStyle: "normal",
        color: "#9E9E9E",
        // paddingTop: 8,
      },
      whitetext:{
        color:'#fff',
        fontFamily:'Lora-Regular'
      }
})