import { View, TouchableOpacity, TextInput, Image, FlatList, Text } from "react-native";
import searchIcon from "../../assets/Icons/search-icon.png";
import styles from "./welcome.style";
import { useState } from "react";

const Welcome = ({searchTerm, updateSearchTerm, handleClick}) => {
    const jobTypes = ["Full-time", "Part-time", "Contractor"];
    const [activeItem, setActiveItem] = useState("Full-time");
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.welcomeText}>Hello Mark</Text>
            </View>
            <View>
                <Text style={styles.boldText}>Find your perfect job</Text>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.textInputContainer}>
                    <TextInput
                        placeholder="What are you looking for?"
                        style={styles.textInput}
                        value={searchTerm}
                        onChangeText={(text) => {updateSearchTerm(text)}}
                    />
                </View>
                <TouchableOpacity style={styles.searchBtnWrapper} onPress={handleClick}>
                    <Image
                        source={searchIcon}
                        resizeMode='cover'
                        style={styles.searchIcon}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.tabsContainer}>
                <FlatList
                    data={jobTypes}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.tab(activeItem, item)}
                            onPress={() => {
                                setActiveItem(item);
                                router.push(`/search/${item}`);
                            }}
                        >
                            <Text
                            style={styles.tabText(activeItem, item)}
                            >{item}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item}
                    contentContainerStyle={{ columnGap: 10 }}
                    horizontal
                />
            </View>

        </View>
    );
}

export default Welcome;