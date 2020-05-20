import AsyncStorage from '@react-native-community/async-storage';
import CryptoJS from "react-native-crypto-js";

const Helpers = {
    api_url: 'http://zerobacklog.com/tms/',
    orc_api: function(item) {
        return 'https://webtools.proweaverlinks.com/orchestraapi/index.php/'+item;
    },
    key : 'proW3aver@2020',
    isLoggedIn : async() => {
        const encrypted = await AsyncStorage.getItem('usersdata');
        return  encrypted ? true : false;
    },
    decrypt : async () => {
        const encrypted = await AsyncStorage.getItem('usersdata');
        let decrypted = CryptoJS.AES.decrypt(encrypted, 'proW3aver@2020')
        let origText = decrypted.toString(CryptoJS.enc.Utf8);
        return JSON.parse(origText);
    },
    getSingleInfo : async(item) => {
        const encrypted = await AsyncStorage.getItem('usersdata');
        let decrypted = CryptoJS.AES.decrypt(encrypted, 'proW3aver@2020')
        let origText = decrypted.toString(CryptoJS.enc.Utf8);
        let json = JSON.parse(origText);
        return json[0][item];
    },
    convertBytes : (bytes) => {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) return '0 Byte';
        var tiktok = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, tiktok), 2) + " " +sizes[tiktok];
    }
}

export default Helpers;
