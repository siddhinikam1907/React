import { useState } from "react";
import "./App.css";
import Login from "./Components/Login.jsx";
import Profile from "./Components/Profile.jsx";
import UserContextProvider from "./Context/UserContextProvider.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;

//WORKING OF CODE
/* [UserContext] ← created with createContext()

   ↓ wrapped in provider with `value={{ user, SetUser }}`

[UserContextProvider]
   ├── state: [user, SetUser]
   ├── provides these to:
   │
   ├── [Login] — uses SetUser to update context
   │       ⤷ triggers Profile to update
   └── [Profile] — uses user to show login status */

/*    Let’s assume we want UserBadge (a deeply nested component) to show the user's name (like “Welcome, Siddhi”).

We’ll do:

👎 Version 1: With Prop Drilling

✅ Version 2: With Context (useContext)

👎 Version 1: With Prop Drilling
You manually pass user down from App → Header → Navbar → UserBadge.

1. App.jsx
jsx
Copy
Edit
function App() {
  const [user, setUser] = useState({ username: "Siddhi" });

  return (
    <Header user={user} />
  );
}
2. Header.jsx
jsx
Copy
Edit
function Header({ user }) {
  return <Navbar user={user} />;
}
3. Navbar.jsx
jsx
Copy
Edit
function Navbar({ user }) {
  return <UserBadge user={user} />;
}
4. UserBadge.jsx
jsx
Copy
Edit
function UserBadge({ user }) {
  return <div>Welcome, {user.username}</div>;
}
🔁 This works, but all intermediate components (Header, Navbar) must handle a prop they don’t even use!

✅ Version 2: With useContext
Now, only the component that needs the data (UserBadge) consumes it — no prop drilling!

1. UserContext.js
js
Copy
Edit
import { createContext } from "react";
const UserContext = createContext();
export default UserContext;
2. UserContextProvider.jsx
js
Copy
Edit
import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "Siddhi" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
3. App.jsx
jsx
Copy
Edit
import UserContextProvider from "./UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <Header />
    </UserContextProvider>
  );
}
4. Header.jsx
jsx
Copy
Edit
function Header() {
  return <Navbar />;
}
5. Navbar.jsx
jsx
Copy
Edit
function Navbar() {
  return <UserBadge />;
}
6. UserBadge.jsx
jsx
Copy
Edit
import { useContext } from "react";
import UserContext from "./UserContext";

function UserBadge() {
  const { user } = useContext(UserContext);
  return <div>Welcome, {user.username}</div>;
}
✅ Only UserBadge deals with the user, and all other components remain clean and reusable.
 */
