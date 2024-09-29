# WebD - Real-Time Location Sharing

## Overview

WebD is a web application that allows users to see their real-time locations on a map and share those locations with other users. The application leverages Express for the server-side, Socket.IO for real-time communication, and Leaflet for map visualization.

## Features

- **Real-Time Location Tracking**: Users can see their current location updated on the map.
- **Multi-User Support**: Locations of multiple users are displayed on the same map.
- **WebSocket Communication**: Efficient real-time data exchange using Socket.IO.

## Technologies Used

- **Express**: For creating the web server.
- **Socket.IO**: For real-time communication between clients and the server.
- **Leaflet**: For rendering interactive maps.
- **Node.js**: The runtime for executing JavaScript on the server.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- A modern web browser that supports the Geolocation API.

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Osank31/map-backend.git
   cd map-backend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Server**:
   ```bash
   npm run dev
   ```

   The server will start and listen on `http://localhost:3000` (or your specified IP).

### Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. Allow the application to access your location when prompted.
3. You will see your current location on the map.
4. If other users are connected, their locations will also be displayed.

## Code Structure

- **index.js**: Main server file that handles socket connections and location data.
- **package.json**: Configuration file with dependencies and scripts.
- **public/**: (If applicable) Directory for static files (e.g., HTML, CSS, JS).

## Contributing

Feel free to fork the repository and create pull requests for improvements or bug fixes. Issues can be reported for any problems you encounter.

## License

This project is open-source under the ISC License.

## Acknowledgments

- [Express](https://expressjs.com) for web framework capabilities.
- [Socket.IO](https://socket.io) for real-time communication.
- [Leaflet](https://leafletjs.com) for the mapping library.

## Contact

For further questions or feedback, please reach out via [your email or contact method].