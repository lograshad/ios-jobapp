import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, TouchableOpacity, View } from 'react-native';
import { Stack, useRouter, useGlobalSearchParams } from 'expo-router';
import { Text, SafeAreaView } from 'react-native';
import axios from 'axios';
import styles from "./search.style";
import ChevLeftIcon from '../../../components/icons/chev-left';
import ChevRightIcon from '../../../components/icons/chev-right';
import BackIcon from "../../../components/icons/backIcon";
import NearbyJobCard from '../../../components/NearbyJobs/cards/card';

const JobSearch = () => {

    const params = useGlobalSearchParams();
    const router = useRouter()

    const [searchResult, setSearchResult] = useState([]);
    const [searchLoader, setSearchLoader] = useState(false);
    const [searchError, setSearchError] = useState(null);
    const [page, setPage] = useState(1);

    const handlePress = (item) => {
        router.push(`screens/job-details/${item.job_id}`)
    }

    const handleSearch = async () => {
        setSearchLoader(true);
        setSearchResult([])

        try {
            const options = {
                method: "GET",
                url: `https://jsearch.p.rapidapi.com/search`,
                headers: {
                    "X-RapidAPI-Key": '0f705a3767msh38a339d6f969bc7p103405jsn4daeaf57fc41',
                    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
                },
                params: {
                    query: params.id,
                    page: page.toString(),
                },
            };

            const response = await axios.request(options);
            setSearchResult(response.data.data);
        } catch (error) {
            setSearchError(error);
            console.log(error);
        } finally {
            setSearchLoader(false);
        }
    };

    const handlePagination = (direction) => {
        if (direction === 'left' && page > 1) {
            setPage(page - 1)
            handleSearch()
        } else if (direction === 'right') {
            setPage(page + 1)
            handleSearch()
        }
    }

    useEffect(() => {
        handleSearch()
    }, [])
    return ( 
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FAFAFC" }}>
        <Stack.Screen
            options={{
                headerStyle: { backgroundColor: "#FAFAFC" },
                headerShadowVisible: false,
                headerLeft: () => (
                    <BackIcon
                            handlePress={() => {
                                router.back();
                            }}
                        />
                ),
                headerTitle: "",
            }}
        />

        <FlatList
            data={searchResult}
            renderItem={({ item }) => (
                <NearbyJobCard
                    item={item}
                    handlePress={handlePress}
                />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ padding: 16, rowGap: 16 }}
            ListHeaderComponent={() => (
                <>
                    <View style={styles.container}>
                        <Text style={styles.searchTitle}>{params.id}</Text>
                        <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
                    </View>
                    <View style={styles.loaderContainer}>
                        {searchLoader ? (
                            <ActivityIndicator size='large' color="#c1c0c8" />
                        ) : searchError && (
                            <Text>Oops something went wrong</Text>
                        )}
                    </View>
                </>
            )}
            ListFooterComponent={() => (
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        style={styles.paginationButton}
                        onPress={() => handlePagination('left')}
                    >
                        <ChevLeftIcon/>
                    </TouchableOpacity>
                    <View style={styles.paginationTextBox}>
                        <Text style={styles.paginationText}>{page}</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.paginationButton}
                        onPress={() => handlePagination('right')}
                    >
                        <ChevRightIcon/>
                    </TouchableOpacity>
                </View>
            )}
        />
    </SafeAreaView>
     );
}
 
export default JobSearch;