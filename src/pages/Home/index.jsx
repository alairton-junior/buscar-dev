import { useState } from 'react'
import Header  from '../../components/Header'
import Search  from '../../components/Search'
import Profile from '../../components/Profile'
import './styles.css'


  
//const [currentUser, setCurrentUser] = useState(null)
//const [repos, setRepos] = useState(null)

export default function App(props) {

  
  const [data, setData] = useState(null)
  const [erro, setErro] = useState(false)
  const [validation, setValidation] = useState(true)
  const [repos, setRepos] = useState([])
  
 

  function getUser(name) {
    if(name === '') {
      setValidation(false)
    } else {
      setValidation(true)
    }
   
   getData(name)
  }

  const getData = async (devUser) => {
    const userData = await fetch(`https://api.github.com/users/${devUser}`)
    const reposData = await fetch(`https://api.github.com/users/${devUser}/repos`)


    if(userData.ok === false) {
      setErro(true)
      console.log("Deu erro!")
    } else {
      setErro(false)
    }
      const newUser = await userData.json()
      const newRepos = await reposData.json()
      setData(newUser)
      setRepos(newRepos)
  }

  return (
    <div className="App">
      <Header/>
      <div className="content">
        <Search
        getUser={getUser}
        />
        <Profile data={data}  erro={erro} validation={validation} repos={repos}/>
      </div>
    </div>
  );
}
