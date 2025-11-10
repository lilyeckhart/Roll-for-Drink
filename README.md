# ☕ Coffee Roller

A fun, interactive web app that randomly generates unique coffee drink combinations for your coffee shop! Let your customers discover new flavor combinations by rolling the dice.

![Coffee Roller App](https://img.shields.io/badge/React-18.x-blue) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-teal)

## ✨ Features

- **Drink Selection**: Choose between Latte or Chai
- **Temperature Options**: Hot or Iced
- **Milk Varieties**: 8 different milk options (Whole, Oat, Almond, Soy, Coconut, 2%, Skim, Half & Half)
- **Random Flavor Generator**: Rolls for 2-3 unique syrup combinations
- **19 Flavor Syrups**: Including Vanilla, Caramel, Hazelnut, Lavender, Pumpkin Spice, and more
- **Beautiful UI**: Cool blue and green color scheme with smooth animations
- **Mobile Responsive**: Works great on all devices

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone or download this repository**

2. **Install dependencies**
   ```bash
   cd coffee-roller-app
   npm install
   ```

3. **Run the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   - The app will automatically open at `http://localhost:3000`

## 📦 Deploy to Netlify

### Method 1: Drag & Drop (Easiest)

1. Build the production version:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com) and log in

3. Drag the `build` folder to the Netlify drop zone

4. Your app is live! 🎉

### Method 2: GitHub Integration

1. Push your code to GitHub

2. On Netlify, click "Add new site" → "Import an existing project"

3. Connect your GitHub repository

4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`

5. Click "Deploy site"

## 🎨 Customization

### Adding More Syrups

Edit the `syrups` array in `src/App.js`:

```javascript
const syrups = [
  'Vanilla',
  'Caramel',
  'Your New Flavor',
  // Add more here...
];
```

### Changing Colors

The app uses Tailwind CSS. To change the color scheme, find and replace these color classes in `src/App.js`:

- `teal-` → Your preferred color (e.g., `purple-`, `pink-`, `indigo-`)
- `cyan-` → Your preferred accent color
- `emerald-` → Your preferred background color

### Adding More Milk Options

Edit the `milkOptions` array in `src/App.js`:

```javascript
const milkOptions = [
  'Whole Milk',
  'Your New Milk',
  // Add more here...
];
```

### Changing Number of Flavors

Find this line in `src/App.js`:

```javascript
const numFlavors = Math.random() < 0.5 ? 2 : 3;
```

Change to always give 3 flavors:
```javascript
const numFlavors = 3;
```

Or make it 1-4 flavors:
```javascript
const numFlavors = Math.floor(Math.random() * 4) + 1;
```

## 🛠️ Built With

- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Create React App** - React development environment

## 📱 Usage

1. Select your drink type (Latte or Chai)
2. Choose your temperature (Hot or Iced)
3. Pick your milk preference
4. Click "Roll for Flavors!"
5. Discover your unique drink combination

## 📝 Scripts

- `npm start` - Run development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (⚠️ irreversible)

## 🐛 Troubleshooting

### App won't start
- Make sure Node.js is installed: `node --version`
- Delete `node_modules` and run `npm install` again
- Clear npm cache: `npm cache clean --force`

### Build fails
- Check for syntax errors in `src/App.js`
- Make sure all dependencies are installed: `npm install`

### Deployment issues on Netlify
- Ensure build command is `npm run build`
- Ensure publish directory is `build`
- Check the deploy logs for specific errors

## 💡 Ideas for Enhancement

- Add ability to save favorite combinations
- Include caffeine level options
- Add price calculator
- Create a "barista mode" with ingredient measurements
- Add seasonal syrup rotation
- Include allergen warnings
- Add drink size options
- Create a history of rolled drinks

## 📄 License

This project is open source and available for use in your coffee shop!

## 🤝 Contributing

Feel free to fork this project and customize it for your coffee shop's needs!

## 💬 Support

If you have questions or need help customizing the app, feel free to reach out or open an issue.

---

Made with ☕ and 💙 for coffee lovers everywhere!
