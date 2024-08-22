import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, NotFound } from "../pages"
export const PagesGPT :React.FC = () => {
  return(
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/ups" element={<NotFound/>}/>
        <Route path="/*" element={<Navigate to={'/ups'}/>}/> 
      </Routes>
    </>
 )
}

