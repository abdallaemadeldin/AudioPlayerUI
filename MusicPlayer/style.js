import {
    StyleSheet,
    Dimensions,
    Platform,
    StatusBar
} from "react-native";


const { width, height } = Dimensions.get('screen');
const isIPHONEX = Platform.OS === 'ios' && (width > 800 || height > 800);
const isANDROID = Platform.OS === 'android';

export const style = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: '#f1f1f1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    playerControllers: {
        width: width,
        height: Resizer(25),
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 0,
        zIndex: 100
    },
    cdContainer: {
        width: Resizer(90),
        height: Resizer(90),
        borderRadius: Resizer(45),
        position: 'absolute',
        top: -Resizer(8),
        right: -Resizer(35),
        zIndex: 100,
        borderWidth: 5,
        borderColor: '#eee',
        elevation: 5,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerView: {
        width: Resizer(26),
        height: Resizer(26),
        borderRadius: Resizer(13),
        backgroundColor: 'transparent',
        borderWidth: 2,
        overflow: 'hidden',
        borderColor: '#fff8',
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerSubView: {
        width: Resizer(22),
        height: Resizer(22),
        borderRadius: Resizer(11),
        overflow: 'hidden',
        backgroundColor: '#fff8',
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerFadeView: {
        width: Resizer(14),
        height: Resizer(14),
        borderRadius: Resizer(7),
        overflow: 'hidden',
        backgroundColor: '#f1f1f1',
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        position: 'absolute',
        top: Resizer(14),
        color: '#fff',
        left: Resizer(23),
        fontFamily: 'Ubuntu-Regular',
        fontSize: Resizer(3.5)
    },
    subTitle: {
        fontSize: Resizer(2.5),
        fontFamily: 'Ubuntu-Light',
    },
    favoritBtn: {
        width: Resizer(5),
        height: Resizer(5),
        borderRadius: Resizer(2.5),
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'absolute',
        bottom: Resizer(3),
        right: Resizer(3)
    },
    slider: {
        width: width / 1.8,
        marginTop: 50,
        alignSelf: 'center',
        transform: [{ scaleX: 2 }, { scaleY: 2 }]
    },
    songName: {
        color: '#0009',
        fontSize: Resizer(3),
        fontFamily: 'Ubuntu-Bold',
        position: 'absolute',
        left: Resizer(3)
    },
    bandName: {
        color: '#0009',
        fontSize: Resizer(2.3),
        fontFamily: 'Ubuntu-Light',
        position: 'absolute',
        top: Resizer(3.5),
        left: Resizer(3),
        lineHeight: 20
    },
    playBtn: {
        width: Resizer(9),
        height: Resizer(9),
        borderRadius: Resizer(4.5),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        overflow: 'hidden',
        position: 'absolute',
        bottom: Resizer(3),
        left: Resizer(4)
    },
    nextBtn: {
        width: Resizer(7),
        height: Resizer(7),
        borderRadius: Resizer(3.5),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        overflow: 'hidden',
        position: 'absolute',
        bottom: Resizer(3.5),
        left: Resizer(15)
    }
});

function Resizer(precent) {
    const deviceHeight = isIPHONEX ? height - 78 : isANDROID ? height - StatusBar.currentHeight : height;
    const size = (precent * deviceHeight) / 100;
    return Math.round(size);
}