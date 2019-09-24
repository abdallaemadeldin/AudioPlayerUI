import React, { Component } from 'react';
import {
    StatusBar,
    View,
    Animated,
    ImageBackground,
    Text
} from 'react-native';
import { style } from './style';

type Props = {
    source: Image,
    cdTitle: String,
    cdSubTitle: String
}

class CD extends Component<Props> {

    circles = Array(3);

    render() {
        const { source, cdSubTitle, cdTitle } = this.props;
        const {
            cdContainer,
            centerView,
            centerSubView,
            centerFadeView,
            title,
            subTitle
        } = style;

        return (
            <ImageBackground style={cdContainer} source={source == undefined ? require('./Assets/bg.jpg') : source} blurRadius={.25}>
                <StatusBar hidden animated />

                <Text style={title}>{cdTitle} <Text style={subTitle}>{cdSubTitle}</Text></Text>

                <View style={centerView}>
                    <View style={centerSubView}>
                        <View style={centerFadeView}>
                            {
                                [...this.circles].map((_, i) => {
                                    const size = 25 * (this.circles.length - i);
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
                            }
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default CD;