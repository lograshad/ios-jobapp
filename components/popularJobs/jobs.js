import { isLoading } from "expo-font";
import { View, TouchableOpacity, TextInput, Image, FlatList, Text, ActivityIndicator } from "react-native";
import PopularJobCard from "../popularJobCard/card";
import styles from "./jobs.style";
import useFetch from "../../hooks/useFetch";
import {useState} from "react";
import { useRouter } from "expo-router";

const PopularJobs = () => {
    const {data, isLoading, error} = useFetch('search', {
        query: 'React developer',
        num_pages: 1
    });
    const router = useRouter();
    const [selectedJob, setSelectedJob] = useState();
    const handlePress = (item) => {
        setSelectedJob(item.job_id);
        router.push(`/screens/job-details/${item.job_id}`)
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.boldText}>Popular Jobs</Text>
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
                    <View>
                        <FlatList
                            data={data}
                            renderItem={(item) => (
                                    <PopularJobCard
                                        item={item.item}
                                        selectedJob={selectedJob}
                                        handlePress={handlePress}
                                    />
                            )}
                            keyExtractor={(item) => item.job_id}
                            horizontal
                            contentContainerStyle={{ columnGap: 10 }}
                        />
                    </View>
                )
            }
        </View>
    );
}

export default PopularJobs;