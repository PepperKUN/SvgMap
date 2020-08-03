<template>
  <div class="home">
    <svgmap :options="map" :width="500" :height="300"></svgmap>
  </div>
</template>

<script>
// @ is an alias to /src
import svgmap from "../components/SvgMap";

export default {
  name: "Home",
  components: {
    svgmap,
  },
  data() {
    let mapData = [
      {
        name: "崇明",
        number: 0
      },
      {
        name: "松江",
        number: 66
      },
      {
        name: "闵行",
        number: 70
      },
      {
        name: "宝山",
        number: 20
      },
      {
        name: "嘉定",
        number: 80
      },
      {
        name: "青浦",
        number: 30
      },
      {
        name: "金山",
        number: 60
      },
      {
        name: "奉贤",
        number: 45
      },
      {
        name: "浦东",
        number: 80
      },
      {
        name: "普陀",
        number: 150,
        zoom: true
      },
      {
        name: "静安",
        number: 20,
        zoom: true
      },
      {
        name: "长宁",
        number: 68,
        zoom: true
      },
      {
        name: "徐汇",
        number: 39,
        zoom: true
      },
      {
        name: "黄浦",
        number: 110,
        zoom: true
      },
      {
        name: "虹口",
        number: 46,
        zoom: true
      },
      {
        name: "杨浦",
        number: 78,
        zoom: true
      }
    ];
    return {
      map: {
        colorGradient: ["#063574", "#92cffe"],
        range: [0, 150],
        highlight: "#06f092",
        gradWidth: 10,
        data: mapData,
        barPosition: "side",
        barRadius: 5,
        barBackground: "#ccc"
      },
    };
  },
};
</script>
