import type { MetadataRoute } from "next";
export default function manifest():MetadataRoute.Manifest{return {name:"Edora Learning",short_name:"Edora",description:"Education technology for every learning ecosystem.",start_url:"/",display:"standalone",background_color:"#F8FAFC",theme_color:"#153E75",icons:[{src:"/favicon.ico",sizes:"any",type:"image/x-icon"}]}}
