export default {
  async fetch(request, env) {
    const TELEGRAPH_URL = 'https://api.openai.com';
    const url = new URL(request.url);
    url.host = TELEGRAPH_URL.replace(/^https?:\/\//, '');
    
    const modifiedRequest = new Request(url.toString(), {
      headers: request.headers,
      method: request.method,
      body: request.body,
      redirect: 'follow'
    });
  
    const response = await fetch(modifiedRequest);
    const modifiedResponse = new Response(response.body, response);
  
    // 添加允许跨域访问的响应头
    modifiedResponse.headers.set('Access-Control-Allow-Origin', '*');
    return modifiedResponse;
  },
};
