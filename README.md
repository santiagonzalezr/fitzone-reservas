# Reto Técnico Angular

Aplicación desarrollada con **Angular** y **TailwindCSS** que simula un sistema de clases deportivas con autenticación, filtros y gestión de reservas.

## 🚀 Demo en producción
[Ver aplicación desplegada](https://fitzone-reservas-5ihdkfvak-santiagos-projects-80fafdc7.vercel.app/)

## 📂 Repositorio
[Ver código en GitHub](https://github.com/santiagonzalezr/fitzone-reservas.git)

---

## 📦 Requisitos previos
Antes de comenzar, asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

---

## 🔧 Instalación y ejecución local

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/santiagonzalezr/fitzone-reservas.git
   cd fitzone-reservas
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar la aplicación**
   ```bash
   ng serve
   ```
   La aplicación estará disponible en: [http://localhost:4200](http://localhost:4200)

---


## 🛠 Tecnologías utilizadas
- **Angular 18+** (standalone components, signals, rxResource)
- **TailwindCSS** para estilos y diseño responsivo
- **RxJS** para manejo reactivo de datos
- **LocalStorage** para persistencia de reservas y sesión simulada
- **JSON mocks** para simular API

---

## ✨ Funcionalidades principales
- Listado de clases con filtros por ubicación, categoría y texto.
- Vista de detalle de clase.
- Sistema de reservas con validación de duplicados.
- Simulación de autenticación de usuario.
- Protección de rutas mediante **Auth Guard**.
- Diseño responsivo con TailwindCSS.
- Pruebas unitarias en un componente, un servicio y un pipe.

---

## 👨‍💻 Autor
- **Santiago González** - (https://github.com/santiagonzalezr)
