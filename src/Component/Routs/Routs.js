import React from 'react'
import {Routes,Route} from "react-router-dom"
import Dashboard from "../../pages/Dashboard"
import Users from "../../pages/Users"
import Messages from "../../pages/Messages"
import Analytics from "../../pages/Analytics"
import FileManager from "../../pages/FileManager"

const Routs = () => {
  return (
    <div>
        <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/messages" element={<Messages />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/file-manager" element={<FileManager />} />
                  {/* <Route path="/order" element={<Order />} />
                  <Route path="/saved" element={<Saved />} />
                  <Route path="/settings" element={<Setting />} /> */}

                  <Route path="*" element={<> not found</>} />
                </Routes>
    </div>
  )
}

export default Routs