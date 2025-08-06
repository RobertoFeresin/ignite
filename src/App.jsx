import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"
import "./global.css"

const posts = [
  {
    id: 1,
    author: {
      avatar_url: "https://github.com/RobertoFeresin.png",
      name: "Roberto Feresin",
      role: "Web Developer FullStack"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉jane.design/doctorcare' }
    ],
    publishAt: new Date('2022-05-19 20:00:00')
  },
  {
    id: 2,
    author: {
      avatar_url: "https://github.com/isa-bellinazzi.png",
      name: "Isabella Bellinazzi",
      role: "Web Developer Backend"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉jane.design/doctorcare' }
    ],
    publishAt: new Date('2022-05-21 20:00:00')
  },

];


//iteração

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishAt={post.publishAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App

