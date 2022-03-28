import { useContext } from "react";
import { GithubContext } from "../providers/github-provider";

const useGithub = () => {
  const { githubState, getUser, getUserRepos, getUserStarred } = useContext(
    GithubContext
  );

  githubState.hasUser &&
    localStorage.setItem(`${githubState.user.id}`, JSON.stringify(githubState));

  return { githubState, getUser, getUserRepos, getUserStarred };
};

export default useGithub;
