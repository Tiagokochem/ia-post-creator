import { useState } from 'react'
import axios from 'axios'

export default function App() {
  const [theme, setTheme] = useState('')
  const [post, setPost] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const generatePost = async () => {
    if (!theme.trim()) return

    setLoading(true)
    setError(null)
    setPost('')

    try {
      const { data } = await axios.post('http://localhost:8000/api/generate-post', { theme })
      setPost(data.post)
    } catch {
      setError('Erro ao gerar post. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={styles.wrapper}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>GPT Post</h2>
        <nav style={styles.menu}>
          <a style={styles.menuItem} href="#">Gerar Post</a>
          <a style={styles.menuItem} href="#">Histórico</a>
          <a style={styles.menuItem} href="#">Configurações</a>
        </nav>
      </aside>

      {/* Main content */}
      <div style={styles.main}>
        <header style={styles.header}>
          <h1 style={styles.headerTitle}>Gerador de Post com IA</h1>
        </header>

        <main style={styles.content}>
          <p style={styles.description}>Insira um tema e gere instantaneamente um post otimizado para redes sociais.</p>

          <input
            type="text"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            placeholder="Ex: Marketing jurídico"
            style={styles.input}
            disabled={loading}
          />

          <button
            onClick={generatePost}
            style={{ ...styles.button, ...(loading && styles.buttonDisabled) }}
            disabled={loading}
          >
            {loading ? 'Gerando...' : 'Gerar Post'}
          </button>

          {error && <div style={styles.error}>{error}</div>}

          {post && (
            <div style={styles.resultBox}>
              <h3 style={styles.resultTitle}>Resultado:</h3>
              <div style={styles.resultContent}>{post}</div>
            </div>
          )}
        </main>

        <footer style={styles.footer}>
          <p>&copy; {new Date().getFullYear()} GPT Post. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#f3f4f6',
  },
  sidebar: {
    width: '220px',
    backgroundColor: '#1f2937',
    color: '#fff',
    padding: '20px',
    boxSizing: 'border-box',
  },
  logo: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  menuItem: {
    color: '#e5e7eb',
    textDecoration: 'none',
    fontSize: '16px',
    padding: '8px',
    borderRadius: '4px',
    transition: 'background 0.3s',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#fff',
    padding: '20px 30px',
    borderBottom: '1px solid #e5e7eb',
  },
  headerTitle: {
    margin: 0,
    fontSize: '20px',
    color: '#111827',
  },
  content: {
    flex: 1,
    padding: '30px',
  },
  description: {
    marginBottom: '20px',
    fontSize: '15px',
    color: '#4b5563',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    fontSize: '16px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    marginBottom: '16px',
    outline: 'none',
    boxSizing: 'border-box',
  },
  button: {
    padding: '12px 16px',
    fontSize: '16px',
    backgroundColor: '#2563eb',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  buttonDisabled: {
    backgroundColor: '#9ca3af',
    cursor: 'not-allowed',
  },
  error: {
    color: '#dc2626',
    marginTop: '12px',
    fontSize: '14px',
  },
  resultBox: {
    marginTop: '32px',
  },
  resultTitle: {
    fontSize: '16px',
    marginBottom: '8px',
    color: '#111827',
  },
  resultContent: {
    backgroundColor: '#fff',
    padding: '16px',
    borderRadius: '6px',
    border: '1px solid #d1d5db',
    whiteSpace: 'pre-wrap',
    fontFamily: 'monospace',
    fontSize: '14px',
    color: '#1f2937',
  },
  footer: {
    backgroundColor: '#f9fafb',
    padding: '15px 30px',
    fontSize: '14px',
    textAlign: 'center',
    color: '#6b7280',
    borderTop: '1px solid #e5e7eb',
  },
}
