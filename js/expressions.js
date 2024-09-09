// Copyright (c) 2024 iiPython
// This is absolutely stupid, get your shit together NETGEAR.

const tagline = " +'(.*)'\\+\n";  // This sucks. I hate this.

export const DashboardFields = new RegExp(`var tagValueList = '(.*)'\\+\n${tagline.repeat(3)} +'(.*)';`, "g");
export const WirelessFields = new RegExp(`var tagValueList = '(.*)'\\+\n${tagline.repeat(13)} +'(.*)';`, "g");
export const WiredClient = /CPE_Info\("\d","([\w\d-_.#]+)",piplineDecode\("([\d.]+) "\),"([\d\w:]+)"\);/g;
export const WirelessClient = /WLCPE_Info\("\d","([\w\d-_.#]+)","([\d.]+) ","([\d\w:]+)","\d","-(\d+)"\);/g;
export const WirelessClient5G = /ws_lt_5g\[\d+\]=new WLCPE_Info\("\d","([\w\d-_.#]+)","([\d.]+) ","([\d\w:]+)","\d","-(\d+)"\);/g;

// Handle text decoding (what the FUCK?)
export const netgear_decode = (text) => {
    const mapping = { "7C": "|", "5C": "\\", "27": "'", "22": "\"", "58": ":", "59": ";", "47": "/", "23": "#", "40": "(", "41": ")" };
    for (const match of text.matchAll(/#(\d[\dC])/g)) text = text.replace(`#${match[1]}`, mapping[match[1]]);
    return text;
}
