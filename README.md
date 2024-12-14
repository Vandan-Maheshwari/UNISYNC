# UniSync - VIT Bhopal Digital Community Platform

UniSync is a comprehensive digital community platform designed specifically for VIT Bhopal students. It facilitates seamless interaction, collaboration, and information sharing within the campus community.

## Features

- **Synchronized Timetable**: Match your class schedules with other students
- **Campus Map**: Interactive map with professor cabin locations
- **Event Management**: Stay updated with campus events and activities
- **Community Chat**: Real-time messaging with fellow students
- **AI Assistant**: Get instant help with common queries
- **Profile System**: Manage your academic profile and connections

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Node.js
- Express
- MongoDB
- JWT Authentication

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/unisync.git
   ```

2. Install dependencies:
   ```bash
   cd unisync
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add:
   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Start the backend server:
   ```bash
   npm run server
   ```

## Project Structure

```
unisync/
├── src/
│   ├── components/
│   │   ├── Assistant/
│   │   ├── Chat/
│   │   ├── Events/
│   │   ├── Map/
│   │   └── ...
│   ├── context/
│   ├── types/
│   └── api/
├── server/
│   ├── models/
│   ├── routes/
│   └── middleware/
└── public/
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- VIT Bhopal University
- All contributors and supporters