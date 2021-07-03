import './styles.css';
import { Posts } from '../../components/Posts';
import { PostsProvider } from '../../contexts/PostsProvider';

function App() {
  return (
    <PostsProvider>
      <div>
        <h1>123</h1>
        <Posts />
      </div>
    </PostsProvider>
  );
}

export default App;
