import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import homeStyles from "./style.js";
import { FakePlants } from "../../fakeData/fakePlants.js";
import SVG from "../../assets/plants.svg";
import PlantsItem from "../../components/PlantsItem/index.js";
import { FakePlantsPost } from "../../fakeData/fakePlantsPost.js";
import PlantsPostItem from "../../components/PlantsPostItem/index.js";
import { FakePlantsTrue } from "../../fakeData/fakePlantsTrue.js";

const Home = () => {
  return (
    <ScrollView>
      {/* Debut du header */}
      <View style={homeStyles.header}>
        <Text style={homeStyles.userName}>Farhati MOHAMED</Text>

        <Image
          source={require("./../../assets/photo_f.jpg")}
          style={homeStyles.userImg}
        />
      </View>

      {/* Fin du header */}

      {/* Liste des plantes */}

      <FlatList
        data={FakePlants}
        keyExtrator={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={homeStyles.scrollableList}
        renderItem={({ item }) => {
          return <PlantsItem item={item} />;
        }}
      />

      {/* Fin liste des plantes */}

      {/* Liste de vrai plantes */}
      {/* <View style={homeStyles.title}>
        <Text style={homeStyles.titleBold}> Voici les plantes</Text>
      </View>
      <FlatList
        data={FakePlantsPost}
        keyExtrator={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={homeStyles.scrollableList}
        renderItem={({ item }) => {
          return <PlantsPostItem item={item} />;
        }}
      /> */}

      {/* Fin liste de vrai plantes */}

      {/* Liste plantes */}
      <View style={homeStyles.title_space_between}>
        <Text style={homeStyles.titleBold}> Voici les plantes</Text>

        <TouchableOpacity>
          <Text style={homeStyles.link}> Afficher tout</Text>
        </TouchableOpacity>
      </View>

      <View style={homeStyles.plantsContainer}>
        {FakePlantsTrue.splice(0, 4).map((plants, index) => {
          return (
            // interaction avec l'utilisateur
            <TouchableOpacity key={plants.id} style={homeStyles.plantsCard}>
              <Image
                // require en local et uri sur internet
                source={require("./../../assets/img2.jpg")}
                style={homeStyles.plantsImg}
              />
              <View style={homeStyles.plantsinfo}>
                <Text style={homeStyles.plantTitle}> {plants.plant} </Text>
                <Text style={homeStyles.plantOwner}> {plants.owner} </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Fin liste  plantes */}
    </ScrollView>
  );
};

export default Home;
