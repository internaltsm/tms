import {Easing,Animated} from 'react-native';
const MyTransitionSpec = ({
    duration: 0,
    easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
    timing: Animated.timing,
});

const TransConfig = () => ({
    transitionSpec: MyTransitionSpec,

    screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;
        const width = layout.initWidth;

        //right to left by replacing bottom scene
        // return {
        //     transform: [{
        //         translateX: position.interpolate({
        //             inputRange: [index - 1, index, index + 1],
        //             outputRange: [width, 0, -width],
        //         }),
        //     }]
        // };

        const inputRange = [index - 1, index, index + 1];

        const opacity = position.interpolate({
            inputRange,
            outputRange: ([0, 1, 0]),
        });

        const translateX = position.interpolate({
            inputRange,
            outputRange: ([width, 0, 0]),
        });

        return {
            opacity,
            transform: [
                { translateX },
            ],
        };

        ////from center to corners
        // const inputRange = [index - 1, index, index + 1];
        // const opacity = position.interpolate({
        //     inputRange,
        //     outputRange: [0.8, 1, 1],
        // });

        // const scaleY = position.interpolate({
        //     inputRange,
        //     outputRange: ([0.8, 1, 1]),
        // });

        // return {
        //     opacity,
        //     transform: [
        //         { scaleY },
        //     ],
        // };
    }
});

export default TransConfig;
