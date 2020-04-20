const Helpers = {
    api_url: 'http://zerobacklog.com/tms/',
    orc_api: 'http://webtools2.proweaverlinks.com/orchestraapi/Api/',
    convertBytes : (bytes) => {
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
            if (bytes == 0) return '0 Byte';
            var tiktok = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
            return Math.round(bytes / Math.pow(1024, tiktok), 2) + " " +sizes[tiktok];
    }
}

export default Helpers;
