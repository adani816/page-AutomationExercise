# Automation Exercise - Playwright POM

Proyecto de automatización de pruebas para [AutomationExercise.com](https://www.automationexercise.com/) utilizando Playwright con TypeScript y el patrón Page Object Model (POM).

## 📋 Descripción

Este proyecto implementa pruebas automatizadas end-to-end para el sitio web AutomationExercise, cubriendo funcionalidades como registro de usuarios, login, y eliminación de cuentas. Utiliza el patrón Page Object Model para mantener un código limpio, reutilizable y fácil de mantener.

## 🛠️ Tecnologías Utilizadas

- **Playwright** - Framework de automatización de pruebas
- **TypeScript** - Lenguaje de programación
- **Node.js** - Entorno de ejecución
- **Page Object Model** - Patrón de diseño para organización del código

## 📁 Estructura del Proyecto

```
├── pages/                      # Page Objects
│   ├── basePage.ts            # Clase base con métodos comunes
│   ├── homePage.ts            # Página principal
│   ├── loginPage.ts           # Página de login/signup
│   ├── registerPage.ts        # Página de registro
│   ├── accountCreatePage.ts   # Página de confirmación de cuenta creada
│   ├── accountDeletedPage.ts  # Página de confirmación de cuenta eliminada
│   └── locators.ts           # Selectores centralizados
├── prueba/                    # Tests
│   ├── automationExercise.spec.ts
│   └── example.spec.ts
├── utils/                     # Utilidades
│   ├── data/
│   │   └── account.data.json  # Datos de prueba
│   └── generateEmail.ts       # Generador de emails
├── playwright-report/         # Reportes HTML
├── test-results/             # Resultados de ejecución
├── playwright.config.ts      # Configuración de Playwright
└── package.json
```

## 🚀 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd Page-AutomationExercise-POM-Playwright
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Instalar navegadores de Playwright**
   ```bash
   npx playwright install
   ```

## ▶️ Ejecución de Pruebas

### Ejecutar todas las pruebas
```bash
npx playwright test
```

### Ejecutar pruebas en modo headed (con interfaz gráfica)
```bash
npx playwright test --headed
```

### Ejecutar pruebas en un navegador específico
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Ejecutar una prueba específica
```bash
npx playwright test automationExercise.spec.ts
```

### Modo debug
```bash
npx playwright test --debug
```

## 📊 Reportes

### Ver reporte HTML
```bash
npx playwright show-report
```

Los reportes se generan automáticamente en la carpeta `playwright-report/` después de cada ejecución.

## 🧪 Casos de Prueba Implementados

### Test Case 1: Register User
1. Navegar a la página principal
2. Verificar que la página principal es visible
3. Hacer clic en 'Signup / Login'
4. Verificar que 'New User Signup!' es visible
5. Ingresar nombre y email
6. Hacer clic en el botón Signup
7. Verificar que 'ENTER ACCOUNT INFORMATION' es visible
8. Llenar los detalles del usuario
9. Hacer clic en 'Create Account'
10. Verificar que 'ACCOUNT CREATED!' es visible
11. Hacer clic en 'Continue'
12. Verificar que 'Logged in as username' es visible
13. Hacer clic en 'Delete Account'
14. Verificar que 'ACCOUNT DELETED!' es visible
15. Hacer clic en 'Continue'

## 🏗️ Patrón Page Object Model

### BasePage
Clase base que contiene métodos comunes utilizados por todas las páginas:
- Navegación
- Acciones básicas (click, type, select)
- Assertions comunes

### Page Objects
Cada página del sitio web tiene su propia clase que hereda de BasePage:
- **HomePage**: Página principal del sitio
- **LoginPage**: Página de login y signup
- **RegisterPage**: Página de registro de usuario
- **AccountCreatePage**: Página de confirmación de cuenta creada
- **AccountDeletedPage**: Página de confirmación de cuenta eliminada

## 🔧 Configuración

### Navegadores Soportados
- Chromium
- Firefox
- WebKit (Safari)

### Configuración de Playwright
El archivo `playwright.config.ts` incluye:
- Ejecución en paralelo
- Reintentos en CI
- Trazas en fallos
- Reportes HTML
- Configuración multi-navegador

## 📝 Datos de Prueba

Los datos de prueba se almacenan en:
- `utils/data/account.data.json` - Datos de cuenta de usuario
- `utils/generateEmail.ts` - Generador de emails únicos

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## 📞 Contacto

Para preguntas o sugerencias, por favor abre un issue en el repositorio.