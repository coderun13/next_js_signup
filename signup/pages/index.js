import Link from 'next/link';
import styles from '../styles/home.module.css';
import { auth, googleAuthProvider } from '../firebase'; // Import Firebase auth and Google provider

const Home = () => {
  const handleGoogleSignup = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
      // Handle successful sign-in (redirect, display message, etc.)
    } catch (error) {
      console.error('Error signing in with Google:', error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to My App</h1>
      <p className={styles.description}>Start your journey:</p>
      <button onClick={handleGoogleSignup} className={styles.googleButton}>Sign Up with Google</button>
      <p className={styles.orText}>or</p>
      <Link href="/signup">
        <button className={styles.signupButton}>Sign Up with Email</button>
      </Link>
    </div>
  );
};

export default Home;

// const Home = () => {
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Welcome to My App</h1>
//       <p className={styles.description}>Start your journey by signing up:</p>
//       <Link href="/signup">
//         < button className={styles.signupButton}>Sign Up</button>
//       </Link>
//     </div>
//   );
// };

//export default Home;
