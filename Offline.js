import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

function OfflineNotice(props) {
    const netInfo = useNetInfo();

    if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
        return (
            <View style={styles.container}>
                <Text style={styles.text}>No Internet Connection</Text>
            </View>
        );

    return null;
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: '#ff5252',
        height: 50,
        justifyContent: "center",
        position: "absolute",
        top: 0,
        width: "100%",
        zIndex: 1,
    },
    text: {
        color: '#fff',
    },
});

export default OfflineNotice;
