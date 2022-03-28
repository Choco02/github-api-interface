import { WrapperUserHistoryStyled } from './styled';
import useGithub from "../../hooks/github-hooks"

const UsersHistory = () => {

  const { getUser } = useGithub();

  const findRecent = () => {
    const keys = Object.keys(localStorage);
    if (keys < 1) return;

    const items = keys
      .map(k => JSON.parse(localStorage.getItem(k)))
      .filter(item => item.hasUser);

    console.log("findRecent: ", items);

    return items;
  };

  return findRecent()?.map(({ user: { id, avatar, login } }) => (
    <WrapperUserHistoryStyled key={id}>
      <img
        src={avatar}
        alt={`Imagem de ${login}`}
        style={{
          borderRadius: "100%",
          maxWidth: "50px",
          maxHeight: "50px",
          cursor: "pointer",
        }}
      />
      <p
        style={{ marginLeft: "10px", cursor: "pointer" }}
        onClick={() => getUser(login)}
      >
        <strong> {login} </strong>
      </p>
    </WrapperUserHistoryStyled>
  ));
};

export { UsersHistory };
