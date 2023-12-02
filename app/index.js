import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import MenuIcon from '../components/icons/menuIcon';
import ProfileIcon from "../components/icons/profileIcons";
import { Stack, useRouter } from "expo-router";
import Welcome from '../components/welcome/welcome';
import PopularJobs from '../components/popularJobs/jobs';
import NearbyJobs from '../components/NearbyJobs/container/job';
import { useState } from 'react';

const Home = () => {
    const router = useRouter();
    const [searchTerm, updateSearchTerm] = useState('');
    return (
        <SafeAreaView style={{
            backgroundColor: "#FAFAFC",
            flex: 1,
            paddingHorizontal: 10,
        }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#FAFAFC" },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <MenuIcon />
                    ),
                    headerRight: () => (
                        <ProfileIcon />
                    ),
                    headerTitle: "",
                }}
                style={styles.header}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: 12,
                        backgroundColor: "#FAFAFC",
                    }}
                >
                    <Welcome
                        searchTerm={searchTerm}
                        updateSearchTerm={updateSearchTerm}
                        handleClick={() => {
                            if (searchTerm) {
                                router.push(`screens/search/${searchTerm}`)
                            }
                        }}
                    />
                    <PopularJobs />
                    <NearbyJobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        alignItems: "center",
    }
});

export default Home;
