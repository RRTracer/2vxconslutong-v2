# 2VX Consulting — Landing Page

> Landing page professionnelle inspirée de [2vxconsulting.com](https://2vxconsulting.com), construite avec une stack moderne et déployée sur cluster **k3s**.

---

## 🛠️ Stack technique

| Outil | Rôle |
|---|---|
| [ViteJS](https://vitejs.dev/) | Bundler & dev server |
| [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) | Framework UI |
| [TailwindCSS](https://tailwindcss.com/) | Styling utilitaire |
| [DaisyUI](https://daisyui.com/) | Bibliothèque de composants |
| [React Router DOM](https://reactrouter.com/) | Routing SPA |
| [EmailJS](https://www.emailjs.com/) | Envoi de mails côté client |
| [Docker](https://www.docker.com/) | Conteneurisation |
| [k3s](https://k3s.io/) | Orchestration Kubernetes léger |

---

## 📁 Structure du projet

```
.
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/              # Logo, images statiques
│   ├── components/          # Composants réutilisables
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   └── ContactForm.tsx
│   ├── pages/               # Pages de l'application
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── k8s/                     # Manifests Kubernetes
│   ├── deployment.yaml
│   ├── service.yaml
│   └── ingress.yaml
├── Dockerfile
├── .env.example
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

---

## 🚀 Démarrage rapide

### Prérequis

- Node.js `>= 18`
- npm `>= 9`

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/<votre-org>/<votre-repo>.git
cd <votre-repo>

# Installer les dépendances
npm install

# Copier et configurer les variables d'environnement
cp .env.example .env
```

### Variables d'environnement

Renseigner le fichier `.env` à la racine du projet :

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_TO_EMAIL=contact@votre-domaine.com
```

> ⚠️ Ne jamais commiter le fichier `.env`. Il est listé dans `.gitignore`.

### Lancer en développement

```bash
npm run dev
```

L'application est accessible sur [http://localhost:5173](http://localhost:5173).

### Build de production

```bash
npm run build
npm run preview   # Prévisualisation du build
```

---

## 🐳 Docker

### Build de l'image

```bash
docker build -t 2vx-landing:latest .
```

### Lancer le conteneur localement

```bash
docker run -p 8080:80 \
  --env-file .env \
  2vx-landing:latest
```

L'application est accessible sur [http://localhost:8080](http://localhost:8080).

---

## ☸️ Déploiement sur k3s

### Prérequis cluster

- Cluster k3s opérationnel
- `kubectl` configuré avec accès au cluster
- Un **Ingress Controller** actif (Traefik intégré à k3s par défaut)
- Un **registry** accessible depuis le cluster (Docker Hub, registry privé, etc.)

### 1. Pousser l'image vers le registry

```bash
docker tag 2vx-landing:latest <votre-registry>/2vx-landing:latest
docker push <votre-registry>/2vx-landing:latest
```

### 2. Créer le Secret pour les variables d'environnement

```bash
kubectl create secret generic 2vx-landing-env \
  --from-literal=VITE_EMAILJS_SERVICE_ID=your_service_id \
  --from-literal=VITE_EMAILJS_TEMPLATE_ID=your_template_id \
  --from-literal=VITE_EMAILJS_PUBLIC_KEY=your_public_key \
  --from-literal=VITE_EMAILJS_TO_EMAIL=contact@votre-domaine.com \
  -n default
```

### 3. Appliquer les manifests Kubernetes

```bash
kubectl apply -f k8s/
```

### 4. Vérifier le déploiement

```bash
# Vérifier les pods
kubectl get pods -l app=2vx-landing

# Vérifier le service
kubectl get svc 2vx-landing

# Vérifier l'ingress
kubectl get ingress 2vx-landing
```

### 5. Accéder à l'application

Une fois l'Ingress configuré avec votre domaine, l'application est accessible via l'URL définie dans `k8s/ingress.yaml`.

---

## 📄 Manifests Kubernetes

### `k8s/deployment.yaml`

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: 2vx-landing
  labels:
    app: 2vx-landing
spec:
  replicas: 2
  selector:
    matchLabels:
      app: 2vx-landing
  template:
    metadata:
      labels:
        app: 2vx-landing
    spec:
      containers:
        - name: 2vx-landing
          image: <votre-registry>/2vx-landing:latest
          ports:
            - containerPort: 80
          envFrom:
            - secretRef:
                name: 2vx-landing-env
          resources:
            requests:
              cpu: "100m"
              memory: "128Mi"
            limits:
              cpu: "250m"
              memory: "256Mi"
```

### `k8s/service.yaml`

```yaml
apiVersion: v1
kind: Service
metadata:
  name: 2vx-landing
spec:
  selector:
    app: 2vx-landing
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: ClusterIP
```

### `k8s/ingress.yaml`

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: 2vx-landing
  annotations:
    traefik.ingress.kubernetes.io/router.entrypoints: websecure
    cert-manager.io/cluster-issuer: letsencrypt-prod   # si cert-manager est installé
spec:
  rules:
    - host: votre-domaine.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: 2vx-landing
                port:
                  number: 80
  tls:
    - hosts:
        - votre-domaine.com
      secretName: 2vx-landing-tls
```

---

## 🔄 Mise à jour du déploiement

```bash
# Rebuild et push
docker build -t <votre-registry>/2vx-landing:v1.1.0 .
docker push <votre-registry>/2vx-landing:v1.1.0

# Rolling update
kubectl set image deployment/2vx-landing \
  2vx-landing=<votre-registry>/2vx-landing:v1.1.0

# Vérifier le rollout
kubectl rollout status deployment/2vx-landing
```

---

## 📜 Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run preview` | Prévisualisation du build |
| `npm run lint` | Analyse statique du code |
| `npm run type-check` | Vérification TypeScript |

---

## 📋 Pages de l'application

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero avec logo, slogan et CTA |
| `/about` | À propos | Présentation, valeurs, équipe |
| `/services` | Services | Offres et expertises |
| `/contact` | Contact | Formulaire d'envoi de mail |

---

## 🤝 Contribution

1. Forker le dépôt
2. Créer une branche feature : `git checkout -b feature/ma-feature`
3. Commiter les changements : `git commit -m 'feat: ajout de ma feature'`
4. Pousser la branche : `git push origin feature/ma-feature`
5. Ouvrir une Pull Request

---

## 📝 Licence

Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](./LICENSE) pour plus de détails.

---

<p align="center">Made with ❤️ — Inspiré de <a href="https://2vxconsulting.com">2vxconsulting.com</a></p>