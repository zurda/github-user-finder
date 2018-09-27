import axios from "axios";

const id = process.env.API_KEY;
const secret = process.env.API_SECRET;
const params = "?client_id=" + id + "&client_secret=" + secret;

export function getProfile(username) {
  return axios
    .get("https://api.github.com/users/" + username + params)
    .then(user => {
      return user.data;
    });
}

export function getRepos(username) {
  return axios
    .get(
      "https://api.github.com/users/" +
        username +
        "/repos" +
        params +
        "&per_page=100"
    )
    .then(repos => {
      return repos.data;
    });
}

export function getStarCount(repos) {
  if (Array.isArray(repos) && repos.length > 0) {
    return repos.reduce(function(count, repo) {
      return count + repo.stargazers_count;
    }, 0);
  }
  return 0;
}

export function handleError(error) {
  console.warn(error);
  return null;
}

export function getUserData(user) {
  return axios
    .all([getProfile(user), getRepos(user)])
    .then(function(data) {
      let profile = data[0];
      let repos = data[1];

      const res = {
        stargazers: getStarCount(repos),
        username: profile.login,
        id: profile.id,
        key: profile.id,
        avatarUrl: profile.avatar_url,
        title: profile.name,
        location: profile.location || "Earth",
        bio: profile.bio,
        followers: profile.followers,
        reposCount: profile.public_repos,
        hireable: profile.hireable
      };
      //window.localStorage.setItem(res.username, JSON.stringify(res));
      return res;
    })
    .catch(handleError);
}

const api = {
  getData: function(username) {
    return getUserData(username);
  }
};

export default api;
