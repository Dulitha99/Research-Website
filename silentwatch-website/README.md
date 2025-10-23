# SilentWatch Research Website

A modern, professional Next.js 14 website for the SilentWatch research project - "Memory Forensics Based Execution Phase Detection through Temporal Analysis with LSTM".

## 🚀 Features

- **Modern Design**: Clean, minimal, and academic-focused UI/UX
- **Responsive**: Fully responsive design that works on all devices
- **Animated**: Smooth transitions and animations using Framer Motion
- **Professional**: Academic color palette and typography
- **Interactive**: Engaging user interactions and hover effects

## 🎨 Design System

### Color Palette
- **Primary Blue**: #002B5B
- **Accent Cyan**: #00B8D9
- **Light Gray**: #F5F5F5
- **White**: #FFFFFF

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

## 📁 Project Structure

```
silentwatch-website/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx (Home)
│   │   ├── domain/page.tsx
│   │   ├── milestones/page.tsx
│   │   ├── documents/page.tsx
│   │   ├── presentations/page.tsx
│   │   ├── about/page.tsx
│   │   └── contact/page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Timeline.tsx
│   │   └── Card.tsx
│   └── data/
│       ├── milestones.json
│       ├── documents.json
│       ├── team.json
│       └── presentations.json
```

## 🛠️ Technologies Used

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React** (Icons)
- **React 18**

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd silentwatch-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📄 Pages Overview

### Home Page (/)
- Hero section with project introduction
- Feature highlights
- Quick navigation links
- Call-to-action sections

### Domain Page (/domain)
- Literature survey
- Research gap analysis
- Problem statement
- Research objectives
- Methodology
- Technologies used

### Milestones Page (/milestones)
- Interactive timeline
- Project statistics
- Progress tracking
- Milestone details

### Documents Page (/documents)
- Downloadable documents
- Document categories
- File information
- Download statistics

### Presentations Page (/presentations)
- Presentation gallery
- Timeline view
- Status tracking
- Download/view options

### About Page (/about)
- Team member profiles
- Research focus areas
- Team statistics
- Research philosophy

### Contact Page (/contact)
- Contact form
- Contact information
- FAQ section
- Response time information

## 🎭 Animations

The website features smooth animations throughout:

- **Page Transitions**: Fade-in and slide animations
- **Scroll Animations**: Elements animate as they enter viewport
- **Hover Effects**: Interactive hover animations
- **Loading States**: Smooth loading animations
- **Micro-interactions**: Button and card interactions

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Responsive design for tablets
- **Desktop**: Full desktop experience
- **Breakpoints**: Tailwind CSS responsive breakpoints

## 🎯 Key Features

### Navigation
- Sticky header with smooth scrolling
- Mobile hamburger menu
- Active page highlighting
- Smooth transitions

### Components
- **Header**: Responsive navigation with animations
- **Footer**: Contact information and links
- **HeroSection**: Animated hero banners
- **Timeline**: Interactive milestone timeline
- **Card**: Reusable animated cards

### Data Management
- JSON-based data structure
- Easy content updates
- Structured data for all sections

## 🔧 Customization

### Colors
Update colors in `src/app/globals.css`:
```css
:root {
  --primary-blue: #002B5B;
  --accent-cyan: #00B8D9;
  --light-gray: #F5F5F5;
  --white: #FFFFFF;
}
```

### Content
Update content in JSON files in `src/data/`:
- `milestones.json` - Project milestones
- `documents.json` - Available documents
- `team.json` - Team member information
- `presentations.json` - Presentation details

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy
The website can be deployed to any platform that supports Next.js:
- Vercel (recommended)
- Netlify
- AWS
- DigitalOcean

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **Email**: silentwatch@sliit.lk
- **Institution**: Faculty of Computing, SLIIT
- **Address**: New Kandy Road, Malabe, Sri Lanka

## 🙏 Acknowledgments

- Faculty of Computing, SLIIT
- Research supervisors and team members
- Open source community for excellent tools and libraries

---

**SilentWatch Research Project** - Advancing Memory Forensics through Machine Learning