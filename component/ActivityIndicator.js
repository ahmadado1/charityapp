import { View,ActivityIndicator,Modal,StyleSheet } from 'react-native';

export const UseActivityIndicator = ({bool}) => {
    return (
        <View>
             <Modal
            animationType="slide"
            transparent={true}
            visible={bool}>
                 <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ActivityIndicator/>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
})