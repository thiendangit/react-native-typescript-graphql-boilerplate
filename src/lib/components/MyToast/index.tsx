import React, {useEffect} from "react";
import {
    View,
    Text,
    StyleSheet,
    LayoutAnimation,
    TouchableOpacity,
} from "react-native";
import {Constants, dispatch, EventEmitter, scale, useSelector} from "@common";
import {deviceHeight} from "@utils";
import {RootState} from "@store/allReducers";
import {addToast, removeToast} from "@store/toast_redux/reducer";

const MyToast = () => {

    const {isToast} = useSelector((state: RootState) => state.toast);
    const {msg} = useSelector((state: RootState) => state.toast);

    useEffect(() => {
        const toastListener = EventEmitter.addListener(
            Constants.EmitCode.Toast,
            doToast
        );
        //animation
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        return () => {
            toastListener.remove();
        }
    }, [isToast]);

    const renderToast = (msg: string) => {
        if ((msg && !msg) || !isToast) return null;
        const onPress = () => dispatch(removeToast());
        return (
            <TouchableOpacity style={styles.textWrap} onPress={onPress}>
                <Text style={styles.text}>{msg}</Text>
            </TouchableOpacity>
        );
    };

    const doToast = (msg: string, duration = 4000) => {
        if (!isToast) {
            dispatch(addToast(msg));
            setTimeout(() => {
                dispatch(removeToast())
            }, duration)
        }
    };

    return (
        <View style={styles.container}>{renderToast(msg)}</View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        alignSelf: 'center',
        bottom: (deviceHeight - 20) / 10, // padding bottom
        left: (deviceHeight - 20) / 20,
        right: (deviceHeight - 20) / 20, // padding horizontal
        alignItems: "center",
        zIndex: 9999,
    },
    textWrap: {
        backgroundColor: "rgba(60,60,60,0.9)",
        padding: scale(10),
        paddingHorizontal: scale(20),
        borderRadius: scale(20),
        marginTop: scale(5),
    },
    text: {
        color: "#FFFFFF",
    },
});

export default (MyToast);
