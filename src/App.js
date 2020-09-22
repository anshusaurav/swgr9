import React from "react";

function App() {
  return (
    <div className="bg-blue-900 w-screen h-screen">
      <div className="fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <div>
          <img className="align-middle" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTMwcHgiIGhlaWdodD0iMTQ0LjU4OHB4IiB2aWV3Qm94PSIwIDAgMTMwIDE0NC41ODgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEzMCAxNDQuNTg4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgZmlsbD0iIzJFM0Y1OSIgY3g9IjY1Ljk0NCIgY3k9Ijc5LjUxNSIgcj0iNjUiLz4NCjxwYXRoIGZpbGw9IiM2REMyQzYiIGQ9Ik0xMTguMzQ4LDcxLjgwNGMwLjAwNC0wLjAxNiwwLjAxNC0wLjAyNywwLjAxNy0wLjA0M2MwLjMwNi0xLjU2NiwwLjQ2MS0xLjkwOSwwLjYxMy0zLjUwMQ0KCWMwLjE4OS0xLjk5Mi0zLjY4Mi0zLjA4OC03LjgyLTMuNjk5YzAtNi4zMjUsMC0xMC43MzcsMC0xMC43MzdjMC0xOS42MDUtMTIuNDE2LTM2LjMxLTI5LjgxNC00Mi42ODENCgljMC4yNDctMC45NzcsMC40MjYtMS44ODQsMC41NzktMi42NTRjMC45MzgtNC43MTMtNi4yNTMtOC41NjItMTYuMjA0LTguNTYyYy05Ljk1MSwwLTE3LjE0MiwzLjg0OC0xNi4yMDQsOC41NjINCgljMC4xNTMsMC43NywwLjMzMiwxLjY3NywwLjU3OSwyLjY1NGMtMTcuMzk4LDYuMzcxLTI5LjgxNCwyMy4wNzYtMjkuODE0LDQyLjY4MWMwLDAsMCw0LjQxMiwwLDEwLjczNw0KCWMtNC4xMzksMC42MTEtOC4wMSwxLjcwNy03LjgyLDMuNjk5YzAuMTUxLDEuNTkyLDAuMzA3LDEuOTM1LDAuNjEzLDMuNTAxYzAuMDAzLDAuMDE2LDAuMDEzLDAuMDI3LDAuMDE3LDAuMDQzDQoJYy0wLjc3MSwyLjU2Ny0wLjg0OSw1Ljc0NS0wLjYyOCw5LjE4OWMwLjQ1Nyw3LjEwOSwyLjAwMiwxMi45NjUsNy44MTgsMTMuOTc1YzAsNi41MDUsMCwxMS42NjYsMCwxMy4zNzYNCgljMCw0LjY3OSw0LjU0MywxNS41MDgsMjQuNTIzLDIwLjA1OGwtMC43MjMsMTIuMzRjNi44MzMsMi40NCwxNC4xOTMsMy43NzQsMjEuODY1LDMuNzc0YzcuNTE3LDAsMTQuNzM0LTEuMjgsMjEuNDUxLTMuNjI4DQoJbC0wLjc1MS0xMi40ODljMTkuOTcxLTQuNTUyLDI0LjUxMy0xNS4zNzcsMjQuNTEzLTIwLjA1NWMwLTEuNzEsMC02Ljg3MSwwLTEzLjM3NmM1LjgxNi0xLjAxLDcuMzYxLTYuODY2LDcuODE4LTEzLjk3NQ0KCUMxMTkuMTk2LDc3LjU0OSwxMTkuMTE5LDc0LjM3MiwxMTguMzQ4LDcxLjgwNHoiLz4NCjwvc3ZnPg0K" alt="" />
          <div className="absolute top-44 w-75 h-75 left-1/2 mx-auto my-0 transform -translate-y-1/2">
            <svg className="absolute inset-0 mx-auto my-auto animate-rotate origin-center" viewBox="25 25 50 50">
              <circle className="animate-dash stroke-current stroke-3" cx="50" cy="50" r="20"
                style={{
                  strokeDasharray: "1, 200",
                  strokeDashoffset: 0,
                  strokeLinecap: "round"
                }}

              />

            </svg>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
