import styles from './AboutTeam.module.css';

export default function AboutTeam({ hero, team }) {
  return (
      <div className={styles.teamWrap}>
        {team.map(member => (
          <div key={member.id} className={styles.card}>
            <div className={styles.imageBox}>
              <img src={member.image} alt={member.name} />
              <div className={styles.overlay}>
                <h4>{member.profession}</h4>
                <p>{member.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
}
