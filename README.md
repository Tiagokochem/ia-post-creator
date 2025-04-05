# GPT Post Generator 🧠✍️

Aplicação fullstack desenvolvida com **Laravel 12** (API) e **React.js** (Vite) que permite gerar posts para redes sociais com auxílio da **OpenAI GPT-3.5**. O sistema simula um painel profissional com layout de sistema real (sidebar, header e footer).

---

## 🚀 Funcionalidades

- Geração automática de textos com IA
- Integração com OpenAI via API
- Interface moderna com layout de sistema
- Estrutura separada (frontend + backend)
- Simples, funcional e ideal para portfólio

---

## 🛠️ Tecnologias Utilizadas

**Backend:**
- PHP 8+
- Laravel 12
- Laravel Breeze (modo API)
- OpenAI API

**Frontend:**
- React.js (Vite)
- Axios
- Estilização inline (padrão sistema)

---

## ⚙️ Como rodar localmente

### 🔧 1. Clone o repositório
```bash
git clone https://github.com/Tiagokochem/ia-post-creator
cd ia-post-api
```

### 📦 2. Instale o backend (Laravel)
```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
```

Configure sua chave no `.env`:
```
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxx
```

### ▶️ 3. Inicie o servidor Laravel
```bash
php artisan serve
```

### 💻 4. Configure e rode o frontend
```bash
cd frontend
npm install
npm run dev
```

Acesse: [http://localhost:5173](http://localhost:5173)

---

## 🧪 Testando a API com cURL

```bash
curl -X POST http://localhost:8000/api/generate-post \
  -H "Content-Type: application/json" \
  -d '{"theme": "boas práticas de backend"}'
```

---

## 📸 Layout


---

## 📄 Licença

MIT. Livre para uso e modificação com créditos ao autor.

---

## ✍️ Autor

Desenvolvido por [Tiago Kochem](https://github.com/tiagokochem)
