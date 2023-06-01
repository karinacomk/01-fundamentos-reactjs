import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'

export function Post(props) {
  console.log(props);
  
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar className={styles.avatar} src="https://github.com/kdikarina.png" />
          <div className={styles.authorInfo}>
            {/* strong e span tem por padrão display inline */}
            <strong>Karina de Almeida Lima</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de maio às 08:13h" dateTime='2022-05-11 08:13:00'>
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href="#">jane.design/doctorcare</a></p>

        <p>
        {/* melhor fazer com css esse espaço */}
          <a href="">#novoprojeto</a>{' '} 
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário'></textarea>
        
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
