
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { SideBar } from "./components/Sidebar";
import { Post } from "./components/Post";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/TheCodeTherapy.png',
      name: 'Marco Gomez',
      role: 'Tech Lead and Senior WebGL Engineer'
    },
    content: [
      {
        type: 'paragraph',
        content:
          'Im incredibly proud and honored to announce that I updated my Portfolio',
      },
      { type: 'link', content: 'https://mgz.me/' },
      {
        type: 'paragraph',
        content:
          'with all certificates of the 6 Awards I won with this project 🏆',
      },
    ],
    publishedAt: new Date('15 april 2023 00:23 UTC'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'https://www.figma.com/community/file/1102912263666619803' },
    ],
    publishedAt: new Date('15 april 2023 00:23 UTC'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map( post => {
            return (
              <Post
                key={post.id}
                author = {post.author}
                content = {post.content}
                publishedAt = {post.publishedAt}
              />
            )
          }) }
        </main>
      </div>
    </div>
  );
}
