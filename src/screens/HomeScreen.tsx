import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import MasonryList from "reanimated-masonry-list";
import { BlurView } from "expo-blur";

const AVATAR =
  "https://ih1.redbubble.net/image.1671944269.9239/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg";

const CATEGORIES = [
  "Vêtements",
  "Chaussures",
  "Accessoires",
  "Accessoires 2",
  "Accessoires 3",
];

const HomeScreen = () => {
  const { colors } = useTheme();
  const [categoryIndex, setCategoryIndex] = useState(0);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView style={{ paddingVertical: 24, gap: 24 }}>
        {/* header section */}
        <View
          style={{
            padding: 24,
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Image
            source={{
              uri: AVATAR,
            }}
            style={{ width: 60, aspectRatio: 1, borderRadius: 52 }}
            resizeMode="cover"
          />
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                marginBottom: 8,
                color: colors.text,
              }}
              numberOfLines={1}
            >
              Hi, Brow !
            </Text>
            <Text
              style={{
                color: colors.text,
                opacity: 0.75,
              }}
              numberOfLines={1}
            >
              Discorver fashion that suit your style
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            <Icons name="notifications" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>
        {/* Search section */}
        <View style={{ flexDirection: "row", paddingHorizontal: 24, gap: 12 }}>
          <TouchableOpacity
            style={{
              flex: 1,
              height: 52,
              borderRadius: 52,
              borderWidth: 1,
              borderColor: colors.border,
              alignItems: "center",
              paddingHorizontal: 24,
              gap: 12,
              flexDirection: "row",
            }}
          >
            <Icons
              name="search"
              size={24}
              color={colors.text}
              style={{ opacity: 0.5 }}
            />
            <Text
              style={{
                flex: 1,
                fontSize: 16,
                color: colors.text,
                opacity: 0.5,
              }}
            >
              Search
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
              backgroundColor: colors.primary,
            }}
          >
            <Icons name="tune" size={24} color={colors.background} />
          </TouchableOpacity>
        </View>
        {/* Grid Collection View */}
        <View style={{ paddingHorizontal: 24 }}>
          {/* Title Bar */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
              }}
            >
              New Collection
            </Text>
            <TouchableOpacity>
              <Text>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", height: 200, gap: 12 }}>
            {/* Card */}
            <View style={{ flex: 1 }}>
              <Card />
            </View>
            <View style={{ flex: 1, gap: 12 }}>
              <Card />
              <Card />
            </View>
          </View>
        </View>
        {/* Categories Section */}
        <FlatList
          data={CATEGORIES}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
            gap: 16,
          }}
          renderItem={({ item, index }) => {
            const isSelected = categoryIndex === index;
            return (
              <TouchableOpacity
                onPress={() => setCategoryIndex(index)}
                style={{
                  backgroundColor: isSelected ? colors.primary : colors.card,
                  paddingHorizontal: 16,
                  paddingVertical: 10,
                  borderRadius: 100,
                  borderWidth: isSelected ? 1 : 0,
                  borderColor: colors.border,
                }}
              >
                <Text
                  style={{
                    color: isSelected ? colors.background : colors.text,
                    fontWeight: "600",
                    fontSize: 16,
                    opacity: isSelected ? 1 : 0.5,
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
        {/* Masonry-list section */}
        <MasonryList
          data={[1, 2, 3, 454, 4, 56, 44]}
          keyExtractor={(item): string => item}
          numColumns={2}
          contentContainerStyle={{
            padding: 24,
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, i }) => (
            <View
              style={{
                aspectRatio: i === 0 ? 1 : 2 / 3,
                position: "relative",
                overflow: "hidden",
                marginTop: 12,
                borderRadius: 20,
              }}
            >
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                }}
                resizeMode="cover"
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                }}
              />
              <View style={{
                flex:1,
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <View style={{ flexDirection: "row", padding: 12, gap: 8 }}>
                  <Text
                    style={{
                      flex: 1,
                      fontSize: 12,
                      fontWeight: "600",
                      color: colors.text,
                    }}
                  >
                    PUMA Everyday Hussle
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: colors.background,
                      borderRadius: 100,
                      height: 32,
                      aspectRatio: 1,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icons
                      name="favorite-border"
                      size={20}
                      color={colors.text}
                    />
                  </TouchableOpacity>
                </View>
                <BlurView
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    paddingVertical: 6,
                    borderRadius: 100,
                    overflow: 'hidden',
                    margin: 12,
                    paddingHorizontal:6
                    
                  }}
                  intensity={20}
                >
                  <Text
                    style={{ flex: 1, 
                        fontSize: 12, 
                        color: colors.background,
                        marginLeft:6
                    }}
                    numberOfLines={1}
                  >
                    160€
                  </Text>
                  <TouchableOpacity style={{
                    paddingHorizontal: 16,
                    paddingVertical: 6,
                    borderRadius: 100,
                    backgroundColor: colors.background
                    }}>
                    <Icons name="add-shopping-cart" size={20} color={colors.text} />
                  </TouchableOpacity>
                </BlurView>
              </View>
            </View>
          )}
          onEndReachedThreshold={0.1}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const Card = () => {
  return (
    <View
      style={{
        flex: 1,
        position: "relative",
        overflow: "hidden",
        borderRadius: 20,
      }}
    >
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1682685797439-a05dd915cee9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
        }}
        resizeMode="cover"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      />
      <View
        style={{
          position: "absolute",
          left: 16,
          top: 16,
          paddingHorizontal: 16,
          paddingVertical: 10,
          backgroundColor: "rgba(0,0,0,0.25)",
          borderRadius: 100,
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: "600", color: "#fff" }}>
          130€
        </Text>
      </View>
    </View>
  );
};
