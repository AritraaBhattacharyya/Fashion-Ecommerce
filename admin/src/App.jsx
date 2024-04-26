import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Admin from './Pages/Admin/Admin'
import AddProduct from './Components/AddProduct/AddProduct'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Admin/>
    </div>
  )
}

export default App
/*
import Flask from flask
app=Flask(__name__)

@app.route('/')
def hello_world():
  return

if __name__=="__main__":
  app.run(debug=True)

*/