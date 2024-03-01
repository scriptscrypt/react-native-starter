import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { apiFetchData } from "../services/apis/DetailsAPI";

interface PostData {
  id: number;
  title: string;
}

const DetailScreen: React.FC = () => {
  const route = useRoute();
  const { id } = route.params as { id: string };
  const [data, setData] = useState<PostData>({} as PostData);

  const fnSetDetails = async (id: string) => {
    const res = await apiFetchData(id);
    console.log("data in apiFetchData is", res?.data);
    setData(res?.data);
  };
  useEffect(() => {
    fnSetDetails(id);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {data ? (
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "blue" }}>
          {data.title}
        </Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default DetailScreen;
