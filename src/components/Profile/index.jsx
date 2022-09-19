import Error from '../Error'
import Repository from '../Repository'
import './styles.css'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsLink45Deg } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'

export default function Profile({data, validation, erro, repos}) {

    if(data === null && erro === false) {
     
      return 
    } 

    if(erro === true) {
      console.log("Entrou no erro")

      return (<Error e={!validation ? "Preencha o campo!" : "Usuário não encontrado"}/>)
    }
  

    const displayRepos = repos.map(rep => 

      <Repository
        name={rep.name}
        description={rep.description}
        html_url={rep.html_url}
      />

      )
    
    return (
      <div className="container">
       
          
        <div className="profile">
          <div className="avatar-img">
            <img
              src={data.avatar_url}
              alt=""
            />
            <h2>{data.name}</h2>
            <p>{'@'+data.login}</p>
          </div>
          <div className="info">
            <div className="follow">
              <table>
                <tr>
                  <th>repositórios</th>
                  <th>seguidores</th>
                  <th>seguindo</th>
                </tr>
                <tr>
                  <td>{data.public_repos}</td>
                  <td>{data.followers}</td>
                  <td>{data.following}</td>
                </tr>
              </table>
            </div>
            <p>{data.bio}</p>
            <ul>
            <li><HiOutlineLocationMarker className="icon"/>{data.location}</li>
            <a href={data.html_url}><li><BsLink45Deg className="icon"/>{`github.com/${data.login}`}</li></a>
             {data.twitter_username ? <a href={`https://twitter.com/${data.twitter_username}`}><li><FiTwitter className="icon"/>{data.twitter_username}</li></a> : ""}
            </ul>
          </div>
        </div>

        <hr />
        <h2 class="repo-text">Repositórios</h2>
        
        {displayRepos}

      </div>
    );
}