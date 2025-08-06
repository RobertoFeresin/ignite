import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"
import "./global.css"

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Roberto Feresin"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam incidunt alias blanditiis voluptas iure ex minima deleniti dolorem vel voluptatibus consectetur obcaecati, quas necessitatibus odit dignissimos perspiciatis nisi. Consequuntur, nemo?"
          />
          <Post
            author="Daniel Feresin"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem labore minus at unde qui totam eveniet, in iusto quaerat laborum numquam ipsam odit eaque sint, odio ab perferendis. Est, commodi."
          />
        </main>
      </div>
    </>
  )
}

export default App

