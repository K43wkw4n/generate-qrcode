# 🎨 QR Studio - QR Code Generator

A beautiful, feature-rich web application to generate customizable QR codes with advanced styling options. Built with **React**, **TypeScript**, **Vite**, and **Ant Design**.

![React](https://img.shields.io/badge/React-18.3-blue?logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript) ![Vite](https://img.shields.io/badge/Vite-6.3-green?logo=vite) ![Ant Design](https://img.shields.io/badge/Ant%20Design-5.27-blue?logo=antdesign) ![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 🔧 Core Functionality
- **🔗 URL & Text to QR Code**: Convert any URL, text, or content into a QR code instantly
- **🎨 Advanced Color Customization**: 
  - Customize foreground (dot) color
  - Customize background color
  - Real-time color picker with instant preview
- **🔘 Shape & Style Variants**:
  - Multiple body shape options (square, dots, rounded, classy, extra-rounded)
  - Eye frame shape customization (corner styling)
  - Eye ball shape options
- **🖼️ Logo Support**: Add a logo or image in the center of the QR code
- **🌐 Content Support**: Generate QR codes for URLs, text, contact info, WiFi, and more

### 🎯 User Experience
- **⚡ Real-time Preview**: See changes instantly as you customize
- **⬇️ Multiple Export Formats**: Download as PNG, JPG, or SVG
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **🌙 Theme Support**: Light and dark mode support
- **🇬🇧🇹🇭 Multi-language**: English and Thai language support
- **⚡ No Data Storage**: Everything runs client-side, no data is stored
- **✅ No Backend Required**: Pure frontend application

## 🚀 Getting Started

### Prerequisites
- **Node.js** 16 or higher
- **npm** or **yarn**
- **Git** (for cloning the repository)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/generate-qrcode.git
   cd generate-qrcode
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   # or
   yarn preview
   ```

## 📖 Usage Guide

### Basic Steps
1. **Enter Content**: Paste a URL, text, or any content in the "Paste a URL, text, or any content" input field
2. **Enable Auto Update**: Toggle "Auto update" for real-time preview as you type
3. **Customize Styling**:
   - **Body Shape**: Choose from square, dots, rounded, classy, or extra-rounded
   - **Eye Frame**: Customize the corner frames (dot, square, rounded, etc.)
   - **Eye Ball**: Adjust the center dot styling
   - **Colors**: Use color pickers for foreground and background
4. **Add Logo** (optional):
   - Click the upload button under "Center Logo"
   - Select an image file (PNG, JPG, etc.)
5. **Download**: Click the desired format button (PNG, JPG, SVG) to download your QR code

### Example Use Cases
- **Marketing**: Create branded QR codes for print materials
- **WiFi Sharing**: Generate WiFi QR codes for your network
- **Contact Info**: Create vCard QR codes with your contact details
- **Event Registration**: Generate QR codes linking to event pages
- **Product Tracking**: Create QR codes for product authentication

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.3
- **Language**: TypeScript 5.7
- **Build Tool**: Vite 6.3
- **UI Library**: Ant Design 5.27
- **QR Code Library**: qr-code-styling 1.9
- **Styling**: CSS3

## 📁 Project Structure

```
generate-qrcode/
├── src/
│   ├── App.tsx           # Main application component
│   ├── App.css           # Application styles
│   ├── main.tsx          # React entry point
│   ├── index.css         # Global styles
│   └── assets/           # Static assets
├── public/
│   ├── robots.txt        # SEO robots file
│   └── sitemap.xml       # Sitemap for SEO
├── index.html            # HTML template
├── package.json          # Dependencies
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # This file
```

## 🔒 Security & Privacy

- ✅ **No Data Collection**: All processing happens in your browser
- ✅ **No Server Communication**: No data is sent to any server
- ✅ **No Tracking**: No analytics or user tracking
- ✅ **Open Source**: Code is transparent and auditable
- ✅ **Client-Side Only**: Pure frontend application

## 🚀 Deployment

The app can be deployed to any static hosting service:

### Vercel
```bash
vercel
```

### GitHub Pages
```bash
npm run build
# Upload dist/ folder to GitHub Pages
```

### Netlify
```bash
npm run build
# Drag and drop dist/ folder to Netlify
```

### Other Options
- Firebase Hosting
- AWS S3 + CloudFront
- Cloudflare Pages
- Azure Static Web Apps

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you encounter any issues or have questions, please:
- Open an issue on GitHub
- Check existing issues for solutions
- Review the documentation

## 🙏 Acknowledgments

- [qr-code-styling](https://github.com/kozakdenys/qr-code-styling) - QR code generation library
- [Ant Design](https://ant.design/) - UI component library
- [React](https://react.dev/) - UI framework
- [Vite](https://vitejs.dev/) - Build tool

---

**Made with ❤️ by forkaewkwan**
   - Click the delete button to remove logo
5. **Download**: Click "Download QR Code" button to save as PNG

## 🛠️ Tech Stack

- **React 19.2** - UI library
- **TypeScript 6.0** - Type safety
- **Vite 8.1** - Build tool and dev server
- **Ant Design 6.5** - UI components
- **QR Code Styling 1.9** - Advanced QR code generation
- **Oxlint** - Code linter

## 📁 Project Structure

```
src/
├── App.tsx           # Main application component
├── App.css           # Application styling
├── main.tsx          # React entry point
├── index.css         # Global styles
├── assets/           # Static assets
└── vite-env.d.ts     # Vite environment types

dist/                 # Production build output
```

## 🎨 Customization Guide

### Modifying Colors
Edit the gradient colors in `App.css`:
```css
.qr-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Adding More Shape Options
Edit `App.tsx` to add more shape variants in the `Segmented` component:
```tsx
options={[
  { label: '◻️ Square', value: 'square' },
  { label: '● Circle', value: 'circle' },
  // Add more options here
]}
```

## 📱 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔒 Privacy

This application:
- ✅ Runs entirely in your browser
- ✅ Does not send data to any server
- ✅ Does not store any QR codes
- ✅ Does not track your activity
- ✅ Works offline after initial load

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run code linter
npm run preview  # Preview production build
```

## 🐛 Known Issues

- Large QR codes with complex logos may increase file size
- Some antivirus software may flag downloaded PNG files (false positive)

## 🚀 Future Enhancements

- [ ] Batch QR code generation
- [ ] QR code history
- [ ] Share QR codes online
- [ ] Pattern customization
- [ ] Border/corner styling
- [ ] PDF export

## 📄 License

This project is open source and available under the MIT License.

## 👥 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## 💡 Tips

- **Pro Tip 1**: Use high-contrast colors for better scannability
- **Pro Tip 2**: Keep the logo size small (less than 30% of QR code)
- **Pro Tip 3**: Test QR codes with a mobile scanner before sharing
- **Pro Tip 4**: Download at highest quality for printing

---

Made with ❤️ using React + TypeScript + Vite
