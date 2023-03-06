import axios from 'axios';

export default async function producthunt(req, res) {
  const { code } = req.query;
  
  // Exchange authorization code for access token
  const response = await axios.post('https://api.producthunt.com/v2/oauth/token', {
    grant_type: 'authorization_code',
    client_id: YOUR_CLIENT_ID,
    client_secret: YOUR_CLIENT_SECRET,
    redirect_uri: 'http://localhost:3000/api/producthunt',
    code,
  });

  // Store access token in session or database
  const accessToken = response.data.access_token;

  // Redirect user to home page or dashboard
  res.redirect('/');
}
