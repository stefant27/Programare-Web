<div align="center">
  <img src="https://vitejs.dev/logo.svg" alt="Vite Logo" width="80" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" width="90" />
  
  # 🚀 Project & Task Management Dashboard

  *O platformă modernă full-stack (MERN) pentru gestionarea eficientă a proiectelor și task-urilor, construită cu performanță și un design curat în minte.*

  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
  [![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
</div>

<br />

## 🔗 Link-uri Proiect Live

- **🌐 Frontend (Aplicația Web):** [https://programare-web-q722.vercel.app/](https://programare-web-q722.vercel.app/)
- **⚙️ Backend (API / Baza de date):** [https://programare-web.onrender.com/](https://programare-web.onrender.com/)

---

## 📖 Descriere Proiect

Această aplicație este un dashboard interactiv dedicat productivității. Oferă utilizatorului un mediu vizual plăcut pentru a-și organiza proiectele în funcție de tehnologiile folosite, stadiul lor (În lucru / Finalizat) și a permite operațiuni complete de **CRUD** (Creare, Citire, Actualizare, Ștergere). 

Aplicația separă logic arhitectura într-un frontend rapid compilat de Vite și un backend RESTful API în Node.js, cu date persistate într-o bază de date NoSQL.

### ✨ Funcționalități Principale

- **📊 Dashboard Statistici:** Oferă o viziune de ansamblu în timp real a statusului proiectelor (Total, Finalizate, În lucru).
- **📝 Gestiune Proiecte:** Adăugarea, editarea și ștergerea proiectelor cu actualizare imediată a interfeței.
- **🔍 Filtrare și Sortare:** Găsirea rapidă a proiectelor prin bara de căutare, filtrare după status și sortare alfabetică sau cronologică.
- **⚡ Performanță Optimă:** Frontend construit cu Vite pentru un Hot Module Replacement (HMR) instantaneu.
- **🛡️ Securitate & CORS:** Conexiune sigură între Frontend-ul găzduit pe Vercel și API-ul de pe Render.

---

## 💻 Tehnologii Folosite

### Frontend
- **React.js** - Construirea interfețelor de utilizator
- **Vite** - Build tool & dev server extrem de rapid
- **CSS3 / Flexbox** - Stilare modernă și responsivă

### Backend & Bază de Date
- **Node.js** - Runtime-ul pentru server
- **Express.js** - Framework minimal pentru crearea API-ului
- **MongoDB Atlas** - Bază de date NoSQL (Cloud)
- **Mongoose** - Modelarea datelor (ODM)

---

## 🛠️ Instalare și Configurare Locală

Urmează pașii de mai jos pentru a rula proiectul pe mașina ta locală.

### 1. Clonarea proiectului și instalarea pachetelor
```bash
# Instalează dependențele pentru frontend
npm install

# Instalează dependențele pentru backend
cd server
npm install
cd ..
```

### 2. Configurarea variabilelor de mediu
Creează un fișier `.env` în folderul `server/` cu următorul conținut (înlocuiește cu URI-ul tău de la MongoDB):
```env
MONGO_URI=mongodb+srv://<user>:<parola>@cluster0.mongodb.net/nume-baza-date?retryWrites=true&w=majority
PORT=3000
```

### 3. Pornirea serverelor

**Terminal 1 (Pornire Backend):**
```bash
cd server
node index.js
```

**Terminal 2 (Pornire Frontend):**
```bash
npm run dev
```
Aplicația va rula la `http://localhost:5173`.

---

## 📡 API Endpoints (Referință)

| Metodă | Endpoint | Descriere |
| :--- | :--- | :--- |
| `GET` | `/api/projects` | Returnează lista tuturor proiectelor |
| `POST` | `/api/projects` | Adaugă un proiect nou în baza de date |
| `PUT` | `/api/projects/:id` | Editează un proiect existent (sau actualizează statusul) |
| `DELETE` | `/api/projects/:id` | Șterge un proiect specificat prin ID |
| `GET` | `/api/stats` | Calculează și returnează statisticile proiectelor |

---

<div align="center">
  <h2>👨‍💻 Despre Autor</h2>
  <p>Dezvoltat cu ☕ și pasiune pentru ecosistemul web.</p>
  
  <table>
    <tr>
      <td align="center" width="600">
        <h3><strong>Trîmbițaș Ștefan Ioan</strong></h3>
        <p>
          🎓 <strong>Facultatea de Inginerie Electrică și Știința Calculatoarelor, Brașov</strong><br>
          💻 <strong>Specializare:</strong> Calculatoare<br>
          📅 <strong>An:</strong> 2 &nbsp;|&nbsp; 🏷️ <strong>Grupa:</strong> 4LF742<br>
          🌐 <strong>Materie:</strong> Programare Web
        </p>
      </td>
    </tr>
  </table>

  <br />
  
  <img src="https://img.shields.io/badge/Universitate-Transilvania%20Bra%C8%99ov-00529B?style=for-the-badge" alt="Universitatea Transilvania Brasov" />
  <img src="https://img.shields.io/badge/Facultate-IESC-00529B?style=for-the-badge" alt="IESC" />
  <img src="https://img.shields.io/badge/Curs-Programare%20Web-FF6B6B?style=for-the-badge&logo=javascript&logoColor=white" alt="Programare Web" />
</div>