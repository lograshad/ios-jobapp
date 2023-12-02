import { View, FlatList, TouchableOpacity, Text } from "react-native";
import styles from "./tab.style";

const TabButton = ({name, activeTab, handlePress}) => {
    return ( 
        <TouchableOpacity style={styles.tabButton(name, activeTab)} onPress={handlePress}>
            <Text style={styles.tabText(name, activeTab)}>{name}</Text>
        </TouchableOpacity>
     );
}
 

const JobTabs = ({tabs, activeTab, setActiveTab}) => {
    return ( 
        <View style={styles.container}>
            <FlatList
                data={tabs}
                renderItem={({item})=>(
                    <TabButton
                        name={item}
                        activeTab={activeTab}
                        handlePress={()=> {setActiveTab(item)}}
                    />
                )}
                keyExtractor={item=> item}
                horizontal
                contentContainerStyle={{columnGap: 5}}
                showsHorizontalScrollIndicator={false}
            />
        </View>
     );
}
 
export default JobTabs;