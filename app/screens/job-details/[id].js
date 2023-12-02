import { View, Text, SafeAreaView, ScrollView, RefreshControl, ActivityIndicator, } from "react-native";
import { Stack, useRouter, useGlobalSearchParams } from "expo-router";
import BackIcon from "../../../components/icons/backIcon";
import ShareIcon from "../../../components/icons/shareIcon";
import useFetch from "../../../hooks/useFetch";
import { useState, useCallback } from "react";
import CompanyName from "../../../components/job-details/companyName/company";
import JobTabs from "../../../components/job-details/jobTabs/tab";
import JobAbout from "../../../components/job-details/jobAbout/about";
import Specifics from "../../../components/job-details/specifics/specifics";
import Footer from "../../../components/JD-Footer/footer";
const JobDetails = () => {
    const router = useRouter();
    const params = useGlobalSearchParams();
    const { data, isLoading, error, refetch } = useFetch('job-details', {
        job_id: params.id,
    });
    const tabs = ["About", "Qualifications", "Responsibilities"];
    const [refreshing, setRefreshing] = useState(false);
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetch()
        setRefreshing(false)
    }, []);
    const displayTabContent = () => {
        switch (activeTab) {
            case "About":
                return (
                    <JobAbout info={data[0].job_description ?? "No data provided"} />
                );
            case "Qualifications":
                return (
                    <Specifics
                        title='Qualifications'
                        points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
                    />
                );
            case "Responsibilities":
                return (
                    <Specifics
                        title='Responsibilities'
                        points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
                    />
                )
            default:
                return null;
        }
    }
    return (
        <SafeAreaView style={{
            backgroundColor: "#FAFAFC",
            minHeight: "100%",
            paddingHorizontal: 20,
        }}>
            <Stack.Screen
                options={{
                    headerBackVisible: false,
                    headerTitle: '',
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor: "#FAFAFC" },
                    headerLeft: () => (
                        <BackIcon
                            handlePress={() => {
                                router.back();
                            }}
                        />
                    ),
                    headerRight: () => (
                        <ShareIcon />
                    )
                }}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                {
                    isLoading ? (
                        <ActivityIndicator size="large" color="#c1c0c8" />
                    ) : error ? (
                        <Text>Something went wrong</Text>
                    ) : data.length === 0 ? (
                        <Text>Nothing to Show</Text>
                    ) : (
                        <View>
                            <CompanyName
                                company_logo={data[0].employer_logo}
                                jobTitle={data[0].job_title}
                                companyName={data[0].employer_name}
                                location={data[0].job_country}
                            />
                            <JobTabs
                                tabs={tabs}
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                            />
                            {displayTabContent()}
                        </View>
                    )
                }
            </ScrollView>
            <Footer  url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results/'}/>
        </SafeAreaView>
    );
}

export default JobDetails;