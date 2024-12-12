import Link from 'next/link';

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to School Management</h1>
      <nav style={styles.nav}>
        <Link href="/addSchool" style={styles.link}>
          Add School
        </Link>
        <Link href="/showSchools" style={styles.link}>
          Show Schools
        </Link>
      </nav>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
  
    padding: '20px',
    minHeight: '100vh',
    background: 'linear-gradient(to right, #6a11cb, #2575fc)',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '3em',
    marginBottom: '40px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  link: {
    display: 'inline-block',
    padding: '15px 30px',
    fontSize: '1.2em',
    color: '#fff',
    background: '#ff5733',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
  },
  linkHover: {
    background: '#c70039',
  },
};
