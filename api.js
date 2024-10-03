const axios = require('axios');
const express = require("express")
const app = express();

const PORT = process.env.PORT || 3000;
app.get('/getData',async(req,res) => {
  try {
    const response = await axios.get('https://assetdelivery.roblox.com/v2/asset/?id=307181070', {
      headers: {
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'cache-control': 'max-age=0',
        'priority': 'u=0, i',
        'sec-ch-ua': '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36'
      }
    });
    res.json({
        status: 'success',
        data: response.data
    })
  } catch (error) {
    res.status(500).json({
        status: 'error',
        message: 'Error: '+error
    })
  }
})

app.listen(PORT, () => {
 console.log('Server running');
});
