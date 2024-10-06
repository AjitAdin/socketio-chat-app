<h1>Real-Time Chat Application using Socket.IO</h1>

<p>
    This project is a simple real-time chat application built using <strong>Node.js</strong>, <strong>Express</strong>, and <strong>Socket.IO</strong>. It allows users to join a chat room, send messages, and view messages from others in real time. The app also displays the total number of active clients and shows typing feedback when a user is composing a message. The front-end interacts with the server through Socket.IO to handle message communication and feedback.
</p>

<!-- Project Photo -->
<img src="public/project-photo.png" alt="Real-Time Chat Application Screenshot" style="max-width: 100%; height: auto;">

<h2>Features</h2>
<ul>
    <li><strong>Real-time Communication</strong>: Messages sent by any user are instantly broadcasted to all connected clients.</li>
    <li><strong>Client Count</strong>: Displays the total number of clients connected to the server.</li>
    <li><strong>Typing Indicator</strong>: Notifies users when someone is typing a message.</li>
    <li><strong>Audio Notification</strong>: Plays a sound whenever a new message is received.</li>
    <li><strong>Responsive Front-End</strong>: Automatically scrolls to the latest message and updates the UI dynamically.</li>
</ul>

<h2>Technologies Used</h2>
<ul>
    <li><strong>Node.js</strong>: Backend runtime environment.</li>
    <li><strong>Express</strong>: Web framework for handling routes and serving static files.</li>
    <li><strong>Socket.IO</strong>: Enables real-time, bi-directional communication between web clients and the server.</li>
    <li><strong>Moment.js</strong>: For formatting timestamps in a human-readable way.</li>
    <li><strong>HTML/CSS/JavaScript</strong>: Front-end components for user interaction.</li>
</ul>

<h2>Project Structure</h2>
<pre>
your-chat-app/
│
├── public/
│   ├── index.html       # Front-end structure of the chat
│   ├── style.css        # Styling for the chat interface
│   ├── script.js        # Client-side Socket.IO logic and DOM manipulation
│   ├── ring.mp3         # Notification sound for new messages
│   └── project-photo.png # Screenshot of the application
│
├── server.js            # Server-side code to handle socket connections
├── package.json         # Project dependencies and scripts
└── .gitignore           # Files and directories to be ignored by Git
</pre>

<h2>How to Run</h2>
<ol>
    <li><strong>Clone the repository</strong>:
        <pre>
        git clone https://github.com/USERNAME/socketio-chat-app.git
        cd socketio-chat-app
        </pre>
    </li>
    <li><strong>Install the required dependencies</strong>:
        <pre>
        npm install
        </pre>
        <p>This command will install the following dependencies:</p>
        <ul>
            <li><strong>express</strong>: A web framework for Node.js that simplifies the process of building web applications by providing robust features for web and mobile applications.</li>
            <li><strong>socket.io</strong>: A library that enables real-time, bidirectional communication between web clients and the server, making it ideal for chat applications.</li>
            <li><strong>nodemon</strong>: A utility that monitors changes in your source code and automatically restarts your server, improving development efficiency.</li>
        </ul>
    </li>
    <li><strong>Start the server</strong>:
        <pre>
        npm start
        </pre>
    </li>
    <li><strong>Open</strong> <code>http://localhost:3000</code> in your browser to start chatting.</li>
</ol>

<h2>License</h2>
<p>
    This project is licensed under the MIT License. Feel free to use, modify, and distribute it.
</p>
