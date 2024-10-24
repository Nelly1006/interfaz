body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f4f7;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

header {
    background-color: #007bff;
    color: white;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-container {
    display: flex;
    align-items: center;
}

.logo-container i {
    margin-right: 10px;
}

nav ul {
    list-style: none;
    display: flex;
}

nav ul li {
    margin-right: 20px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.container {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    width: 350px;
    text-align: center;
    margin: 20px 0;
}

input, select {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    width: 100%;
    padding: 12px;
    margin-top: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

.map-container {
    width: 100%;
    height: 300px;
    margin-top: 20px;
}

.hidden {
    display: none;
}
