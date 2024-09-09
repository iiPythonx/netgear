// Copyright (c) 2024 iiPython
// This is absolutely stupid, get your shit together NETGEAR.

export const DashboardFields = /var tagValueList = '(.*)'\+\n +'(.*)'\+\n +'(.*)'\+\n +'(.*)'\+\n +'(.*)';/g;
export const WiredClient = /CPE_Info\("\d","([\w\d-_.#]+)",piplineDecode\("([\d.]+) "\),"([\d\w:]+)"\);/g;
export const WirelessClient = /WLCPE_Info\("\d","([\w\d-_.#]+)","([\d.]+) ","([\d\w:]+)","\d","-(\d+)"\);/g;
export const WirelessClient5G = /ws_lt_5g\[\d+\]=new WLCPE_Info\("\d","([\w\d-_.#]+)","([\d.]+) ","([\d\w:]+)","\d","-(\d+)"\);/g;

// Handle text decoding (what the FUCK?)
export const netgear_decode = (text) => {
    const mapping = { "7C": "|", "5C": "\\", "27": "'", "22": "\"", "58": ":", "59": ";", "47": "/", "23": "#" };
    for (const match of [...text.matchAll(/#(\d[\dC])/g)][0].slice(1)) text = text.replace(`#${match}`, mapping[match]);
    return text;
}
