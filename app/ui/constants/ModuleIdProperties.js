import { images } from "./Base64Images";
import * as moduleIds from "../../rsc/ModuleIds";

var moduleIdProperties = { }

moduleIdProperties[moduleIds.BASE] = { 
    name: "Base",
    image: images.base 
};

moduleIdProperties[moduleIds.BASE_GEN2] = {
    name: "Base Gen 2",
    image: images.base
};

moduleIdProperties[moduleIds.MOBILE] =  {
    name: "Mobile", 
    image: images.mobile
};

moduleIdProperties[moduleIds.MOBILE_GEN2] = {
    name: "Mobile Gen 2",
    image: images.mobile
};

moduleIdProperties[moduleIds.MOBILE_GEN3] = {
    name: "Mobile Gen 3",
    image: images.mobile
};

moduleIdProperties[moduleIds.SNIFFER] = {
    name: "Sniffer", 
    image: images.sniffer
};

moduleIdProperties[moduleIds.HUB] = {
    name: "Hub",
    image: images.hub
};

export default moduleIdProperties