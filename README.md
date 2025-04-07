# Floor Hosting: Game & Web Server Hosting Platform

Floor Hosting is a modern hosting platform built with React and Django, designed to provide high-performance, reliable server hosting solutions for both web and game servers at competitive prices.

![Floor Hosting Platform](public/floor-hosting-mockup.png)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Key Features](#key-features)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- **Web Hosting:** Professional web hosting with SSD storage and unlimited bandwidth
- **Game Server Hosting:** Host servers for popular games like RUST, CS2, Minecraft, and ARK
- **Flexible Plans:** Multiple subscription lengths with increasing discounts
- **DDoS Protection:** Enterprise-grade protection against DDoS attacks
- **24/7 Support:** Round-the-clock customer support for any issues
- **One-Click Mods:** Easy installation of popular mods and plugins
- **Instant Setup:** Servers deployed instantly after payment

## Tech Stack

### Frontend
- **Framework:** React, React Router
- **Styling:** Tailwind CSS
- **Icons:** Font Awesome
- **Fonts:** Inter, Poppins
- **Build Tool:** Vite

### Backend
- **Framework:** Django
- **API:** Django REST Framework
- **Database:** PostgreSQL
- **Authentication:** Django REST Auth
- **Admin Interface:** Django Admin
- **CORS:** django-cors-headers

## Getting Started

### Prerequisites

- Node.js 14.0 or higher
- Python 3.8 or higher
- npm or yarn
- pip

### Frontend Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/floor-hosting.git
   cd floor-hosting
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

### Backend Installation

1. **Create and activate virtual environment:**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Install backend dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run migrations:**
   ```bash
   python manage.py migrate
   ```

4. **Create superuser:**
   ```bash
   python manage.py createsuperuser
   ```

5. **Start the Django server:**
   ```bash
   python manage.py runserver
   ```

## Key Features

### Web Hosting

- **Multiple Plans:** Various hosting plans for different needs
- **SSD Storage:** Fast NVMe SSD storage for better performance
- **Free SSL:** Automatic SSL certificate installation
- **Email Hosting:** Professional email hosting included
- **Daily Backups:** Automatic backups for data safety

### Game Server Hosting

- **Multiple Games:** Support for popular games including RUST, CS2, Minecraft, and ARK
- **Optimized Configurations:** Pre-configured server settings for optimal performance
- **Competitive Pricing:** Affordable plans with subscription-based discounts
- **Mod Support:** One-click installation for popular mods and plugins

### Server Infrastructure

- **Premium Hardware:** High-performance CPUs and NVMe SSDs
- **DDoS Protection:** Enterprise-grade DDoS protection
- **High RAM:** Servers with ample RAM for smooth operation
- **99.9% Uptime:** Reliable infrastructure with redundant systems

### Management Features

- **Django Admin:** Easy service management through Django admin interface
- **Dynamic Pricing:** Subscription length-based pricing with automatic discounts
- **Feature Management:** Flexible feature lists for each service
- **Real-time Updates:** Instant reflection of admin changes on frontend

## API Endpoints

### Services
- `GET /api/services/` - List all services
- `GET /api/services/?type=web` - List web hosting services
- `GET /api/services/?type=game` - List game hosting services
- `POST /api/services/` - Create new service (admin only)
- `PUT /api/services/{id}/` - Update service (admin only)
- `DELETE /api/services/{id}/` - Delete service (admin only)

## Contributing

1. **Fork the repository**
2. **Create your feature branch:** `git checkout -b feature/AmazingFeature`
3. **Commit your changes:** `git commit -m 'Add some AmazingFeature'`
4. **Push to the branch:** `git push origin feature/AmazingFeature`
5. **Open a Pull Request**

## License

This project is licensed under the MIT License.

## Acknowledgments

- **React:** For frontend UI components
- **Django:** For backend API and admin interface
- **Tailwind CSS:** For responsive design
- **Font Awesome:** For icons
- **Google Fonts:** For typography
- **Vite:** For frontend development