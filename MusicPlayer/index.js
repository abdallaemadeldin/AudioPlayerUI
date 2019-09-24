import React, { Component } from 'react';
import {
    StatusBar,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { style } from './style';
import CD from './CD';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';

type Props = {

}

class Player extends Component<Props> {

    constructor(props){
        super(props);

        this.state = {
            favorit: false,
            value: 0,
            playing: false
        }
    }

    circleGenerator(length) {
        return (
            [...Array(length)].map((_, i) => {
                const size = 45 * (length - i);
                return (
                    <View
                        key={i}
                        style={{
                            width: size,
                            height: size,
                            borderRadius: size / 2,
                            borderWidth: 1,
                            borderColor: '#e1e1e1',
                            position: 'absolute',
                            zIndex: i
                        }}
                    />
                );
            })
        );
    }

    render() {
        const { favorit, value, playing } = this.state;
        const {
            container,
            playerControllers,
            favoritBtn,
            slider,
            songName,
            bandName,
            playBtn,
            nextBtn
        } = style;

        return (
            <SafeAreaView style={container} >
                <StatusBar hidden animated />

                {
                    this.circleGenerator(15)
                }

                <CD
                    cdTitle="CairoKee"
                    cdSubTitle="Noqta Beda"
                    source={require('./Assets/bg1.jpg')}
                />

                <View style={playerControllers}>
                    <TouchableOpacity style={favoritBtn} onPress={() => this.setState({ favorit: !favorit })}>
                        <Icon name={favorit ? "heart" : "heart-outline"} size={30} color={favorit ? "#f22" : "#999"} />
                    </TouchableOpacity>
                    <Text style={songName}>Layla</Text>
                    <Text style={bandName}>CairoKee</Text>
                    <Slider
                        style={slider}
                        minimumValue={0}
                        maximumValue={1}
                        value={value}
                        onValueChange={value => this.setState({ value })}
                        minimumTrackTintColor="#111"
                        maximumTrackTintColor="#1115"
                        thumbTintColor="#0000"
                    />

                    <TouchableOpacity style={playBtn}>
                        <Icon name={!playing ? "play" : "pause"} size={35} color="#fff" />
                    </TouchableOpacity>

                    <TouchableOpacity style={nextBtn}>
                        <Icon name="skip-next" size={30} color="#fff" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

export default Player;