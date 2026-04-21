// import axios from "axios";

// export default axios.create({
//     baseURL: 'http://localhost:8000/',
// })

import axios from "axios";

// This checks if we are on Vercel or running locally
const isProd = process.env.NODE_ENV === 'production';

export default axios.create({
    // If on Vercel, use your live URL; otherwise, use localhost
    baseURL: isProd 
        ? 'https://travel1-next.vercel.app/' 
        : 'http://localhost:8000/',
});