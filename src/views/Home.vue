<template>
  <div class="home">
    <!-- <svg-map-sh :mapData="data" :width="500" :height="400" :options="map"></svg-map-sh> -->
    <svgmap :mapData="data" :width="600" :height="500" :options="map"></svgmap>
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
        zoom: true,
        zIndex: 1,
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
        zoom: true,
        zIndex: 2,
      },
      {
        name: "杨浦",
        number: 78,
        zoom: true
      }
    ];
    return {
      data: mapData,
      map: {
        barPosition: "side",
        barPad: 100,
        barShow: true
      }
    };
  },
};
</script>
