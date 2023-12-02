import { isLoading } from "expo-font";
import { View, TouchableOpacity, Text, ActivityIndicator } from "react-native";
import styles from "./job.style";
import useFetch from "../../../hooks/useFetch";
import { useState } from "react";
import NearbyJobCard from "../cards/card";
import { useRouter } from "expo-router";

const NearbyJobs = () => {
    const { data, isLoading, error } = useFetch('search', {
        query: 'React developer',
        num_pages: 1
    });
    const router = useRouter();
    const handlePress = (item) => {
        router.push(`/screens/job-details/${item.job_id}`)
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.boldText}>Nearby Jobs</Text>
                <TouchableOpacity>
                    <Text style={styles.dimText}>Show all</Text>
                </TouchableOpacity>
            </View>
            {
                isLoading ? (
                    <ActivityIndicator size="large" color="#c1c0c8" />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    <View style={styles.cardsContainer}>
                        {data?.map((item) => (
                            <NearbyJobCard
                                item={item}
                                handlePress={handlePress}
                                key={item.job_id}
                            />
                        ))}
                    </View>
                )
            }
        </View>
    );
}

export default NearbyJobs;